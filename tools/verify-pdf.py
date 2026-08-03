#!/usr/bin/env python3
"""Verifie qu'un PDF d'interieur respecte les regles KDP.

    pip install pymupdf
    python tools/verify-pdf.py app/kdp-formatter/__output__/*.pdf

Ces controles sont volontairement ecrits a part du moteur TypeScript : ils
relisent le fichier produit sans rien savoir de la facon dont il a ete produit.
"""

from __future__ import annotations

import glob
import sys

import fitz

PT = 72.0
TRIM_W_IN, TRIM_H_IN = 6.0, 9.0
MIN_MARGIN_IN = 0.25

# Reliure minimale exigee par KDP selon la pagination.
GUTTER_MIN = [(150, 0.375), (300, 0.5), (500, 0.625), (700, 0.75), (10**9, 0.875)]


def gutter_min_for(pages: int) -> float:
    return next(v for limit, v in GUTTER_MIN if pages <= limit)


class Report:
    def __init__(self, name: str) -> None:
        self.name = name
        self.failures: list[str] = []
        self.notes: list[str] = []

    def check(self, label: str, ok: bool, detail: str = "") -> None:
        line = f"    [{'OK  ' if ok else 'FAIL'}] {label}{f'  {detail}' if detail else ''}"
        self.notes.append(line)
        if not ok:
            self.failures.append(label)

    def skip(self, label: str, why: str) -> None:
        """Un controle sans objet sur ce fichier. Ni reussite, ni echec."""
        self.notes.append(f"    [ --  ] {label}  sans objet : {why}")


def text_blocks(page: fitz.Page) -> list[tuple[float, float, float, float]]:
    return [b[:4] for b in page.get_text("blocks") if b[4].strip()]


def verify(path: str) -> Report:
    report = Report(path)
    doc = fitz.open(path)
    pages = len(doc)
    rect = doc[0].rect

    report.check(
        "format 6 x 9 po sur toutes les pages",
        all(
            abs(p.rect.width - TRIM_W_IN * PT) < 0.01 and abs(p.rect.height - TRIM_H_IN * PT) < 0.01
            for p in doc
        ),
        f"{rect.width / PT:.4f} x {rect.height / PT:.4f} po, {pages} pages",
    )

    # --- polices ------------------------------------------------------------
    fonts = {}
    for page in doc:
        for f in page.get_fonts(full=True):
            fonts[f[3]] = f
    embedded = all(f[1] not in ("", "n/a") for f in fonts.values())
    subsetted = all(len(name) > 7 and name[6] == "+" for name in fonts)
    report.check("polices incorporees", embedded and bool(fonts), f"{len(fonts)} police(s)")
    report.check("polices en sous-ensemble taguees", subsetted, ", ".join(sorted(fonts)))

    # --- marges -------------------------------------------------------------
    worst = None
    violations = 0
    for page in doc:
        for x0, y0, x1, y1 in text_blocks(page):
            margin = min(x0, page.rect.width - x1, y0, page.rect.height - y1) / PT
            worst = margin if worst is None else min(worst, margin)
            if margin < MIN_MARGIN_IN:
                violations += 1
    report.check(
        f"rien sous la marge minimale KDP ({MIN_MARGIN_IN} po)",
        violations == 0,
        f"marge la plus etroite {worst:.3f} po" if worst is not None else "aucun texte",
    )

    # --- reliure ------------------------------------------------------------
    # La reliure est la marge interieure : a gauche sur les pages impaires
    # (recto), a droite sur les paires. On mesure le bord gauche du bloc de
    # texte sur chaque type de page.
    # Une page de corps porte plusieurs lignes de texte ; les liminaires, les
    # pages blanches et les ouvertures de chapitre n'en portent pas assez pour
    # reveler le bord du bloc.
    def body_left(page: fitz.Page) -> float | None:
        blocks = text_blocks(page)
        lines = sum(max(1, round((b[3] - b[1]) / 15)) for b in blocks)
        if lines < 6:
            return None
        return min(b[0] for b in blocks) / PT

    recto = [v for i, p in enumerate(doc) if i % 2 == 0 and (v := body_left(p)) is not None]
    verso = [v for i, p in enumerate(doc) if i % 2 == 1 and (v := body_left(p)) is not None]

    if recto and verso:
        inner, outer = min(recto), min(verso)
        report.check(
            "reliure miroir entre recto et verso",
            abs(inner - outer) > 0.01,
            f"recto {inner:.3f} po, verso {outer:.3f} po",
        )
    else:
        report.skip(
            "reliure miroir entre recto et verso",
            "ce livre n'a pas de page de corps des deux cotes",
        )

    if recto or verso:
        inner = min(recto) if recto else min(verso)
        required = gutter_min_for(pages)
        report.check(
            "reliure >= minimum KDP pour la pagination",
            inner >= required - 0.001,
            f"{inner:.3f} po applique, {required:.3f} po exige a {pages} pages",
        )
    else:
        report.check("corps de texte present", False, "aucune page de corps trouvee")

    doc.close()
    return report


def main(argv: list[str]) -> int:
    paths = [p for arg in argv for p in glob.glob(arg)]
    if not paths:
        print("aucun PDF a verifier")
        return 1

    failed = 0
    for path in sorted(paths):
        report = verify(path)
        status = "OK" if not report.failures else f"{len(report.failures)} ECHEC(S)"
        print(f"{path}  ->  {status}")
        for line in report.notes:
            print(line)
        failed += len(report.failures)

    print("\nRESULTAT :", "TOUT PASSE" if failed == 0 else f"{failed} controle(s) en echec")
    return 0 if failed == 0 else 1


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
