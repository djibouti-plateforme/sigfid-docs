---
sidebar_position: 7
title: Tax penalties
---

# Tax penalties — Complete reference

**CGI reference:** Art. 245 to 265

---

## General penalties (Art. 246-250)

These penalties apply to **all return-based taxes**.

### Art. 246 — Failure or delay in filing

| Situation | Penalty |
|-----------|---------|
| Late interest | **5% per month** from the first day of delay |
| Return filed within 10 days following the formal notice (MED) | **10%** surcharge |
| Return filed more than 20 days after MED | **40%** surcharge |
| No filing despite MED | **40%** surcharge + automatic assessment |

### Art. 247 — Late payment

| Penalty | Rate |
|---------|------|
| Late interest | **0.5% per month** |
| Fixed surcharge | **5%** of the deferred amount |

### Art. 248 — Under-declaration (good faith)

| Penalty | Rate |
|---------|------|
| Late interest | **1% per month** on the additional amount |

### Art. 249 — Failure to withhold at source

| Tax concerned | Penalty |
|---------------|---------|
| ITS (failure to withhold by employer) | **100% of missed withholdings** |
| IRNR (failure to withhold) | **100% of missed withholdings** |
| RAS PS (failure to withhold) | **100% of missed withholdings** |

:::danger Heaviest penalty
Art. 249: The fine equals the amount of the withholdings not made, on top of the principal. An employer who omits DJF 50,000 of ITS pays **DJF 100,000** to the Treasury (50,000 + 50,000).
:::

### Art. 250 — Bad faith and fraud

| Situation | Surcharge |
|-----------|-----------|
| Bad faith (intentional under-declaration) | **40%** of evaded duties |
| Fraudulent manoeuvres | **80%** of evaded duties |

---

## VAT-specific penalties (Art. 260-265)

| Infringement | Penalty | Article |
|--------------|---------|---------|
| VAT return default/delay | Art. 246 + **minimum DJF 50,000** | Art. 265 |
| Sale without invoice | **50% of duties at stake** (100% in case of recidivism) | Art. 261 |
| False invoice / fictitious deduction | **100% of the deduction + criminal penalties** | Art. 262 |
| Fictitious refund request | Criminal fraud offence | Art. 263 |

---

## Licence-specific penalties (Art. 257-259)

| Infringement | Penalty | Article |
|--------------|---------|---------|
| Beverage trade without licence | Fine + closure | Art. 257 |
| Failure to display licence | Fine | Art. 259 |

---

## Penalty management workflow in SIGFID

### Automatic trigger

SIGFID automatically triggers penalties at each missed deadline:

1. **D+1 after deadline**: SIGFID calculates the late interest (Art. 247 or 246)
2. **Send the formal notice (MED)**: the officer validates and sends the MED from SIGFID
3. **D+10 after MED**: if no return → 10% surcharge
4. **D+20 after MED**: if no return → 40% surcharge
5. **Automatic assessment**: if persistence, the officer issues an automatic assessment

### Notice of Tax Collection (AMR)

The AMR is automatically issued by SIGFID as soon as a debt is recorded. The officer can:
1. View the list of AMRs awaiting collection
2. Track associated payments
3. Issue a reminder or initiate enforced collection proceedings

---

## Full penalty calculation example

**Situation:** SARL XYZ, March VAT not declared and not paid (amount due = DJF 500,000), MED sent on 5 May, return filed on 12 May (within 10 days).

| Component | Amount (DJF) |
|-----------|-------------|
| VAT due (March) | 500,000 |
| Late interest (5%/month × 2 months) | 50,000 |
| 10% surcharge (filing within 10 days of MED) | 50,000 |
| Minimum VAT penalty (Art. 265) | 50,000 |
| Applied penalty = MAX(50K+50K ; 50K) | 100,000 |
| **Total to pay** | **600,000** |
