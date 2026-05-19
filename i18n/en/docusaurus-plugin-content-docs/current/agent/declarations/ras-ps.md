---
sidebar_position: 7
title: RAS PS — Withholding on Services
---

# Withholding at Source on Services (RAS PS)

**CGI reference:** Book 1, Title 4, Chapter 4 — Art. 298  
**Required permission:** `DECLARATION_RAS_CREATE`  
**Rate:** 10% — IBP instalment (non-definitive)

---

## 1. Principle and objective (Art. 298)

RAS PS targets **local providers operating without a NIF**. Its objective is to tax the informal sector by making the **client** the tax collector.

:::info RAS PS = IBP instalment
RAS PS is NOT a final tax. It is an **IBP instalment** for the provider. If the provider registers and files their IBP return, they can **offset the RAS against their tax due** (Art. 298, 299).
:::

### Withholding comparison

| Withholding | Targeted provider | Rate | Nature |
|-------------|-------------------|------|--------|
| ITS | Employee (subordination link) | 8-bracket scale | Final tax |
| IRNR | Non-resident (foreign) | 25% | Definitive |
| **RAS PS** | **Local WITHOUT NIF** | **10%** | **IBP instalment** |
| RAS Rent | Local landlord | 8% | CFPB instalment |

---

## 2. Scope (Art. 298)

### Providers subject to withholding

Any Djiboutian natural or legal person providing services **without a valid NIF** to:
- Public administrations and public establishments
- VAT-liable businesses
- Companies subject to IBP under the regular regime

### Excluded providers

- Providers with a **valid NIF** → no RAS PS (but VAT verification)
- Banks, insurance, hotels, airlines (their activities are subject to other regimes)
- Sales of goods (RAS applies only to **services**)

---

## 3. Base, rate and chargeable event

```
RAS PS = Pre-tax gross amount of the service × 10%
```

- **Chargeable event:** payment date (or invoice date if earlier)
- **Remittance to the Treasury:** before the 15th of the following month

---

## 4. Enter a RAS PS return in SIGFID

1. Click **Returns → RAS PS → New return**
2. Select the **client** (entity making the withholding)
3. For each provider without NIF:
   - Identity of the provider
   - Nature of the service
   - Pre-tax gross amount
   - SIGFID calculates RAS = amount × 10%
4. SIGFID generates a **receipt** for each provider (IBP instalment proof)
5. Validate and remit to the Treasury

---

## 5. Scenarios

### Scenario 1 — Standard service without NIF
*Administration pays an informal plumber DJF 500,000 pre-tax*

| | Amount (DJF) |
|-|--------------|
| Pre-tax gross amount | 500,000 |
| RAS PS = 10% | **50,000** |
| Paid to the plumber | 450,000 |
| Remitted to the Treasury | 50,000 |

### Scenario 2 — Provider with valid NIF
*Business with NIF = no RAS PS*

→ No withholding. VAT on the invoice is collected normally.

### Scenario 3 — RAS offset against IBP
*Informal plumber registers, accrued RAS = DJF 400,000, IBP due = DJF 750,000*

| | Amount (DJF) |
|-|--------------|
| Gross IBP due | 750,000 |
| Offset RAS PS (receipts) | −400,000 |
| **IBP balance to pay** | **350,000** |

---

## 6. Penalties (Art. 249)

| Infringement | Penalty |
|--------------|---------|
| Failure to withhold | **100% of the non-withheld amount** |
