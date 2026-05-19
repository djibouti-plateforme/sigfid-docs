---
slug: /
title: Documentation officielle SIGFID
description: Documentation officielle du Système Intégré de Gestion Fiscale de Djibouti — guides pour administrateurs, agents des impôts et contribuables.
hide_table_of_contents: true
---

import Link from '@docusaurus/Link';

<div className="sigfid-hero">
  <div className="container">
    <span className="sigfid-hero-badge">Direction Générale des Impôts · République de Djibouti</span>
    <h1>Système Intégré de Gestion Fiscale de Djibouti</h1>
    <p className="sigfid-hero-tagline">
      La documentation officielle de SIGFID — la plateforme numérique de la DGI pour la gestion des déclarations, liquidations, recouvrements et échanges avec les contribuables, conforme au Code Général des Impôts.
    </p>
  </div>
</div>

<div className="container" style={{paddingTop: '3rem'}}>

## Chiffres clés

<div className="sigfid-stats">
  <div className="sigfid-stat">
    <div className="sigfid-stat-value">12+</div>
    <div className="sigfid-stat-label">Impôts couverts</div>
  </div>
  <div className="sigfid-stat">
    <div className="sigfid-stat-value">3</div>
    <div className="sigfid-stat-label">Profils utilisateurs</div>
  </div>
  <div className="sigfid-stat">
    <div className="sigfid-stat-value">CGI 2025</div>
    <div className="sigfid-stat-label">Code en vigueur</div>
  </div>
  <div className="sigfid-stat">
    <div className="sigfid-stat-value">100 %</div>
    <div className="sigfid-stat-label">Paramètres en BDD</div>
  </div>
</div>

## Choisissez votre profil

<div className="sigfid-personas">

<Link className="sigfid-persona" data-persona="admin" to="/admin/intro">
  <span className="sigfid-persona-icon">🔧</span>
  <h3 className="sigfid-persona-title">Admin fonctionnel</h3>
  <p className="sigfid-persona-desc">
    Configurez le système : utilisateurs, permissions, centres fiscaux, taux et barèmes du CGI.
  </p>
  <span className="sigfid-persona-cta">Accéder au guide →</span>
</Link>

<Link className="sigfid-persona" data-persona="agent" to="/agent/intro">
  <span className="sigfid-persona-icon">👤</span>
  <h3 className="sigfid-persona-title">Agent des impôts</h3>
  <p className="sigfid-persona-desc">
    Traitez les déclarations, liquidations, enregistrements et la messagerie avec les contribuables.
  </p>
  <span className="sigfid-persona-cta">Accéder au guide →</span>
</Link>

<Link className="sigfid-persona" data-persona="contribuable" to="/contribuable/intro">
  <span className="sigfid-persona-icon">🏢</span>
  <h3 className="sigfid-persona-title">Contribuable</h3>
  <p className="sigfid-persona-desc">
    Consultez votre compte fiscal, suivez vos déclarations, échangez avec votre centre fiscal.
  </p>
  <span className="sigfid-persona-cta">Accéder au guide →</span>
</Link>

</div>

## Principes fondateurs

| Principe | Application dans SIGFID |
|----------|------------------------|
| **Légalité** | Chaque calcul cite l'article du CGI applicable et conserve un snapshot des paramètres utilisés. |
| **Aucun taux codé en dur** | Tous les taux, barèmes et seuils sont stockés en base de données et modifiables par l'administrateur fonctionnel. |
| **Auditabilité** | Toute déclaration, paiement et action agent est horodaté, attribué et conservé (audit trail). |
| **Permissions granulaires** | Chaque fonctionnalité requiert une permission explicite accordée par l'administrateur. |
| **Confidentialité** | Conforme au Protocole de Confidentialité et Protection des Données SIGFID 2026. |

## Ressources

- [Glossaire fiscal](/glossaire) — acronymes et termes employés dans la documentation
- [Foire aux questions](/faq) — questions fréquentes par profil
- [Journal des évolutions](/changelog) — historique des mises à jour documentaires
- [Index des impôts](/agent/declarations/intro) — tableau récapitulatif de tous les impôts couverts

</div>
