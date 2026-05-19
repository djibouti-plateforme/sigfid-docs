---
sidebar_position: 2
title: VAT — Value Added Tax
---

# Value Added Tax (VAT)

**CGI reference:** Book 1, Title 3, Chapter 1 — Art. 171 to 211 + Art. 260 to 265  
**Required permission:** `DECLARATION_TVA_CREATE`  
**Nature:** Monthly return-based tax — payment due by the **20th of the following month** (Art. 207)

---

## 1. Scope (Art. 171-172)

### 1.1 Taxable transactions

- Imports (customs clearance)
- Supplies of goods (sales, exchanges, contributions)
- Supplies of services
- Real estate works
- Self-supplies
- Commercial-type subsidies
- Petroleum products (excluding retail resale by service stations)

### 1.2 Liability thresholds (Art. 174, LFI 2022)

| Type of activity | Annual pre-tax turnover threshold |
|------------------|----------------------------------|
| Supplies of goods, on-premises services, construction | **20,000,000 DJF** |
| Other activities (services, liberal professions, hospitality without on-site sales) | **10,000,000 DJF** |

:::info Prorated threshold
In case of business start-up during the year, turnover is adjusted pro rata. SIGFID checks the threshold annually and automatically triggers or removes VAT liability (Art. 175).
:::

---

## 2. Exemptions (Art. 176) — 17 main categories

| No. | Exempt operation |
|-----|-----------------|
| 1° | Direct sales by farmers/breeders/fishermen (unprocessed produce) |
| 2° | Banking operations (excluding fees, LFI 2025), insurance, real estate transfer |
| 3° | Newspapers and periodicals (excluding advertising) |
| 4–6° | Approved education, approved health, associations |
| 7–8° | Administrative/educational/social services of the State |
| 9–10° | Schoolbooks, books |
| 11–13° | Drinking water (first 30 m³), social-tier electricity, kerosene, fuel stations |
| 14–15° | Imports (international agreements), public contracts financed externally |
| 16° | International transport — air, sea, land |
| 17° | Imports by social housing developers (LFI 2017) |

:::danger Exemption ≠ Zero rate
- **Exempt transactions (Art. 176)** → NO right to deduct input VAT
- **Zero-rated transactions (exports, Art. 187-2)** → RETAIN the right to deduct

SIGFID distinguishes these two regimes. A misclassification can generate fictitious deductions.
:::

---

## 3. Applicable rates (Art. 187)

| Rate | Value | Application |
|------|-------|-------------|
| **Standard rate** | **10%** | All taxable transactions |
| **Zero rate** | **0%** | Exports, international trade, externally-financed public contracts |

---

## 4. Tax base (Art. 184-186)

- **Imports:** customs value + duties and taxes (excluding VAT)
- **Supplies:** sale price to the customer
- **Real estate works:** amount of bills/invoices
- **Services:** price of services
- **Travel agencies:** taxation on the **margin**

*Included in the base:* taxes (except VAT), incidental fees, price subsidies  
*Excluded:* discounts, rebates, deposits

---

## 5. Deduction regime (Art. 188-204)

### 5.1 General principle

VAT charged on purchases is deductible from collected VAT **in the same month**. Conditions:
- Goods/services necessary for the business
- VAT shown on valid invoices or customs documents
- **Supplier's NIF mandatory** on every invoice (Art. 208-210)

### 5.2 Exclusions from the right to deduct (Art. 190-191)

- Lodging, accommodation, catering, reception, entertainment expenses (Art. 190-a)
- Goods supplied free of charge or at an abnormal price (Art. 190-c)
- Petroleum products (except importers or electricity production EDD) (Art. 190-e)
- Vehicles for the transport of persons, except fleets ≥ 8 seats or rental businesses (Art. 191)

### 5.3 Deduction prorata — Mixed activity (Art. 192)

For businesses simultaneously carrying out taxable and exempt activities:

```
Prorata = Taxable turnover / Total turnover
Deductible VAT (general costs) = Total VAT × Prorata
```

The prorata is provisionally determined on N−1, **adjusted in January N+1**.

### 5.4 VAT credit and refund (Art. 195-204)

If deductible VAT > collected VAT → **VAT credit**, carried forward to subsequent months.

**Refund possible:**
- Annual if credit ≥ **DJF 50,000** (Art. 196-1)
- Quarterly if credit ≥ **DJF 200,000** and continuous credit (Art. 196-2)
- Conditions: capitalised investment, or export, or services related to export (Art. 196-3)

*The administration has 20 days to respond (Art. 199).*

---

## 6. Enter a VAT return in SIGFID

The VAT return is monthly. SIGFID form:

| Block | Field | Rule |
|-------|-------|------|
| Taxable person | NIF + business name | Required |
| Period | Month + Year | Required |
| Taxable turnover (10%) | Amount | Required |
| Zero-rated turnover (0%) | Amount | Required |
| Exempt turnover | Amount | Required |
| Collected VAT | Auto-calculated (taxable turnover × 10%) | Read-only |
| Deductible VAT — imports | Amount (customs docs) | Required |
| Deductible VAT — local purchases | Amount (invoices with valid NIF) | Required |
| Deductible VAT — fixed assets | Amount | Required |
| Applicable prorata | Auto-calculated if mixed activity | Auto |
| Total deductible VAT | Auto-calculated | Read-only |
| VAT due / Credit | Auto-calculated (collected − deductible) | Read-only |
| Previous credit carried forward | Carry-forward from N−1 | Read-only |
| **Balance to pay / Credit to carry forward** | **Auto-calculated** | **Read-only** |

**Steps in SIGFID:**
1. Click **Returns → VAT → New return**
2. Select the taxpayer and the period
3. Enter the pre-tax amounts by category (taxable, zero-rated, exempt)
4. Import the purchase invoices with supplier NIFs
5. SIGFID calculates collected VAT, deductible VAT, and balance
6. If credit: SIGFID offers carry-forward or refund request
7. If no operations: check **Nil return**
8. Click **Validate**

:::warning Mandatory nil return
Even without operations, the taxable person must file a nil return. SIGFID generates an alert if an active taxable person has not filed a return by the 20th of the month.
:::

:::info Automatic D+21 trigger
SIGFID automatically runs a process on the 21st of each month: it identifies taxable persons without a return, applies the late penalty (5%/month, minimum DJF 50,000), issues an AMR and notifies the responsible officer.
:::

---

## 7. Chargeable event and chargeability (Art. 182-183)

| Operation | Chargeable event | Chargeability |
|-----------|-----------------|---------------|
| Sales / exchanges | Delivery | Delivery |
| Imports | Release for consumption | Customs declaration |
| Supplies of services | Performance of the service | **Receipt of the price** |
| Real estate works | Execution of works | Receipt / bills |
| Self-supply | First use | First use |

---

## 8. Calculation scenarios

### Scenario 1 — Sale of goods (standard rate)
*Retail trade, pre-tax turnover = 5,000,000 DJF, pre-tax purchases = 3,000,000 DJF*

| Component | Amount (DJF) |
|-----------|-------------|
| Collected VAT (10% × 5M) | 500,000 |
| Deductible VAT (purchases) | 300,000 |
| **VAT to remit** | **200,000** |

### Scenario 2 — Service provision
*Consulting firm, pre-tax turnover = 2,000,000 DJF, deductible VAT on costs = 80,000 DJF*

| Component | Amount (DJF) |
|-----------|-------------|
| Collected VAT (10% × 2M) | 200,000 |
| Deductible VAT | 80,000 |
| **VAT due** | **120,000** |

### Scenario 3 — Import + local resale
*Customs value 10M DJF, duties 2M DJF, local resale 15M DJF pre-tax*

| Component | Amount (DJF) |
|-----------|-------------|
| Import VAT = 10% × (10M + 2M) | 1,200,000 |
| Collected VAT on resale (10% × 15M) | 1,500,000 |
| Deductible VAT (imports) | 1,200,000 |
| **VAT due** | **300,000** |

### Scenario 4 — Export (zero rate)
*Export 8M DJF, deductible VAT on purchases = 400,000 DJF*

| Component | Amount (DJF) |
|-----------|-------------|
| Export turnover (zero rate) | 8,000,000 |
| Collected VAT | 0 |
| Deductible VAT (purchases) | 400,000 |
| **VAT credit** | **400,000** |
| Refund available (Art. 196) | YES — credit ≥ 50,000 DJF |

### Scenario 5 — Exempt operation (approved hospital)
*Approved private hospital (Art. 176-6°), turnover = 20M DJF, purchases with VAT = 500,000 DJF*

| Component | Amount (DJF) |
|-----------|-------------|
| Exempt turnover | 20,000,000 |
| Collected VAT | 0 |
| Deductible VAT | **0** (no right) |
| VAT on purchases | **Final cost for the hospital** |

### Scenario 6 — VAT credit (heavy investment)
*Machine purchase 50M pre-tax (VAT = 5M DJF), monthly sales = 10M pre-tax*

| Component | Amount (DJF) |
|-----------|-------------|
| Collected VAT (10% × 10M) | 1,000,000 |
| Deductible VAT (machine) | 5,000,000 |
| **VAT credit** | **4,000,000** |
| Quarterly refund (≥ 200K, investment) | YES |

### Scenario 7 — Prorata (mixed activity)
*Clinic: taxable pharmacy 30M + exempt care 70M. VAT on general costs = 800,000 DJF*

| Component | Amount (DJF) |
|-----------|-------------|
| Prorata = 30M / 100M | **30%** |
| Deductible VAT = 800K × 30% | 240,000 |
| Non-deductible VAT (cost) | 560,000 |

### Scenario 8 — Penalties (delay + sale without invoice)
*March return filed on 15 May (25 days late), VAT due = 300,000 DJF. Sales without invoice detected for 1M pre-tax*

| Component | Amount (DJF) |
|-----------|-------------|
| VAT due | 300,000 |
| Late penalty (5%/month, min 50K) | 50,000 |
| 10% surcharge | 30,000 |
| Sale-without-invoice fine (50% × VAT 100K) | 50,000 |
| **Total owed to the Treasury** | **430,000** |

---

## 9. VAT-specific penalties (Art. 260-265)

| Infringement | Penalty | Article |
|--------------|---------|---------|
| Return default/delay | Art. 246 + **minimum DJF 50,000** | Art. 265 |
| Sale without invoice | **50% of duties** (100% in case of recidivism) | Art. 261 |
| False invoice / fictitious deduction | **100% of the deduction + criminal penalties** | Art. 262 |
| Fictitious refund request | Criminal fraud offence | Art. 263 |
| Import infringements | Customs regulations | Art. 264 |

---

## 10. SIGFID consistency checks

- VAT/IBP cross-check: declared VAT turnover = declared IBP turnover
- VAT/Customs cross-check: declared import VAT = customs-assessed VAT
- VAT/Supplier NIF cross-check: NIF verification on deductible invoices
- Detection of active taxable persons without return (automatic alert)
