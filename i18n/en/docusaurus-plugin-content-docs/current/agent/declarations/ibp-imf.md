---
sidebar_position: 3
title: IBP / IMF — Business Profits Tax & Minimum Lump-Sum Tax
---

# IBP / IMF — Business Profits Tax and Minimum Lump-Sum Tax

**CGI reference:**  
- IBP: Book 1, Title 1, Chapter 2 — Art. 18 to 56  
- IMF: Book 1, Title 1, Chapter 3 — Art. 57 to 62  
- Collection: Art. 292 to 299  
**Required permission:** `DECLARATION_IBP_CREATE`

---

## 1. Fundamental principle — The MAXIMUM rule (Art. 61)

:::danger Absolute rule
SIGFID computes **both taxes** then applies: **Tax due = MAX(IBP, IMF)**

| Situation | Tax due | Article |
|-----------|---------|---------|
| Profit and IBP > IMF | **IBP** | Art. 56 |
| Profit but IBP < IMF | **IMF** | Art. 61 |
| Loss | **IMF** (IBP = 0) | Art. 61 |
| IBP-exempt business (Investment Code) | **IMF anyway** | Art. 62-1 |
| Patente < 120,000 DJF | **IMF = patente amount** | Art. 62-2 |
:::

---

## 2. IBP — Scope

### 2.1 Taxable persons (Art. 18-21)

- Natural persons: commercial, industrial, artisanal, liberal profits (Art. 19)
- Goods dealers, real estate intermediaries, developers (Art. 20)
- All legal entities engaged in for-profit activity (Art. 21)

### 2.2 IBP exemptions (Art. 22-24)

| Exemption | Article |
|-----------|---------|
| Cinema halls | Art. 22-1° |
| Agricultural cooperatives | Art. 22-2° |
| Securities trading companies | Art. 22-3° |
| Reinvested profits (Investment Code) | Art. 22-4° |
| Securities income | Art. 23 |
| Real estate income (if CFPB/CFPNB already taxed) | Art. 24 |

:::warning IBP-exempt ≠ IMF-exempt
Businesses exempt from IBP (Investment Code, free zone) remain **liable for IMF** (Art. 62-1).
:::

---

## 3. Determining the taxable profit (Art. 27-35)

### 3.1 Net profit (Art. 29)

```
Tax profit = Accounting result + Reintegrations − Deductions − Prior losses − CGA allowance
```

*The taxpayer does NOT enter the tax profit: SIGFID calculates it automatically.*

### 3.2 Deductible expenses (Art. 30)

- General expenses substantiated by invoices with **valid NIFs**
- Personnel expenses declared for ITS and CNSS
  - ⚠️ If > 5 foreign employees: deduction limited to **20%** of remuneration (Art. 30-1)
- Straight-line and declining-balance amortisation (scale Art. 30-2)
- Interest on associate current accounts (capped, Art. 30-3)
- Taxes borne by the business (except IBP, CFPB/CFPNB)
- Provisions for probable losses/charges (Art. 30-5)

### 3.3 Non-deductible expenses (Art. 32-34)

- Fines, penalties, settlements (Art. 32)
- Lump-sum executive allowances duplicated with actual expenses (Art. 33)
- Lavish expenditure: hunting, fishing, leisure homes (Art. 34)

### 3.4 Loss carry-forward (Art. 31)

A loss can be carried forward to the **3 following fiscal years** (FIFO). Exception: depreciation booked in loss periods ("deferred depreciation" = no time limit).

:::info 5% allowance for approved management centres (CGA)
Businesses affiliated to a CGA, with turnover < 50M DJF, compliant accounting, returns within deadlines → **5%** allowance on the tax result (Art. 55bis).
:::

---

## 4. Tax regimes (Art. 36-51)

### 4.1 Simplified regime (Art. 36-44)

| Activity | Pre-tax turnover threshold |
|----------|---------------------------|
| Sales of goods, hospitality, construction | < **20,000,000 DJF** |
| Services, liberal professions | < **10,000,000 DJF** |

- Simplified accounting (5 books, Art. 43)
- Return before **1 February** (Art. 42)
- 5-year retention

### 4.2 Regular regime (Art. 45-51)

- Mandatory above thresholds or by option
- Full tax filing pack (balance sheet, P&L, amortisation/provisions schedules — Art. 50)
- Result return before **1 April** (Art. 49)
- **10-year** retention (Art. 48)

:::warning Tax filing pack lock (regular regime)
SIGFID blocks the validation of the IBP return until the full tax filing pack is entered or uploaded. Without this lock, an accountant could bypass all controls.
:::

### 4.3 Micro-business / VSE regime (Art. 35-1 to 35-7, LFI 2023)

| Criterion | Micro-business | VSE |
|-----------|----------------|-----|
| Max turnover | ≤ 2,000,000 DJF | ≤ 5,000,000 DJF |
| Max employees | 0–5 | 0–10 |
| IBP/IMF exemption | **3 years** | **3 years** |
| Lump sum after 3 years (Djibouti) | **35,000 DJF** | **50,000 DJF** |

---

## 5. IBP — Rate and calculation (Art. 56)

```
IBP = Net taxable profit × 25%
```
Rounding: fraction < DJF 1,000 disregarded.

---

## 6. IMF — Minimum Lump-Sum Tax (Art. 57-62)

### 6.1 Base and rate (Art. 59-60)

```
IMF = MAX(Pre-tax turnover for year E × 1%; DJF 120,000)
```

- **Base:** pre-tax turnover of the **year being assessed** (not the previous year)
- **Rate:** 1%
- **Absolute minimum:** DJF 120,000
- **Derogation:** if patente < DJF 120,000 → IMF = patente amount (Art. 62-2)

:::info IMF non-deductible
IMF is NOT deductible from taxable profit (Art. 57).
:::

---

## 7. Collection and instalments (Art. 292-299)

### 7.1 Three annual instalments (Art. 293bis-294bis, LFI 2023)

Each instalment = **25% of the actual tax owed (MAX IBP/IMF) for year N-1**:

| Instalment | Deadline |
|------------|----------|
| 1st instalment | **15 April** |
| 2nd instalment | **15 August** |
| 3rd instalment | **15 November** |

*Exemption: businesses whose N-1 tax ≤ DJF 120,000 (Art. 293bis).*

### 7.2 New businesses (Art. 295bis)

- Natural persons: each instalment = 1/3 of (IBP calculated on annual patente)
- New companies: 1/3 of (IBP on 5% (JSC) or 10% (others) of called share capital)

### 7.3 Balance and assessment (Art. 299)

| Case | SIGFID action |
|------|---------------|
| Balance > 0 (additional to pay) | Issue an **AMR** for the remainder |
| Balance < 0 (overpaid) | **Tax credit** to apply against future instalments or refundable |
| Balance = 0 | Account settled |

---

## 8. Enter an IBP return in SIGFID

1. Click **Returns → IBP/IMF → New return**
2. Select the taxpayer and the **fiscal year** (calendar year)
3. The regime (simplified/regular/micro) is determined automatically by SIGFID
4. Enter:
   - **Pre-tax turnover** for the year
   - **Accounting result** (profit or loss)
   - **Reintegrations**: non-deductible expenses, line by line (Art. 32-34)
   - **Deductions**: exempt income, line by line (Art. 22-24)
5. SIGFID automatically applies the **previous losses** (FIFO, Art. 31)
6. If the business is a CGA member: SIGFID applies the **5% allowance** (Art. 55bis)
7. SIGFID calculates: **IBP** (25% × tax profit) and **IMF** (1% × pre-tax turnover, min 120K)
8. SIGFID displays the tax due: **MAX(IBP, IMF)**
9. If regular regime: **attach the tax filing pack** (LOCK — validation blocked without)
10. Click **Validate**

The return automatically generates the 3 instalments for the following fiscal year.

---

## 9. Calculation scenarios

### Scenario 1 — Simplified regime, normal profit
*Mr Ahmed, retail trade, pre-tax turnover = 15M DJF, Net profit = 2,500,000 DJF*

| | Amount (DJF) |
|-|--------------|
| IBP = 25% × 2,500,000 | 625,000 |
| IMF = 1% × 15,000,000 | 150,000 |
| Comparison: IBP (625K) > IMF (150K) | |
| **Tax due = IBP** | **625,000** |

### Scenario 2 — Regular regime, profit + instalments
*SARL DJIBOUTI-TECH, pre-tax turnover = 80M DJF, profit = 12M DJF, N-1 tax = 2,800,000 DJF*

| | Amount (DJF) |
|-|--------------|
| IBP = 25% × 12M | 3,000,000 |
| IMF = 1% × 80M | 800,000 |
| IBP > IMF → IBP applicable | 3,000,000 |
| 3 instalments paid (3 × 25% × 2,800,000) | −2,100,000 |
| **Balance to pay** | **900,000** |

### Scenario 3 — Loss → IMF applicable
*SARL ALPHA, pre-tax turnover = 50M DJF, loss = −3,000,000 DJF*

| | Amount (DJF) |
|-|--------------|
| IBP (loss → 0) | 0 |
| IMF = 1% × 50M | 500,000 |
| Loss → IMF applicable (Art. 61) | |
| **Tax due = IMF** | **500,000** |
| Loss carried forward to N+1 to N+3 | −3,000,000 |

### Scenario 4 — Low profit, IMF > IBP
*Mr Moussa, pre-tax turnover = 18M DJF, profit = 500,000 DJF*

| | Amount (DJF) |
|-|--------------|
| IBP = 25% × 500,000 | 125,000 |
| IMF = 1% × 18M | 180,000 |
| IMF (180K) > IBP (125K) | |
| **Tax due = IMF** | **180,000** |

### Scenario 5 — Loss carry-forward over 3 years
*SARL BETA: Loss N = −5M DJF, profit N+1 = 2M, N+2 = 4M*

| | Year N+1 | Year N+2 |
|-|----------|----------|
| Gross profit | 2,000,000 | 4,000,000 |
| Carried-forward loss (N) | −2,000,000 | −3,000,000 |
| Tax base | 0 | 1,000,000 |
| IBP (25%) | 0 | 250,000 |
| IMF still due | 1% × turnover | 1% × turnover |

*IMF applies even when the profit after carry-forward is 0.*

### Scenario 6 — Nil return (dormant business)
*Company OMEGA, active NIF, no activity, patente = 84,000 DJF, turnover = 0*

| | Amount (DJF) |
|-|--------------|
| IBP = 25% × 0 | 0 |
| Theoretical IMF = 1% × 0 | 0 |
| IMF floor (Art. 60) | 120,000 |
| Art. 62-2 test: patente (84K) < 120K? | YES |
| Derogation: IMF = patente | 84,000 |
| **Tax due = derogating IMF** | **84,000** |

### Scenario 7 — Penalties (filing default)
*SARL GAMMA, IBP due = 1M DJF, return not filed by 1 April, filed 3 months later (within 10 days of MED)*

| Component | Amount (DJF) |
|-----------|-------------|
| IBP due | 1,000,000 |
| Late interest (5%/month × 3) | 150,000 |
| 10% surcharge (Art. 246) | 100,000 |
| **Total owed to the Treasury** | **1,250,000** |

---

## 10. Penalties (Art. 246-250)

| Infringement | Penalty | Article |
|--------------|---------|---------|
| Non-filing of return | 5%/month + 10% (within 10 days of MED) or 40% (after 20 days) | Art. 246 |
| Late payment | 0.5%/month + 5% | Art. 247 |
| Good-faith under-declaration | 1%/month of delay | Art. 248 |
| RAS withholding default | 100% of withholdings | Art. 249 |
| Bad faith / fraud | 40% to 80% of duties | Art. 250 |
