#!/usr/bin/env python3
"""Passe les EPUB produits dans EPUBCheck, l'outil de reference du W3C.

    set EPUBCHECK_JAR=C:\\chemin\\epubcheck.jar
    python tools/verify-epub.py app/kdp-formatter/__output__/*.epub

Telechargement : https://github.com/w3c/epubcheck/releases
Sans le jar, le script le dit et sort en erreur plutot que de faire croire
que la validation a eu lieu.
"""

from __future__ import annotations

import glob
import os
import re
import shutil
import subprocess
import sys

JAR = os.environ.get("EPUBCHECK_JAR", "epubcheck.jar")
COUNTS = re.compile(r"(\d+)\s+\w+\s*/\s*(\d+)\s+\w+\s*/\s*(\d+)\s+\w+\s*/\s*(\d+)")


def main(argv: list[str]) -> int:
    if not shutil.which("java"):
        print("java introuvable : EPUBCheck ne peut pas tourner")
        return 2
    if not os.path.exists(JAR):
        print(f"EPUBCheck introuvable a '{JAR}' — definissez EPUBCHECK_JAR")
        return 2

    paths = [p for arg in argv for p in glob.glob(arg)]
    if not paths:
        print("aucun EPUB a verifier")
        return 1

    failed = 0
    for path in sorted(paths):
        out = subprocess.run(
            ["java", "-jar", JAR, path],
            capture_output=True,
            text=True,
            encoding="utf-8",
            errors="replace",
        )
        combined = f"{out.stdout}\n{out.stderr}"
        errors = [
            line for line in combined.splitlines() if line.startswith(("ERROR", "FATAL", "WARNING"))
        ]
        status = "OK" if not errors else f"{len(errors)} probleme(s)"
        print(f"{path}  ->  {status}")
        for line in errors[:10]:
            print(f"    {line}")
        failed += len(errors)

    print("\nRESULTAT :", "TOUT PASSE" if failed == 0 else f"{failed} probleme(s)")
    return 0 if failed == 0 else 1


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
