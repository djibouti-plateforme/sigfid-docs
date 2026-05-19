---
sidebar_position: 8
title: Other return-based taxes
---

# Other return-based taxes

## IIS — Social Incentive Tax (Art. 78-86)

**CGI reference:** Book 1, Title 1, Chapter 6  
**Required permission:** `DECLARATION_IIS_CREATE`

IIS targets the financial investment income received by certain **public bodies** (EPA and bodies with a social vocation). It applies to fixed and variable income investments.

**Mutual exclusion rule (Art. 86):** A body cannot be subject to both IIS and IGS (Tax on Large Companies).

**Workflow in SIGFID:**
1. Click **Returns → IIS**
2. Select the liable public body
3. Enter the quarter's investment income
4. SIGFID calculates the IIS according to the applicable rates
5. Validate

---

## IPVI — Real Estate Capital Gains Tax (Art. 63-69)

**CGI reference:** Book 1, Title 1, Chapter 4  
**Required permission:** `DECLARATION_IPVI_CREATE`

### Scope (Art. 65)

- Sales of land, buildings, real estate rights
- Real estate exchanges
- Real estate contributions to companies

### Calculating the taxable capital gain (Art. 68)

```
Net capital gain = Sale price − Cost price (acquisition price + fees)
IPVI = Net capital gain × Applicable rate
```

### Exemptions (Art. 66)

- Sale of the main residence (subject to conditions)
- Capital gains below the regulatory threshold
- Sales as part of expropriation for public utility

**Workflow in SIGFID:**
1. Click **Returns → IPVI**
2. Select the taxpayer (seller)
3. Enter: nature of the property, acquisition price, acquisition date, sale price, fees
4. SIGFID calculates the capital gain and the tax
5. Attach the deed of sale
6. Validate

---

## IPVM — Securities Capital Gains Tax

**CGI reference:** Book 1, Title 1, Chapter 4 (securities variant)  
**Required permission:** `DECLARATION_IPVM_CREATE`

Applies to capital gains realised upon the sale of securities (shares, bonds, company shares).

**Workflow in SIGFID:**
1. Click **Returns → IPVM**
2. Select the taxpayer
3. Enter the sales for the fiscal year (date, nature, purchase price, sale price)
4. SIGFID calculates the net capital gain and the tax
5. Validate

---

## IRVM — Tax on Income from Securities (Art. 90F-90N)

**CGI reference:** Book 1, Title 1, Chapter 9  
**Required permission:** `DECLARATION_IRVM_CREATE`  
**Nature:** Withholding at source on distributed dividends

### Rates (Art. 90K-90L)

IRVM applies to dividends distributed by companies.

### Exemption (Art. 90H)

Dividends distributed < **DJF 10,000,000** per year → exempt from IRVM.

### Obligations (Art. 90M)

The distributing company carries out the withholding and remits it to the DGI within **15 days** following the distribution, with:
- A remittance slip
- A nominative list of beneficiaries

**Workflow in SIGFID:**
1. Click **Returns → IRVM**
2. Select the distributing company
3. Enter the total amount of dividends distributed
4. Enter the nominative list of beneficiary shareholders
5. SIGFID calculates the IRVM and checks the exemption threshold (10M DJF)
6. Validate within 15 days of distribution

---

## TBA — Air Ticket Tax (Art. 90A-90E)

**CGI reference:** Book 1, Title 1, Chapter 8  
**Required permission:** `DECLARATION_TBA_CREATE`  
**Liable party:** Airlines and travel agencies

### Scope (Art. 90A)

Any air ticket for a departure from Djibouti (regardless of the passenger's nationality or the place where the ticket was issued).

### Pricing (Art. 90D)

Rates are set by destination (international or regional) and configured in the SIGFID tax parameters.

### Obligations (Art. 90E)

- **Monthly** return by the airline or the agency
- Remittance before the **20th of the following month**

**Workflow in SIGFID:**
1. Click **Returns → TBA**
2. Select the airline or the agency
3. Enter the number of tickets issued by destination for the month
4. SIGFID calculates TBA = number of tickets × rate per destination
5. Validate before the 20th of the following month
