# Politique de sécurité — Documentation SIGFID

## Périmètre

Cette politique couvre **uniquement le site de documentation publique SIGFID**
(`sigfid-docs`). Elle ne concerne pas l'application SIGFID elle-même
(sigfid-console, sigfid-agent, espace contribuable), dont les vulnérabilités
doivent être signalées via les canaux internes de la Direction Générale des
Impôts (DGI).

## Signaler une vulnérabilité

Si vous découvrez une faille de sécurité sur la documentation publique :

1. **Ne créez pas d'issue publique sur GitHub.**
2. Envoyez un rapport détaillé à l'équipe de la DGI en charge du projet
   (canal interne).
3. Indiquez :
   - Le type de faille (XSS, injection, contournement de configuration, etc.)
   - L'URL ou la page concernée
   - Les étapes de reproduction
   - L'impact potentiel
   - Toute preuve de concept (capture, payload neutralisé)

## Engagement

- Accusé de réception sous **5 jours ouvrés**.
- Évaluation et plan de remédiation sous **15 jours ouvrés**.
- Crédit du chercheur dans le changelog si souhaité (et si la divulgation
  responsable a été respectée).

## Hors périmètre

Les éléments suivants ne sont **pas** considérés comme des vulnérabilités :

- Absence d'en-têtes HTTP de sécurité non supportés par GitHub Pages.
- Bannières de version sur des dépendances tierces sans exploitation prouvée.
- Captures d'écran ou rapports d'outils automatisés (Nessus, OWASP ZAP) sans
  preuve d'exploitation contextualisée.
- Faille théorique sur le contenu fiscal (le texte du CGI fait foi, pas la
  documentation).

## Pourquoi le site est public

Le choix d'un site **sans authentification** est documenté et justifié dans l'[ADR 0001 — Documentation publique sans authentification](adr/0001-documentation-publique-sans-authentification.md). Ce document précise également les conditions sous lesquelles cette décision devra être réévaluée (ajout de contenu strictement interne, évolution réglementaire, incident de sécurité).

## Bonnes pratiques pour les contributeurs

- Ne committez jamais de données réelles de contribuables (NIF, noms, montants).
- Utilisez exclusivement des données fictives dans les exemples et scénarios.
- Vérifiez les dépendances via `npm audit` avant toute PR.
- Tout commit doit être **signé** (GPG / Sigstore) si vous êtes mainteneur DGI.

## Dépendances

Le projet utilise [Dependabot](.github/dependabot.yml) pour le suivi automatique
des vulnérabilités sur :
- `npm` (dépendances Docusaurus)
- `github-actions` (workflows CI/CD)

Toute alerte critique doit être traitée sous **72 heures**.
