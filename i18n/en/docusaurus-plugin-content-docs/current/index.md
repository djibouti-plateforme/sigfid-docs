---
slug: /
title: Official SIGFID Documentation
description: Official documentation of the Integrated Tax Management System of Djibouti — guides for administrators, tax officers and taxpayers.
hide_table_of_contents: true
---

import Link from '@docusaurus/Link';

<div className="sigfid-hero">
  <div className="container">
    <span className="sigfid-hero-badge">General Directorate of Taxes · Republic of Djibouti</span>
    <h1>Integrated Tax Management System of Djibouti</h1>
    <p className="sigfid-hero-tagline">
      The official documentation of SIGFID — the digital platform of the DGI for managing tax returns, assessments, collection and exchanges with taxpayers, in compliance with the General Tax Code.
    </p>
  </div>
</div>

<div className="container" style={{paddingTop: '3rem'}}>

## Key figures

<div className="sigfid-stats">
  <div className="sigfid-stat">
    <div className="sigfid-stat-value">12+</div>
    <div className="sigfid-stat-label">Taxes covered</div>
  </div>
  <div className="sigfid-stat">
    <div className="sigfid-stat-value">3</div>
    <div className="sigfid-stat-label">User profiles</div>
  </div>
  <div className="sigfid-stat">
    <div className="sigfid-stat-value">CGI 2025</div>
    <div className="sigfid-stat-label">Code in force</div>
  </div>
  <div className="sigfid-stat">
    <div className="sigfid-stat-value">100 %</div>
    <div className="sigfid-stat-label">Parameters in DB</div>
  </div>
</div>

## Choose your profile

<div className="sigfid-personas">

<Link className="sigfid-persona" data-persona="admin" to="/admin/intro">
  <span className="sigfid-persona-icon">🔧</span>
  <h3 className="sigfid-persona-title">Functional Admin</h3>
  <p className="sigfid-persona-desc">
    Configure the system: users, permissions, tax centres, CGI rates and brackets.
  </p>
  <span className="sigfid-persona-cta">Access the guide →</span>
</Link>

<Link className="sigfid-persona" data-persona="agent" to="/agent/intro">
  <span className="sigfid-persona-icon">👤</span>
  <h3 className="sigfid-persona-title">Tax Officer</h3>
  <p className="sigfid-persona-desc">
    Process tax returns, assessments, registrations and messaging with taxpayers.
  </p>
  <span className="sigfid-persona-cta">Access the guide →</span>
</Link>

<Link className="sigfid-persona" data-persona="contribuable" to="/contribuable/intro">
  <span className="sigfid-persona-icon">🏢</span>
  <h3 className="sigfid-persona-title">Taxpayer</h3>
  <p className="sigfid-persona-desc">
    Check your tax account, monitor your returns, exchange with your tax centre.
  </p>
  <span className="sigfid-persona-cta">Access the guide →</span>
</Link>

</div>

## Founding principles

| Principle | Application in SIGFID |
|-----------|----------------------|
| **Legality** | Every calculation cites the applicable CGI article and stores a snapshot of the parameters used. |
| **No hard-coded rates** | All rates, brackets and thresholds are stored in the database and modifiable by the functional administrator. |
| **Auditability** | Every return, payment and agent action is timestamped, attributed and preserved (audit trail). |
| **Granular permissions** | Each feature requires an explicit permission granted by the administrator. |
| **Confidentiality** | Compliant with the SIGFID 2026 Confidentiality and Data Protection Protocol. |

## Resources

- [Tax Glossary](/glossaire) — acronyms and terms used in the documentation
- [Frequently Asked Questions](/faq) — common questions by profile
- [Changelog](/changelog) — history of documentation updates
- [Tax Index](/agent/declarations/intro) — summary table of all covered taxes

</div>
