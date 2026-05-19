---
sidebar_position: 2
title: Taxpayer profile
---

# Taxpayer profile

**Required permission:** `CONTRIBUABLE_VIEW`

The taxpayer profile centralises all the tax information for a taxpayer.

## General information

| Field | Description |
|-------|-------------|
| **NIF** | Tax Identification Number (unique) |
| **Business name / Name** | Company name or individual's name |
| **Legal form** | LLC, JSC, Individual, etc. |
| **ISIC code** | International activity classification |
| **Patente class** | Determined automatically by SIGFID from the ISIC code |
| **IBP regime** | Simplified / Regular / Micro-business |
| **VAT liable** | Yes / No + liability date |
| **Tax centre** | Assigned tax centre |
| **Status** | Active / Suspended / Protected |

## Profile tabs

### Tax account tab
See the [detailed tax account](./compte-impots).

### Returns tab
History of all returns submitted, by tax type and by period.

| Status | Meaning |
|--------|---------|
| **Submitted** | Entered by the officer, pending |
| **Validated** | Processed and confirmed |
| **Rejected** | Errors detected, correction required |
| **Nil** | Zero return filed |

### Documents tab
Documents attached to the taxpayer: leases, deeds, tax returns, supporting documents.

### Messaging tab
Conversations with the taxpayer via sigfid-client.

### History tab
Audit log of all actions performed on the file.

## Actions available on the profile

| Action | Required permission |
|--------|--------------------|
| View the profile | `CONTRIBUABLE_VIEW` |
| Edit information | `CONTRIBUABLE_EDIT` |
| Protect the file | `CONTRIBUABLE_PROTECT` |
| Transfer to another centre | `CONTRIBUABLE_TRANSFER` |
| Create a return | Tax-specific permission |

## Protected taxpayer

A file marked as "protected" is only accessible to officers holding the `CONTRIBUABLE_PROTECT` permission. Any access attempt by an unauthorised officer is recorded in the audit trail.
