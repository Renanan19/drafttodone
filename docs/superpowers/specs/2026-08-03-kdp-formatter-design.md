# Formateur de roman KDP — spécification

Date : 2026-08-03
Statut : design validé, spike de faisabilité passé

## 1. Pourquoi

Google Search Console (3 mois) : `formater roman kdp` est la requête n°1 du site en
impressions — **237 impressions, 0 clic, position 31**. Elle atterrit sur
`/fr/blog/mise-en-page-livre-broche-kdp` (242 impressions, position 30,9), qui appartient
au post de clé `kdp-paperback-formatting` (décliné FR/EN/DE/IT).

L'intention derrière cette requête est **l'intérieur imprimé** (format, marges, reliure,
fond perdu, PDF), pas l'ebook.

Objectif : transformer une page qui explique comment faire en une page qui **le fait**,
gratuitement et sans inscription, pour gagner des partages hors Google, des liens, et du
temps de session.

**Attente réalisée honnêtement** : l'outil ne fait pas passer la page de la position 31 à
la position 5 par lui-même. La preuve est dans les données : `/en/kdp-royalty-calculator`
est déjà un outil gratuit et stagne en position 64. Le mécanisme visé est la distribution
hors Google (groupes KDP francophones, forums, Reddit) et les liens entrants ; la remontée
SEO en est la conséquence.

## 2. Placement

**Aucune nouvelle route.** L'outil s'intègre en haut du post existant
`kdp-paperback-formatting`, locales **FR et EN** uniquement.

Raison : créer `/fr/formater-roman-kdp` cannibaliserait la seule page du site qui décolle
sur cette requête (son `seoTitle` est littéralement « Formater un roman pour KDP »). Le
guide devient la documentation de l'outil, ce qui sert aussi l'AEO. DE et IT conservent le
guide sans l'outil.

## 3. Périmètre

### Dans la v1

- Entrée : un fichier `.docx`.
- Sorties : `interieur.pdf` (prêt KDP) **et** `livre.epub` (Kindle), plus un rapport.
- Format unique **6 × 9 po**, sans fond perdu.
- Marges et reliure calculées sur la pagination réelle.
- Césure FR/EN, justification, typographie française (apostrophes, guillemets, espaces
  insécables).
- Tout dans le navigateur : aucun upload, aucun compte, aucun e-mail.

### Hors v1 (YAGNI)

Autres formats, fond perdu, images intérieures, notes de bas de page, hiérarchie de titres
au-delà de h2, contrôle veuves/orphelines, génération de couverture, comptes utilisateurs.

## 4. Architecture

```
app/kdp-formatter/
  index.tsx          UI client, charge le moteur à la demande
  copy.ts            chaînes FR/EN
  engine/
    kdp-rules.ts     marges, reliure, dos — source unique de vérité
    model.ts         BlockDoc (types)
    docx-reader.ts   dézippage + DOMParser → BlockDoc
    typography.ts    apostrophes, guillemets, espaces insécables
    hyphenate.ts     hypher + motifs FR/EN, chargés à la demande
    linebreak.ts     découpe de paragraphe + justification
    layout.ts        pagination, deux passes de reliure
    pdf-writer.ts    pdf-lib + fontkit
    epub-writer.ts   port de word_to_epub.py
    report.ts        diagnostics
```

Un parseur, **deux moteurs de rendu**. Aucun de ces modules n'est importé par le bundle
principal : le moteur et les polices ne sont chargés qu'au premier dépôt de fichier.

### Interface entre parseur et rendus

`BlockDoc` est le seul contrat :

```ts
type Inline = { text: string; bold?: boolean; italic?: boolean;
                underline?: boolean; sup?: boolean; sub?: boolean; href?: string };
type Block  = { kind: "paragraph" | "heading2" | "listItem" | "quote" | "sceneBreak";
                runs: Inline[]; ordered?: boolean };
type Chapter = { title: string; blocks: Block[] };
type BlockDoc = { meta: { title: string; author: string; lang: "fr" | "en" };
                  chapters: Chapter[] };
```

C'est exactement ce que `word_to_epub.py` extrait déjà ; le rendu EPUB est un port
mécanique de son sérialiseur.

## 5. Règles KDP

`kdp-rules.ts` est la seule source de vérité. Les chiffres viennent du post lui-même.

| Pages | Reliure minimale KDP | Appliqué (min + 0,125") |
|---|---|---|
| ≤ 150 | 0,375" | 0,500" |
| 151–300 | 0,500" | 0,625" |
| 301–500 | 0,625" | 0,750" |
| 501–700 | 0,750" | 0,875" |
| > 700 | 0,875" | 1,000" |

- Page : 6 × 9 po exacte, sans fond perdu.
- Marge extérieure 0,875", haut et bas 0,75".
- Corps 11,5 pt, interlignage 1,35 (≈ 34 lignes par page, 66–70 caractères par ligne).
  Ces trois valeurs sont des constantes à revalider sur un manuscrit réel.
- Polices : **Crimson Text** (OFL), 4 styles statiques, ~445 Ko au total, incorporées en
  sous-ensemble.
- Le corps commence en belle page. Chaque chapitre démarre sur une page de droite ; une
  page blanche est insérée si nécessaire.
- Pas de tête de page ni de folio sur les liminaires ni sur les ouvertures de chapitre.
- Liminaires générés : faux-titre, page de titre, page de copyright.
- Tête de page : titre en recto, auteur en verso.

Le rapport affiche aussi le **dos calculé** (pages × 0,002252 blanc / × 0,0025 crème),
nécessaire pour construire la couverture.

## 6. Deux passes de reliure

La reliure dépend du nombre de pages, qui dépend de la reliure. Résolution : maquetter avec
la reliure estimée, compter, et re-maquetter si un seuil du tableau est franchi. Plafond à
3 itérations ; au-delà, on retient la reliure la plus large rencontrée. La convergence n'est
donc jamais supposée.

## 7. Typographie française

Appliqué avant la mise en lignes, sur le texte extrait :

- apostrophe droite `'` → `’` ;
- guillemets droits `"…"` → `« … »` avec espaces insécables fines à l'intérieur ;
- espace insécable fine avant `;` `!` `?` et autour des guillemets ; insécable avant `:` ;
- `...` → `…` ; `--` → `—`.

Ces substitutions ne s'appliquent qu'en locale française.

Attention : les espaces insécables fines (U+202F, U+00A0) ne doivent **pas** être envoyées
comme glyphes au PDF — Crimson Text ne les contient pas nécessairement et fontkit échouerait.
Le moteur PDF les traite comme des largeurs d'espacement, en interdisant simplement la coupure
à cet endroit. Dans l'EPUB, elles restent des caractères.

## 8. Césure

`hypher` + `hyphenation.fr` / `hyphenation.en-us` (≈ 10 Ko + 14/30 Ko de motifs),
synchrone, chargé à la demande.

Contraintes : minimum 2 lettres avant le tiret, 3 après ; **jamais de coupure dans les deux
lettres qui suivent une apostrophe d'élision** (interdit `s'é-tait`) ; maximum 2 lignes
césurées consécutives ; jamais sur le dernier mot d'un paragraphe.

## 9. Erreurs et rapport

Cas dominant : **le manuscrit n'a aucun style Titre 1**, donc aucun découpage en chapitres
possible. On propose alors une détection heuristique (ligne isolée, `Chapitre \d+`, ligne
entièrement en capitales) et on affiche la liste des chapitres détectés **avant** de
générer, pour que l'utilisateur puisse corriger.

Autres cas traités explicitement : `.doc` ancien ou `.odt` (message qui dit quoi faire),
archive corrompue, fichier > 50 Mo, document vide.

Les images intérieures étant hors périmètre v1, le rapport **avertit explicitement** quand
le `.docx` en contient : elles seront absentes des deux fichiers produits. Un silence ici
produirait un livre amputé sans que l'auteur le sache.

Rapport final : nombre de pages, format, reliure appliquée, dos calculé, avertissements.

## 10. Tests

Corpus `.docx` généré par script Python (`tools/make-fixtures.py`) : roman propre, roman
avec table des matières Word parasite, manuscrit sans Titre 1, manuscrit de 500 pages pour
franchir un seuil de reliure, texte accentué avec tirets cadratins et dialogues.

Vérifications automatisées sur le PDF produit :

1. taille de page 6 × 9 po exacte ;
2. toutes les polices incorporées **et** en sous-ensemble ;
3. aucun élément sous la marge minimale KDP de 0,25 po ;
4. reliure réellement miroir entre recto et verso ;
5. aucune ligne débordant la colonne de texte ;
6. ratio de justification maximal < 2,0 ;
7. reliure conforme au tableau pour la pagination obtenue.

L'EPUB est validé par EPUBCheck. Le moteur est du TypeScript pur (sans DOM sauf
`docx-reader`), donc testable sous Vitest.

## 11. Résultats du spike de faisabilité

Spike exécuté avant rédaction, dans le bac à sable. Les 7 critères ci-dessus passent.
Trois défauts ont été trouvés et corrigés dans l'approche, ce qui justifie l'étape :

1. **Un dictionnaire de police créé par appel `drawText`** — pdf-lib enregistre une
   ressource par appel, ce qui gonflait le PDF (44 Ko pour 3 pages). Correctif : écrire
   chaque ligne en un seul bloc d'opérateurs `BT/Tf/Td/Tj/ET` avec une ressource de police
   enregistrée une fois par page. Résultat : 28 Ko pour 5 pages.
2. **Aucun tag de sous-ensemble** sur `BaseFont` / `FontName`, exigé par la spec PDF pour
   les polices sous-ensemblées. Correctif : passe de renommage `ABCDEF+` après `save()`.
3. **Reliure non miroir** — le design initial fixait reliure et marge extérieure à la même
   valeur, rendant le miroir invisible. Correctif : marge extérieure 0,875", reliure issue
   du tableau.

Mesure de l'apport de la césure, sur un paragraphe français en 11 pt :

| | ratio max | ratio moyen | lignes lézardées |
|---|---|---|---|
| sans césure | 5,64 | 2,33 | 4 |
| avec césure | 1,57 | 1,38 | 0 |

La césure n'est donc pas un raffinement : sans elle, le texte justifié est inacceptable en
français.

## 12. Écarts constatés pendant la construction

Ce que l'implémentation a appris et que la spec ne prévoyait pas :

- **Césure : 3 lettres de part et d'autre**, pas 2/3. Le seuil 2/3 autorisait `l'hi-ver` et
  `va-t-en`. En 3/3, aucun mot de moins de six lettres ne se coupe, ce qui est la règle
  d'usage française.
- **Sauts de ligne manuels** (Maj+Entrée) : traités au départ comme des espaces, ce qui
  fusionnait deux répliques de dialogue sur une ligne. Ils terminent désormais la ligne sans
  la justifier.
- **Listes numérotées** : Word range la numérotation dans `numbering.xml`, que le lecteur ne
  parse pas. Les items ordonnés consécutifs sont numérotés par le moteur.
- **Le module `layout.ts` s'appelle `pagination.ts`** : sous `app/`, `layout` est un nom de
  fichier réservé et Next le typait comme layout de route.
- **Performance** : un manuscrit de 14 000 mots prenait 5,1 s. Mémoriser les largeurs et les
  chaînes encodées — les deux passent par le moteur de composition de fontkit, et la prose
  répète son vocabulaire — ramène à 1,3 s. Extrapolé, un roman de 90 000 mots tient sous
  10 s, sur un seul fil.
- **EPUBCheck a trouvé un défaut invisible aux tests unitaires** : les chapitres vivent dans
  `OEBPS/text/` mais liaient `style.css` sans `../`.
- La police est **Crimson Text** (4 styles statiques, 445 Ko) et non EB Garamond, dont la
  seule version distribuée est variable et pèse 851 Ko.

## 13. Distribution

Téléchargement immédiat, sans contrepartie. Après le téléchargement seulement, une carte
propose DraftToDone pour qui doit faire la même chose sur tout un catalogue. Pas de mur,
pas de capture d'e-mail obligatoire.
