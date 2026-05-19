---
sidebar_position: 2
title: Tax parameters
---

# Tax parameters

Tax parameters (rates, brackets, thresholds) are configured here and used by SIGFID's calculation functions. **No rate is hard-coded** in the system.

:::warning Mandatory rule
Any change to a tax parameter must be based on a legal text (CGI, Finance Act). Always note the legal reference when updating.
:::

## ITS parameters — Progressive scale (Art. 15 CGI)

The ITS scale has 8 brackets. For each bracket, configure:

| Field | Description |
|-------|-------------|
| Bracket from (DJF) | Minimum monthly taxable income of the bracket |
| Bracket to (DJF) | Maximum monthly taxable income of the bracket |
| Rate (%) | Applicable marginal rate |

**Scale in force (CGI 2025, Art. 15):**

| Bracket | Rate |
|---------|------|
| 0 — 50,000 DJF | 0 % (exempt) |
| 50,001 — 150,000 DJF | 9 % |
| 150,001 — 300,000 DJF | 14 % |
| 300,001 — 500,000 DJF | 19 % |
| 500,001 — 900,000 DJF | 24 % |
| 900,001 — 1,500,000 DJF | 29 % |
| 1,500,001 — 3,000,000 DJF | 34 % |
| Over 3,000,000 DJF | 39 % |

## VAT parameters (Art. 185 CGI)

| Parameter | Value |
|-----------|-------|
| Standard rate | 10 % |
| Zero rate (exports) | 0 % |
| Liability threshold | 30,000,000 DJF / year |

## IBP parameters (Art. 21 CGI)

| Parameter | Value |
|-----------|-------|
| Rate on profits | 25 % |
| IMF (minimum) | 1 % of pre-tax turnover |
| IMF floor | 50,000 DJF |
| IMF ceiling | 5,000,000 DJF |

## Change history

Each parameter change is timestamped and attributed to the administrator who performed it. Past calculations preserve a snapshot of the parameters used at the time of calculation.
