# ADR 0001 — Documentation publique sans authentification

| | |
|---|---|
| **Statut** | Accepté |
| **Date** | 2026-05-19 |
| **Décideurs** | Équipe documentation SIGFID — DGI |
| **Catégorie** | Sécurité, infrastructure, gouvernance de contenu |

---

## Contexte

La documentation publique de SIGFID (présent dépôt) couvre :

- Les procédures fiscales conformes au Code Général des Impôts (CGI) de la République de Djibouti
- Les guides d'usage pour trois profils : administrateur fonctionnel, agent des impôts, contribuable
- Le détail des impôts gérés (ITS, TVA, IBP/IMF, Patentes, Licences, IRNR, RAS PS, IIS, etc.)
- Les références légales et les scénarios chiffrés

Au moment de la mise en ligne, la question s'est posée : **faut-il restreindre l'accès à cette documentation par authentification** (compte utilisateur, SSO, accès par lien signé) ?

### Forces en présence

- **Convention internationale** : les administrations fiscales publient toujours leur documentation procédurale en accès libre (DGFIP en France, IRS aux États-Unis, HMRC au Royaume-Uni, FTA aux Émirats, etc.). Restreindre l'accès irait à contre-courant de la pratique mondiale.
- **Public visé** : les contribuables sont une des trois audiences explicites — leur imposer une authentification pour comprendre leurs obligations fiscales serait paradoxal et contre-productif.
- **Nature du contenu** : la documentation référence des textes de loi publics (CGI, LFI). Elle ne contient aucune donnée nominative, aucun montant réel, aucun secret opérationnel.
- **Hébergement actuel** : GitHub Pages, qui ne supporte pas l'authentification native. Ajouter de l'authentification implique de quitter cette plateforme.
- **Transparence administrative** : un État de droit publie les règles qu'il applique. Restreindre l'accès à la documentation fiscale fragiliserait juridiquement la DGI (le contribuable est présumé connaître la loi — encore faut-il qu'elle soit accessible).
- **SEO et conformité spontanée** : un contribuable qui cherche « déclaration TVA Djibouti » sur un moteur de recherche doit pouvoir trouver la documentation officielle de la DGI plutôt qu'une source tierce non vérifiée.

---

## Décision

**La documentation SIGFID reste en accès public, sans authentification, hébergée sur GitHub Pages.**

Aucun mur d'authentification, aucune restriction par IP, aucun lien signé. Le site est indexable par les moteurs de recherche (`robots: index, follow`).

---

## Alternatives considérées

### Alternative A — Authentification globale via Cloudflare Access

Migrer le site de GitHub Pages vers Cloudflare Pages et activer Cloudflare Access (gratuit jusqu'à 50 utilisateurs).

**Rejetée car** :
- Bloque l'accès aux contribuables, qui sont un public cible
- Limite l'indexation par les moteurs de recherche
- Ajoute une dépendance à Cloudflare (vendor lock-in)
- Coût au-delà de 50 utilisateurs
- Aucune information protégée ne justifie ce coût

### Alternative B — Authentification partielle par section (admin et agent privés, contribuable public)

Cloisonner les sections « Admin fonctionnel » et « Agent des impôts » derrière une authentification, en gardant la section « Contribuable » publique.

**Rejetée car** :
- Les guides admin et agent décrivent des procédures conformes au CGI public, sans secret opérationnel
- Complexité de mise en œuvre disproportionnée par rapport à l'absence de gain
- Risque que l'agent des impôts ne puisse pas consulter sa documentation hors VPN ou hors poste de travail
- Confusion possible pour les contribuables qui voient des sections grisées

### Alternative C — Authentification anonyme par captcha (anti-scraping)

Pas d'authentification réelle, mais un captcha au premier chargement pour éviter les scrapers agressifs.

**Rejetée car** :
- Aucun risque réel de scraping abusif identifié
- Friction inutile pour des utilisateurs légitimes (notamment sur mobile)
- N'arrête pas les scrapers déterminés

### Alternative D — Lien signé temporaire (URL avec token)

Distribuer des liens d'accès expirant, par exemple via la messagerie SIGFID.

**Rejetée car** :
- Empêche les recherches publiques
- Empêche les références externes durables (citations légales, formations)
- Coûte une infrastructure de génération de tokens
- Pas adapté à un référentiel documentaire

---

## Conséquences

### Positives

- **Coût de fonctionnement nul** : GitHub Pages reste gratuit, aucune infrastructure d'authentification à maintenir
- **Accessibilité maximale** : le contribuable peut consulter ses obligations sans démarche préalable
- **Conformité à la pratique internationale** des administrations fiscales
- **SEO actif** : la documentation officielle est trouvable, ce qui réduit la circulation d'informations fiscales erronées issues de sources tierces
- **Confiance accrue** des contribuables envers l'administration (transparence)
- **Audit externe facilité** : des juristes ou chercheurs peuvent vérifier la conformité de la documentation au CGI sans procédure d'accès

### Négatives

- **Aucun contrôle d'usage** : impossible de savoir qui consulte quoi (pas d'analytics nominatives — corrigeable avec un outil respectueux de la vie privée type Plausible si le besoin émerge)
- **Indexation par défaut** : tout commit est immédiatement public ; un secret commité par erreur reste dans l'historique Git
- **Pas de différenciation de contenu par profil** : un contribuable peut lire la documentation agent, et vice-versa

### Mitigations

- Politique « jamais de données réelles dans la documentation » : aucun NIF, nom, montant ou donnée nominative — voir `SECURITY.md`
- Revue obligatoire des pull requests pour bloquer toute fuite involontaire
- `secret scanning` activé sur le dépôt GitHub
- Si une donnée sensible est commise par erreur, traiter comme une fuite : rotation de la donnée à la source, purge de l'historique Git (BFG / `git filter-repo`), notification

---

## Conditions de réévaluation

Cette décision **doit être rouverte** si l'une des conditions suivantes se présente :

1. **Ajout de contenu strictement interne** : algorithmes exacts de détection de fraude, données opérationnelles, formations confidentielles aux agents, procédures de contrôle non publiables. Dans ce cas, la solution recommandée n'est **pas** d'authentifier le site actuel, mais de créer un dépôt séparé `sigfid-docs-internal` derrière une authentification dédiée (voir scénario ci-dessous).

2. **Évolution réglementaire** : si une loi de finances ou un décret impose à la DGI de restreindre la diffusion de certaines procédures fiscales.

3. **Incident de sécurité** : si une exploitation malveillante de la documentation publique est démontrée (vecteur de fraude basé sur une procédure publiée).

4. **Demande de la hiérarchie DGI / Ministère du Budget** : pour des raisons institutionnelles non anticipées dans cette analyse.

---

## Scénario d'évolution recommandé (si réévaluation positive)

Si un jour du contenu sensible doit être ajouté, **ne pas authentifier le site actuel** mais procéder ainsi :

| Dépôt | Contenu | Accès |
|-------|---------|-------|
| `sigfid-docs` (présent dépôt) | Procédures publiques, CGI, guides contribuable et agent généralistes | **Public** — inchangé |
| `sigfid-docs-internal` (nouveau dépôt privé) | Règles de contrôle, données opérationnelles, formations confidentielles | **Privé GitHub** + Cloudflare Access ou SSO interne DGI |

Cette séparation permet de :

- Préserver l'accès public au contenu général (et la conformité aux pratiques internationales)
- Protéger uniquement ce qui doit l'être
- Conserver des historiques Git séparés (évite le risque qu'un secret apparaisse dans les diffs publics)
- Autoriser des règles de contribution distinctes (revue plus stricte sur le dépôt interne)

---

## Références

- [`SECURITY.md`](../SECURITY.md) — politique de sécurité et de divulgation responsable
- [`LICENSE`](../LICENSE) — conditions d'utilisation de la documentation publique
- Convention Michael Nygard pour les ADR : https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions
