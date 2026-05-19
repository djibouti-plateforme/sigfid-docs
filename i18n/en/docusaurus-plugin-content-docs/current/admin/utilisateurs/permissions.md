---
sidebar_position: 3
title: Officer permissions
---

# Manage officer permissions

Each feature of sigfid-agent is protected by an **access right**. An officer can only execute an action if you have granted them the corresponding permission.

## Grant permissions

1. Open the officer's profile
2. Scroll down to the **Permissions** section
3. Enable or disable each permission with the toggle switch

Changes are saved automatically.

## List of available permissions

| Code | Label | Description |
|------|-------|-------------|
| `CONTRIBUABLE_VIEW` | Read taxpayers | View taxpayer profiles |
| `CONTRIBUABLE_PROTECT` | Protect a taxpayer | Flag a taxpayer as protected |
| `CONTRIBUABLE_TRANSFER` | Transfer a taxpayer | Change the assignment of a taxpayer |
| `DECLARATION_ITS_CREATE` | File an ITS return | Enter an ITS return |
| `DECLARATION_TVA_CREATE` | File a VAT return | Enter a VAT return |
| `DECLARATION_IBP_CREATE` | File an IBP return | Enter an IBP return |
| `ENREGISTREMENT_CREATE` | Carry out a registration | Create a registration request |
| `ENREGISTREMENT_VALIDATE` | Validate a registration | Validate a registration request |
| `REPONDRE_MESSAGERIE` | Reply via messaging | Reply to taxpayer messages |

## Best practice

Grant only the permissions necessary for the officer's role. An officer of the ITS service does not need registration permissions.
