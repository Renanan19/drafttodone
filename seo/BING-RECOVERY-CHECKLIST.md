# Bing: 26 jours à zéro — checklist de diagnostic

> À exécuter dans l'interface Bing Webmaster Tools. Rien ici ne peut être fait
> depuis le code ou en ligne de commande : les vérifications scriptées de
> `site:drafttodone.io` renvoient des pages anti-bot (une requête de contrôle
> sur `kindlepreneur.com` a renvoyé le même déchet), donc elles ne prouvent rien.

## Ce que disent les données

Exports du 19 août 2026, fenêtre 8 juin → 17 août.

| Rapport | Dernière valeur non nulle | Puis |
|---|---|---|
| `SearchPerformanceOverview` | **22 juillet** | 0 impression jusqu'au 17 août |
| `AIPerformanceOverviewStats` | **23 juillet** (citations) | 0 citation jusqu'au 17 août |

Ce n'est pas un artefact de latence : les lignes existent et valent zéro
explicitement, jusqu'à la fin du rapport.

**Ce qui a été perdu :** Bing était le meilleur canal du site. 147 mots-clés,
position moyenne pondérée **5,38**, **100 %** des impressions dans le top 10
(Google : 42,4). Sa couche IA a produit **254 citations** en six semaines, contre
**9 impressions** sur les surfaces génératives de Google en trois mois.

**Le suspect évident est écarté.** Le rebuild AEO est le commit `3eeec8c` du
**24 juillet**. La chute commence le **22-23 juillet**, soit un à deux jours
*avant* le déploiement. Le rebuild n'explique pas le trou.

## Les 4 vérifications, dans cet ordre

### 1. La vérification du site est-elle toujours valide ?

C'est l'explication la moins chère et la plus probable : une vérification DNS ou
meta perdue coupe le *reporting* alors que le site continue de se classer
normalement. Si c'est ça, rien n'est cassé côté SEO.

- Settings → Site verification. Statut vert ?
- Si l'enregistrement DNS a été touché côté Cloudflare fin juillet, c'est la piste.

### 2. URL Inspection sur deux URLs

- `https://drafttodone.io/`
- `https://drafttodone.io/fr/blog/mise-en-page-livre-broche-kdp`

Noter pour chacune : **Indexed / Discovered not indexed / Not found**, la date du
dernier crawl, et tout message de couverture.

- Indexées et crawlées récemment → le problème est le reporting (cf. point 1).
- Non indexées → le site a réellement perdu l'index, passer au point 3.

### 3. Actions manuelles, spam, erreurs de crawl

- Site Scan / Security & Manual actions : une action manuelle datée du
  22-23 juillet ?
- Crawl information : pic d'erreurs, blocage robots.txt, timeouts sur cette
  fenêtre ?
- Le site est un export statique sur GitHub Pages en quatre langues avec ~175
  URLs générées depuis des fichiers de données. Si un classifieur l'a rangé en
  contenu à grande échelle, ça se verra ici.

### 4. IndexNow

Le dernier envoi automatique a renvoyé **403** et n'avait jamais été instrumenté.

- La clé est servie correctement : `https://drafttodone.io/a4b7e2c9d1f03a6b8c5d9e7f102345ab.txt`
  répond HTTP 200, contenu exact, sans newline finale. Vérifié le 21 août 2026.
- `ops/submit-indexnow.mjs` réessaie désormais 3 fois avec backoff et **logge le
  corps de la réponse**. Le prochain déploiement dira si le 403 est un throttle
  (il passera) ou un rejet de clé (il échouera trois fois à l'identique).
- Dans Bing WMT : IndexNow → l'historique des soumissions montre-t-il les envois ?

## Après le diagnostic

- **Reporting cassé** → re-vérifier le site, ne rien changer d'autre.
- **Index perdu** → resoumettre `sitemap.xml`, forcer une inspection sur les
  10 URLs du tableau striking-distance, et attendre. Ne pas republier en masse
  ni réécrire de contenu tant que la cause n'est pas connue.

Reporter la réponse ici avec la date, pour que la prochaine session ne
redémarre pas le diagnostic à zéro.
