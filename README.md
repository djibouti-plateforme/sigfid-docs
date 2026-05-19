# Documentation SIGFID

Documentation officielle du **Système Intégré de Gestion Fiscale de Djibouti** (SIGFID), la plateforme numérique de la Direction Générale des Impôts de la République de Djibouti.

Site généré avec [Docusaurus](https://docusaurus.io/) 3.10 et déployé sur GitHub Pages.

## Prérequis

- Node.js >= 20
- npm >= 10

## Développement local

```bash
npm install
npm start
```

Le serveur de développement démarre sur `http://localhost:3000` avec rechargement automatique.

## Build de production

```bash
npm run build
npm run serve     # prévisualisation locale du build
```

Le build est généré dans le répertoire `build/`.

## Vérification du code

```bash
npm run typecheck                                  # TypeScript
npx markdownlint "docs/**/*.md" "*.md"             # Lint markdown
npx lychee './**/*.md'                             # Vérification des liens
```

## Structure du projet

```
sigfid-docs/
├── docs/                       # Contenu de la documentation (Markdown)
│   ├── admin/                  # Guide administrateur fonctionnel
│   ├── agent/                  # Guide agent des impôts
│   ├── contribuable/           # Guide contribuable
│   ├── glossaire.md            # Glossaire fiscal
│   ├── faq.md                  # Foire aux questions
│   └── changelog.md            # Journal des évolutions
├── src/css/custom.css          # Charte graphique DGI / Djibouti
├── static/img/                 # Logo, favicon, carte sociale
├── .github/                    # Workflows CI/CD + Dependabot
├── docusaurus.config.ts        # Configuration Docusaurus
├── sidebars.ts                 # Structure de la navigation
├── LICENSE                     # Licence — Tous droits réservés DGI
└── SECURITY.md                 # Politique de divulgation responsable
```

## Déploiement

Tout push sur `main` déclenche automatiquement le build et le déploiement sur GitHub Pages via le workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

## Contribution

Ce dépôt est maintenu par la Direction Générale des Impôts. Les contributions externes doivent passer par une pull request avec **revue obligatoire** d'un mainteneur DGI.

Avant toute PR :

1. Vérifier que les références CGI / LFI citées sont exactes
2. N'utiliser **aucune donnée réelle de contribuable** (NIF, noms, montants) — uniquement des données fictives dans les exemples
3. **Toute page FR ajoutée doit avoir sa traduction EN** dans `i18n/en/docusaurus-plugin-content-docs/current/` au même chemin relatif. Le workflow CI [`translation-parity.yml`](.github/workflows/translation-parity.yml) bloque le merge sinon.
4. Faire passer `npm run build` localement sans erreur ni avertissement
5. Signer les commits (GPG / Sigstore) si vous êtes mainteneur DGI

## Sécurité

Pour signaler une vulnérabilité, consulter [`SECURITY.md`](SECURITY.md). **Ne pas créer d'issue publique.**

## Décisions d'architecture

Les choix structurants (sécurité, infrastructure, gouvernance) sont tracés dans [`adr/`](adr/) au format Architecture Decision Record (ADR). Consulter [`adr/README.md`](adr/README.md) pour l'index et la procédure de création d'un nouvel ADR.

## Licence

© République de Djibouti — Direction Générale des Impôts. Voir [`LICENSE`](LICENSE).
