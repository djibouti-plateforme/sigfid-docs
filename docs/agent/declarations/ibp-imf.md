---
sidebar_position: 3
title: IBP / IMF — Impôt sur les Bénéfices & Impôt Minimum Forfaitaire
---

# IBP / IMF — Impôt sur les Bénéfices Professionnels et Impôt Minimum Forfaitaire

**Référence CGI :**  
- IBP : Livre 1, Titre 1, Chapitre 2 — Art. 18 à 56  
- IMF : Livre 1, Titre 1, Chapitre 3 — Art. 57 à 62  
- Recouvrement : Art. 292 à 299  
**Permission requise :** `DECLARATION_IBP_CREATE`

---

## 1. Principe fondamental — Règle du MAXIMUM (Art. 61)

:::danger Règle absolue
SIGFID calcule **les deux impôts** puis applique : **Impôt dû = MAX(IBP, IMF)**

| Situation | Impôt dû | Article |
|-----------|---------|---------|
| Bénéfice et IBP > IMF | **IBP** | Art. 56 |
| Bénéfice mais IBP < IMF | **IMF** | Art. 61 |
| Déficit | **IMF** (IBP = 0) | Art. 61 |
| Entreprise exonérée IBP (Code invest.) | **IMF quand même** | Art. 62-1 |
| Patente < 120 000 FD | **IMF = montant de la patente** | Art. 62-2 |
:::

---

## 2. IBP — Champ d'application

### 2.1 Personnes imposables (Art. 18-21)

- Personnes physiques : bénéfices commerciaux, industriels, artisanaux, libéraux (Art. 19)
- Marchands de biens, intermédiaires immobiliers, lotisseurs (Art. 20)
- Toutes personnes morales à activité lucrative (Art. 21)

### 2.2 Exonérations IBP (Art. 22-24)

| Exonération | Article |
|------------|---------|
| Salles de cinéma | Art. 22-1° |
| Coopératives agricoles | Art. 22-2° |
| Sociétés de commerce de titres | Art. 22-3° |
| Bénéfices réinvestis (Code investissements) | Art. 22-4° |
| Revenus mobiliers | Art. 23 |
| Revenus fonciers (si CFPB/CFPNB déjà imposés) | Art. 24 |

:::warning Exonéré IBP ≠ Exonéré IMF
Les entreprises exonérées d'IBP (Code des investissements, zone franche) restent **redevables de l'IMF** (Art. 62-1).
:::

---

## 3. Détermination du bénéfice imposable (Art. 27-35)

### 3.1 Bénéfice net (Art. 29)

```
Bénéfice fiscal = Résultat comptable + Réintégrations − Déductions − Déficits antérieurs − Abattement CGA
```

*Le contribuable ne saisit PAS le bénéfice fiscal : SIGFID le calcule automatiquement.*

### 3.2 Charges déductibles (Art. 30)

- Frais généraux justifiés par factures avec **NIF valides**
- Dépenses de personnel déclarées ITS et CNSS
  - ⚠️ Si > 5 salariés étrangers : déduction limitée à **20%** des rémunérations (Art. 30-1)
- Amortissements linéaires et dégressifs (barème Art. 30-2)
- Intérêts comptes courants associés (plafonnés, Art. 30-3)
- Impôts et taxes à charge de l'entreprise (sauf IBP, CFPB/CFPNB)
- Provisions pour pertes/charges probables (Art. 30-5)

### 3.3 Charges non déductibles (Art. 32-34)

- Amendes, pénalités, transactions (Art. 32)
- Allocations forfaitaires dirigeants en doublon avec frais réels (Art. 33)
- Dépenses somptuaires : chasse, pêche, résidences de plaisance (Art. 34)

### 3.4 Report de déficit (Art. 31)

Le déficit est reportable sur les **3 exercices suivants** (FIFO). Exception : amortissements comptabilisés en période déficitaire (« amortissements réputés différés » = pas de limite de temps).

:::info Abattement 5% pour les centres de gestion agréés (CGA)
Entreprises adhérant à un CGA, CA < 50M FD, comptabilité conforme, déclarations dans les délais → abattement **5%** sur le résultat fiscal (Art. 55bis).
:::

---

## 4. Régimes d'imposition (Art. 36-51)

### 4.1 Régime simplifié (Art. 36-44)

| Activité | Seuil CA HT |
|---------|------------|
| Ventes de biens, hôtellerie, BTP | < **20 000 000 FD** |
| Prestations de services, professions libérales | < **10 000 000 FD** |

- Comptabilité simplifiée (5 livres, Art. 43)
- Déclaration avant le **1er février** (Art. 42)
- Conservation 5 ans

### 4.2 Régime réel (Art. 45-51)

- Obligatoire au-dessus des seuils ou sur option
- Liasse fiscale complète (bilan, compte de résultat, tableaux amortissements/provisions — Art. 50)
- Déclaration de résultat avant le **1er avril** (Art. 49)
- Conservation **10 ans** (Art. 48)

:::warning Verrou liasse fiscale (régime réel)
SIGFID bloque la validation de la déclaration IBP tant que la liasse fiscale n'est pas intégralement saisie ou téléversée. Sans ce verrou, un comptable pourrait contourner tous les contrôles.
:::

### 4.3 Régime micro-entreprise / TPE (Art. 35-1 à 35-7, LFI 2023)

| Critère | Micro-entreprise | TPE |
|---------|-----------------|-----|
| CA max | ≤ 2 000 000 FD | ≤ 5 000 000 FD |
| Salariés max | 0–5 | 0–10 |
| Exonération IBP/IMF | **3 ans** | **3 ans** |
| Forfait après 3 ans (Djibouti) | **35 000 FD** | **50 000 FD** |

---

## 5. IBP — Taux et calcul (Art. 56)

```
IBP = Bénéfice net imposable × 25%
```
Arrondi : fraction < 1 000 FD négligée.

---

## 6. IMF — Impôt Minimum Forfaitaire (Art. 57-62)

### 6.1 Base et taux (Art. 59-60)

```
IMF = MAX(CA HT exercice E × 1% ; 120 000 FD)
```

- **Base :** chiffre d'affaires HT de **l'exercice en cours de liquidation** (pas l'exercice précédent)
- **Taux :** 1%
- **Minimum absolu :** 120 000 FD
- **Dérogation :** si patente < 120 000 FD → IMF = montant de la patente (Art. 62-2)

:::info IMF non déductible
L'IMF n'est PAS déductible du bénéfice imposable (Art. 57).
:::

---

## 7. Recouvrement et acomptes (Art. 292-299)

### 7.1 Trois acomptes annuels (Art. 293bis-294bis, LFI 2023)

Chaque acompte = **25% de l'impôt effectivement dû (MAX IBP/IMF) de l'exercice N-1** :

| Acompte | Échéance |
|---------|---------|
| 1er acompte | **15 avril** |
| 2ème acompte | **15 août** |
| 3ème acompte | **15 novembre** |

*Dispense : entreprises dont l'impôt N-1 ≤ 120 000 FD (Art. 293bis).*

### 7.2 Entreprises nouvelles (Art. 295bis)

- Personnes physiques : chaque acompte = 1/3 de (IBP calculé sur patente annuelle)
- Sociétés nouvelles : 1/3 de (IBP sur 5% (SA) ou 10% (autres) du capital social appelé)

### 7.3 Solde et liquidation (Art. 299)

| Cas | Action SIGFID |
|-----|--------------|
| Solde > 0 (complément à payer) | Émission d'un **AMR** pour le reliquat |
| Solde < 0 (trop-perçu) | **Crédit d'impôt** imputable sur acomptes futurs ou remboursable |
| Solde = 0 | Compte soldé |

---

## 8. Saisir une déclaration IBP dans SIGFID

1. Cliquez sur **Déclarations → IBP/IMF → Nouvelle déclaration**
2. Sélectionnez le contribuable et l'**exercice** (année civile)
3. Le régime (simplifié/réel/micro) est déterminé automatiquement par SIGFID
4. Saisissez :
   - **CA HT** de l'exercice
   - **Résultat comptable** (bénéfice ou perte)
   - **Réintégrations** : charges non déductibles ligne par ligne (Art. 32-34)
   - **Déductions** : revenus exonérés ligne par ligne (Art. 22-24)
5. SIGFID applique automatiquement les **déficits antérieurs** (FIFO, Art. 31)
6. Si entreprise adhérente CGA : SIGFID applique l'**abattement 5%** (Art. 55bis)
7. SIGFID calcule : **IBP** (25% × bénéfice fiscal) et **IMF** (1% × CA HT, min 120K)
8. SIGFID affiche l'impôt dû : **MAX(IBP, IMF)**
9. Si régime réel : **joignez la liasse fiscale** (VERROU — validation bloquée sans)
10. Cliquez sur **Valider**

La déclaration génère automatiquement les 3 acomptes pour l'exercice suivant.

---

## 9. Scénarios de calcul

### Scénario 1 — Régime simplifié, bénéfice normal
*M. Ahmed, commerce détail, CA HT = 15M FD, Bénéfice net = 2 500 000 FD*

| | Montant (FD) |
|-|-------------|
| IBP = 25% × 2 500 000 | 625 000 |
| IMF = 1% × 15 000 000 | 150 000 |
| Comparaison : IBP (625K) > IMF (150K) | |
| **Impôt dû = IBP** | **625 000** |

### Scénario 2 — Régime réel, bénéfice + acomptes
*SARL DJIBOUTI-TECH, CA HT = 80M FD, Bénéfice = 12M FD, impôt N-1 = 2 800 000 FD*

| | Montant (FD) |
|-|-------------|
| IBP = 25% × 12M | 3 000 000 |
| IMF = 1% × 80M | 800 000 |
| IBP > IMF → IBP applicable | 3 000 000 |
| 3 acomptes versés (3 × 25% × 2 800 000) | −2 100 000 |
| **Solde à payer** | **900 000** |

### Scénario 3 — Déficit → IMF applicable
*SARL ALPHA, CA HT = 50M FD, Déficit = −3 000 000 FD*

| | Montant (FD) |
|-|-------------|
| IBP (déficit → 0) | 0 |
| IMF = 1% × 50M | 500 000 |
| Déficit → IMF applicable (Art. 61) | |
| **Impôt dû = IMF** | **500 000** |
| Déficit reportable sur N+1 à N+3 | −3 000 000 |

### Scénario 4 — Bénéfice faible, IMF > IBP
*M. Moussa, CA HT = 18M FD, Bénéfice = 500 000 FD*

| | Montant (FD) |
|-|-------------|
| IBP = 25% × 500 000 | 125 000 |
| IMF = 1% × 18M | 180 000 |
| IMF (180K) > IBP (125K) | |
| **Impôt dû = IMF** | **180 000** |

### Scénario 5 — Report de déficit sur 3 ans
*SARL BETA : Déficit N = −5M FD, Bénéfice N+1 = 2M, N+2 = 4M*

| | Année N+1 | Année N+2 |
|-|----------|----------|
| Bénéfice brut | 2 000 000 | 4 000 000 |
| Déficit reporté (N) | −2 000 000 | −3 000 000 |
| Base imposable | 0 | 1 000 000 |
| IBP (25%) | 0 | 250 000 |
| IMF dû quand même | 1% × CA | 1% × CA |

*IMF s'applique même quand le bénéfice après report est 0.*

### Scénario 6 — Déclaration néant (entreprise en sommeil)
*Société OMEGA, NIF actif, aucune activité, patente = 84 000 FD, CA = 0*

| | Montant (FD) |
|-|-------------|
| IBP = 25% × 0 | 0 |
| IMF théorique = 1% × 0 | 0 |
| Plancher IMF (Art. 60) | 120 000 |
| Test Art. 62-2 : patente (84K) < 120K ? | OUI |
| Dérogation : IMF = patente | 84 000 |
| **Impôt dû = IMF dérogatoire** | **84 000** |

### Scénario 7 — Pénalités (défaut de déclaration)
*SARL GAMMA, IBP dû = 1M FD, déclaration non déposée au 1er avril, déposée 3 mois après (dans les 10j de la MED)*

| Composante | Montant (FD) |
|-----------|-------------|
| IBP dû | 1 000 000 |
| Intérêt retard (5%/mois × 3) | 150 000 |
| Majoration 10% (Art. 246) | 100 000 |
| **Total dû au Trésor** | **1 250 000** |

---

## 10. Pénalités (Art. 246-250)

| Infraction | Pénalité | Article |
|-----------|---------|---------|
| Non-dépôt déclaration | 5%/mois + 10% (dans 10j de la MED) ou 40% (au-delà de 20j) | Art. 246 |
| Retard de paiement | 0,5%/mois + 5% | Art. 247 |
| Insuffisance bonne foi | 1%/mois de retard | Art. 248 |
| Défaut retenue RAS | 100% des retenues | Art. 249 |
| Mauvaise foi / fraude | 40% à 80% des droits | Art. 250 |
