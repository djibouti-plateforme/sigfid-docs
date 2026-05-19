---
title: Frequently Asked Questions
description: Answers to common questions from administrators, tax officers and taxpayers using SIGFID.
sidebar_position: 91
---

# Frequently Asked Questions

## General questions

### What is SIGFID?

SIGFID is the **Integrated Tax Management System of Djibouti**, the digital platform of the General Directorate of Taxes (DGI) for managing the entire tax cycle: registration, returns, assessments, collection, litigation, and messaging with taxpayers.

### Is this documentation official?

Yes. It is published by the General Directorate of Taxes. In case of divergence between this documentation and the General Tax Code or the prevailing Finance Act, **only the official texts prevail**.

### Which CGI version does the documentation refer to?

The current version of the documentation is aligned with the **General Tax Code 2025** and accounts for amendments introduced by the prevailing Initial Finance Act (LFI). Article references are systematically indicated on each page.

---

## Functional administrator

### What is the difference between functional administrator and tax officer?

The **functional administrator** configures the system: they create agent accounts, grant permissions, set up tax centres, and enter tax rates. They perform **no tax operations** on taxpayers.

The **tax officer** uses the configured system to process cases: returns, assessments, payments, messaging.

### Why are rates not hard-coded in SIGFID?

So that an amendment to the Finance Act (rate change, bracket change, threshold change) requires **no software intervention**. Only the functional administrator updates the value in the database via sigfid-console.

### How can we trace who modified a tax parameter?

Every parameter change is timestamped and attributed to the executing administrator. Past calculations preserve a **snapshot** of the parameters used at the time of the calculation — a rate change therefore never retroactively affects assessments already settled.

---

## Tax officer

### I get "Access denied" on a feature. What should I do?

You lack the required permission. Contact your functional administrator to have it granted. See the [list of available permissions](/admin/utilisateurs/permissions).

### Is a nil return really mandatory?

Yes. Every active taxable person must file a return **even in the absence of transactions** for the period. SIGFID automatically detects non-filers and applies the penalties provided for in Art. 246-250 of the CGI.

### How do I know if a taxpayer must be liable for VAT?

SIGFID automatically checks the annual liability threshold (Art. 174 CGI — DJF 10 or 20 million depending on the activity) and triggers or removes VAT liability each year. In case of business start-up during the year, turnover is adjusted pro rata.

### What happens if I validate a return by mistake?

The return is committed to the audit trail and cannot be deleted. You must file a **corrective return**. Every action is traced (who, when, what).

---

## Taxpayer

### How do I access my taxpayer space?

Your access is created by your tax centre upon your registration. You receive an invitation email containing a link to set your password.

### Who can view my tax data?

Only **authorised officers of your tax centre** holding the necessary permissions. All accesses are traced. Your data is protected in accordance with the **SIGFID 2026 Confidentiality and Data Protection Protocol**.

### How do I exchange with my tax centre?

Use the **secure messaging** built into your space. Exchanges are preserved and constitute an official record of communications.

---

## Technical & security

### Does this documentation collect any data?

**No.** The site is static, contains no third-party tracking scripts, and uses no cookies. No personal data is collected when browsing.

### How do I report a vulnerability on the documentation site?

Refer to our [security policy](https://github.com/boubacarDiatta/sigfid-monorepo/blob/main/SECURITY.md) and report the issue through a private channel. **Do not open a public issue.**

### Is the source code of the SIGFID system public?

The application code (sigfid-console, sigfid-agent, taxpayer space) **is not public**. Only the documentation is, for transparency and training purposes.
