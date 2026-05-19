---
sidebar_position: 1
title: ITS — Wages and Salaries Tax
---

# Wages and Salaries Tax (ITS)

**CGI reference:** Book 1, Title 1, Chapter 1 — Art. 1 to 17 + Art. 285 to 291  
**Required permission:** `DECLARATION_ITS_CREATE`  
**Nature:** Return-based tax, withheld at source by the employer, with no tax roll issued (Art. 285)

---

## 1. Scope

### 1.1 Taxable income (Art. 1-3)

All remuneration paid to natural persons in the context of an employment relationship is taxable:
- Salaries, wages, allowances, bonuses, leave pay
- Lump-sum allowances for professional expenses
- Tips
- Pensions and annuities (in consideration of a period of work)
- Benefits in kind and in cash

### 1.2 Exempt persons and income (Art. 4)

- Diplomatic staff posted in Djibouti
- Retirement pensions
- French technical-assistance cooperants
- **Persons whose monthly taxable salary ≤ DJF 50,000** (after CNSS/pension deductions)

:::warning Exemption threshold
The 50,000 DJF threshold applies to the **taxable** salary (after deductions), not the gross salary.
**Example:** Gross 53,000 DJF − CNSS 3,500 DJF = taxable 49,500 DJF → **exempt**.
:::

### 1.3 Exempt incidental income (Art. 5)

- Family allowances, refunds of pension withholdings
- Reimbursements of professional expenses with supporting documents
- Maintenance and disability allowances
- Reinvested income (Investment Code)
- **Severance payments: DJF 1,500,000 allowance** (LFI 2022)

---

## 2. Calculating the tax base

### 2.1 Formula (Art. 6, 9)

```
Tax base = Gross cash salary + Benefits in kind − CNSS deduction − Pension withholdings
CNSS deduction = MIN(Gross cash; CNSS ceiling DJF 400,000) × CNSS rate (6%)
```

:::info CNSS ceiling
The employee's CNSS contribution is capped at DJF 400,000/month. The maximum deduction is therefore DJF 24,000 (400,000 × 6%), even for a salary of DJF 800,000.
:::

### 2.2 Benefits in kind (Art. 17)

| Benefit | Valuation |
|---------|-----------|
| Company housing | Actual or cadastral rental value, less the share paid by the employee |
| Company vehicle | **Lump sum DJF 40,000/month** per vehicle and per beneficiary |
| Personal expenses | Actual amount (phone, electricity, water) |
| Domestic expenses | Wage actually paid or legal minimum wage, per employee |

### 2.3 Wage adjustments (Art. 10)

Adjustments are incorporated in the month of payment. If the adjustment exceeds **50% of the monthly taxable income**, the employee may opt for retroactive incorporation (month-by-month recalculation).

### 2.4 Advances (Art. 11)

Advances are **not** taxable compensation. Repayments of advances are reintegrated into taxable income.

### 2.5 Rounding (Art. 14)

Any fraction of base below **DJF 5,000 is disregarded** (rounded down to a multiple of DJF 5,000).

---

## 3. Progressive scale (Art. 15, LFI 2021/2022)

Applies to taxable salaries **above DJF 50,000**:

| Monthly income bracket | Rate | Tax on the bracket | Cumulative max |
|------------------------|------|--------------------|----------------|
| 0 — 30,000 DJF | 2% | 600 | 600 |
| 30,001 — 50,000 DJF | 12% | 2,400 | 3,000 |
| 50,001 — 150,000 DJF | 15% | 15,000 | 18,000 |
| 150,001 — 300,000 DJF | 22% | 33,000 | 51,000 |
| 300,001 — 600,000 DJF | 25% | 75,000 | 126,000 |
| 600,001 — 1,000,000 DJF | 30% | 120,000 | 246,000 |
| 1,000,001 — 2,000,000 DJF | 35% | 350,000 | 596,000 |
| Over 2,000,001 DJF | 45% | — | — |

:::warning Interaction exemption / scale
Salaries ≤ DJF 50,000 are FULLY exempt (Art. 4). For salaries > DJF 50,000, the scale applies **from the very first franc** (brackets 1 and 2 at 2% and 12% do apply). Test the threshold FIRST, then apply the full scale if exceeded.
:::

### Lump-sum rate for employment < 1 month (Art. 16)

For remuneration > DJF 50,000 paid to persons employed **less than a calendar month**: minimum lump-sum rate of **15%** on the entire remuneration.

:::tip Most-favourable-to-State rule
SIGFID calculates both results (scale and 15% lump sum) and retains the **higher**. For very high remuneration (> approx. DJF 600,000), the progressive scale will exceed 15%.
:::

---

## 4. Calculation scenarios

### Scenario 1 — Exempt salary (≤ DJF 50,000)
*Mr Ibrahim, retail employee, gross monthly = 48,000 DJF*

| Component | Amount (DJF) |
|-----------|-------------|
| Gross monthly salary | 48,000 |
| Employee CNSS (6%) | −2,880 |
| Tax base | 45,120 |
| Rounding (Art. 14) | **45,000** |
| Threshold test Art. 4: 45,000 ≤ 50,000 | **EXEMPT** |
| **ITS due** | **0** |

### Scenario 2 — Average salary (200,000 DJF)
*Mrs Fatima, accountant, gross monthly = 200,000 DJF*

| Component | Amount (DJF) |
|-----------|-------------|
| Gross salary | 200,000 |
| CNSS (6%) | −12,000 |
| Tax base | 188,000 |
| Rounding → | 185,000 |
| Bracket 0–30,000 × 2% | 600 |
| Bracket 30,001–50,000 × 12% | 2,400 |
| Bracket 50,001–150,000 × 15% | 15,000 |
| Bracket 150,001–185,000 × 22% | 7,700 |
| **Monthly ITS due** | **25,700** |

*Effective rate: 25,700 / 188,000 = 13.67%*

### Scenario 3 — High salary (800,000 DJF)
*Mr Ahmed, technical director, gross = 800,000 DJF*

| Component | Amount (DJF) |
|-----------|-------------|
| Gross salary | 800,000 |
| CNSS (6% × ceiling 400,000) | −24,000 |
| Tax base | 776,000 |
| Rounding → | 775,000 |
| Brackets 0–600,000 | 126,000 |
| Bracket 600,001–775,000 × 30% | 52,500 |
| **Monthly ITS due** | **178,500** |

*Effective rate: 23.00%*

### Scenario 4 — Very high salary + benefits in kind
*Mr Youssouf, CEO, gross cash = 1,500,000 DJF + vehicle + housing (actual rent 150,000 DJF)*

| Component | Amount (DJF) |
|-----------|-------------|
| Gross cash salary | 1,500,000 |
| Vehicle benefit (lump sum Art. 17) | +40,000 |
| Housing benefit (actual rent Art. 17) | +150,000 |
| Total gross remuneration | 1,690,000 |
| CNSS (6% × ceiling 400,000, on gross cash) | −24,000 |
| Tax base | 1,666,000 |
| Rounding → | 1,665,000 |
| Brackets 0–1,000,000 | 246,000 |
| Bracket 1,000,001–1,665,000 × 35% | 232,750 |
| **Monthly ITS due** | **478,750** |

*Effective rate: 28.74%*

### Scenario 5 — Temporary employment < 1 month (Art. 16)
*Mr Omar, consultant 12 days, remuneration = 180,000 DJF*

| Option | Calculation | Result |
|--------|-------------|--------|
| **A — 15% lump sum** | 15% × 180,000 | 27,000 |
| **B — Progressive scale** | Brackets up to 180,000 | 24,600 |
| **ITS due = MAX(A, B)** | | **27,000** |

### Scenario 6 — Multiple employers (Art. 290)
*Mrs Sahra: Employer A 250,000 DJF, Employer B 150,000 DJF*

- Employer A withholds independently on base 235,000 DJF: **ITS = 36,700 DJF**
- Employer B withholds independently on base 140,000 DJF: **ITS = 16,500 DJF**
- Total withheld by employers: **53,200 DJF**
- ITS on combined base (375,000 DJF): **69,750 DJF**
- **Additional amount owed by Mrs Sahra to the DGI: 16,550 DJF**

### Scenario 7 — Severance payment (Art. 5-5°)
*Mr Hassan, severance payment = 3,000,000 DJF*

| Component | Amount (DJF) |
|-----------|-------------|
| Gross severance | 3,000,000 |
| Allowance (Art. 5-5°, LFI 2022) | −1,500,000 |
| Taxable severance | 1,500,000 |
| ITS on scale (brackets 1–7) | 421,000 |
| **ITS due on severance** | **421,000** |

*Note: calculated separately from the last month's salary.*

---

## 5. Employer obligations

### 5.1 Nominative declaration (Art. 289)

Each payment is accompanied by a declaration including:
- Period concerned, NIF and address of the employer
- Nominative list of employees: gross remuneration, contributions, tax base, ITS due
- Totals: gross remuneration, contributions, tax bases, overall ITS

### 5.2 Mandatory nil return

Every active employer (valid NIF + current patente) must file an ITS return **every month**, even if no salaries were paid.

### 5.3 Payment deadlines (Art. 287, LFI 2024)

| Situation | Deadline | Threshold |
|-----------|----------|-----------|
| Monthly regime (general rule) | Before the **10th** of month M+1 | ITS > 50,000 DJF/month |
| Quarterly regime | Before the **15th** of month M+1 | ITS ≤ 50,000 DJF/month |
| Cessation of business (Art. 288) | **Immediately** | Regardless of amount |
| Death of the employer | **15 days** after death | Regardless of amount |

### 5.4 Record retention (Art. 286)

**10 years** mandatory retention. Withholdings, even irregular ones, are owed to the Treasury. Employees are **jointly and severally liable** with the employer.

---

## 6. Enter an ITS return in SIGFID

1. In sigfid-agent, click **Returns → ITS**
2. Click **New return**
3. Search and select the **employer** (by NIF or business name)
4. Select the **period** (month/year)
5. Enter for **each employee**:
   - Last name, first name, employee NIF
   - Gross cash salary
   - Benefits in kind (housing, vehicle, other)
   - CNSS and pension contributions
   - Type of employment (regular or < 1 month)
6. SIGFID calculates **automatically** for each employee: tax base, ITS due
7. Check the summary: total ITS to remit
8. If no employees this month: check **Nil return**
9. Click **Validate the return**

The validated return automatically generates a **debt** in the employer's tax account.

---

## 7. Penalties (Art. 246-249)

| Infringement | Penalty | Article |
|--------------|---------|---------|
| Failure to withhold at source | **100% of missed withholdings** | Art. 249 |
| Non-filing of return | 5%/month + 10% (10 days after MED) or 40% | Art. 246 |
| Late payment | 0.5%/month + 5% | Art. 247 |
| Under-declaration (good faith) | 1%/month | Art. 248 |
| Bad faith / fraud | 40% to 80% of duties | Art. 250 |

:::danger Heaviest penalty
Art. 249: An employer who fails to withhold DJF 50,000 of ITS pays 50,000 + 50,000 = **DJF 100,000** to the Treasury. SIGFID calculates this fine automatically.
:::

### Penalty calculation example (Scenario 9)
*Company ABC, no withholding for 3 months, unwithheld ITS = 450,000 DJF*

| Component | Amount (DJF) |
|-----------|-------------|
| Unwithheld ITS (3 months) | 450,000 |
| Art. 249 fine (100%) | 450,000 |
| Late interest (0.5% × 3 months) | 6,750 |
| 5% surcharge (Art. 247) | 22,500 |
| **TOTAL owed to the Treasury** | **929,250** |
