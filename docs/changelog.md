---
title: Journal des évolutions
description: Historique des mises à jour de la documentation SIGFID.
sidebar_position: 99
---

# Journal des évolutions

Cette page recense les évolutions majeures de la documentation SIGFID. Les modifications mineures (corrections orthographiques, mise en forme) ne sont pas listées ici — consultez l'[historique Git](https://github.com/boubacarDiatta/sigfid-docs/commits/main) pour le détail complet.

:::info Référence légale
Une modification de cette documentation ne reflète une évolution du droit fiscal **que si elle cite explicitement un article du CGI ou une LFI**. Les autres modifications sont éditoriales (clarification, restructuration, exemples).
:::

---

## 2026

### 🎨 Refonte design & sécurité — *en cours*

- Charte graphique institutionnelle (palette inspirée du drapeau djiboutien)
- Logo SIGFID, favicon et carte sociale OpenGraph dédiés
- Homepage repensée avec parcours par profil et chiffres clés
- Diagrammes Mermaid en remplacement des workflows ASCII
- Pages transverses : glossaire, FAQ, journal des évolutions
- Sécurité dépôt : `LICENSE`, `SECURITY.md`, Dependabot, CodeQL, vérification automatique des liens, markdown lint
- Durcissement du workflow de déploiement (timeouts, permissions minimales, cache npm)

---

## 2025

### 📚 Publication initiale de la documentation SIGFID

- Documentation complète des modules fiscaux : ITS, TVA, IBP/IMF, Patentes, Licences, IRNR, RAS PS, autres impôts (IIS, IPVI, IPVM, IRVM, TBA)
- Guides distincts pour les trois profils utilisateurs : administrateur fonctionnel, agent des impôts, contribuable
- Scénarios chiffrés sur chaque impôt
- Référencement systématique des articles du CGI et des LFI applicables
- Mise en place du pipeline de déploiement GitHub Pages
- Adoption de Docusaurus 3.10 comme moteur documentaire
