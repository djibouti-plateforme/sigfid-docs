---
sidebar_position: 7
title: RAS PS — Retenue à la Source sur Prestations
---

# Retenue à la Source sur les Prestations de Services (RAS PS)

**Référence CGI :** Livre 1, Titre 4, Chapitre 4 — Art. 298  
**Permission requise :** `DECLARATION_RAS_CREATE`  
**Taux :** 10% — Acompte d'IBP (non libératoire)

---

## 1. Principe et objectif (Art. 298)

La RAS PS cible les **prestataires locaux opérant sans NIF**. Son objectif est de fiscaliser le secteur informel en faisant du **client** le collecteur de l'impôt.

:::info RAS PS = Acompte IBP
La RAS PS n'est PAS un impôt définitif. C'est un **acompte d'IBP** pour le prestataire. Si ce dernier s'immatricule et dépose sa déclaration IBP, il peut **imputer la RAS sur son impôt dû** (Art. 298, 299).
:::

### Comparaison des retenues à la source

| Retenue | Prestataire ciblé | Taux | Nature |
|---------|------------------|------|--------|
| ITS | Salarié (lien subordination) | Barème 8 tranches | Impôt définitif |
| IRNR | Non-résident (étranger) | 25% | Libératoire |
| **RAS PS** | **Local SANS NIF** | **10%** | **Acompte IBP** |
| RAS Loyers | Bailleur local | 8% | Acompte CFPB |

---

## 2. Champ d'application (Art. 298)

### Prestataires soumis à la retenue

Toute personne physique ou morale djiboutienne fournissant des prestations de services **sans NIF valide** à :
- Administrations publiques et établissements publics
- Entreprises assujetties à la TVA
- Sociétés soumises à l'IBP régime réel

### Prestataires exclus

- Prestataires avec **NIF valide** → pas de RAS PS (mais vérification TVA)
- Banques, assurances, hôtels, compagnies aériennes (leurs activités sont soumises à d'autres régimes)
- Ventes de biens (la RAS ne s'applique qu'aux **services**)

---

## 3. Base, taux et fait générateur

```
RAS PS = Montant brut HT de la prestation × 10%
```

- **Fait générateur :** date du paiement (ou date de la facture si antérieure)
- **Reversement au Trésor :** avant le 15 du mois suivant

---

## 4. Saisir une déclaration RAS PS dans SIGFID

1. Cliquez sur **Déclarations → RAS PS → Nouvelle déclaration**
2. Sélectionnez le **client** (entité qui opère la retenue)
3. Pour chaque prestataire sans NIF :
   - Identité du prestataire
   - Nature de la prestation
   - Montant brut HT
   - SIGFID calcule RAS = montant × 10%
4. SIGFID génère une **quittance** pour chaque prestataire (preuve d'acompte IBP)
5. Validez et reversez au Trésor

---

## 5. Scénarios

### Scénario 1 — Prestation classique sans NIF
*Administration paie un plombier informel 500 000 FD HT*

| | Montant (FD) |
|-|-------------|
| Montant brut HT | 500 000 |
| RAS PS = 10% | **50 000** |
| Versé au plombier | 450 000 |
| Reversé au Trésor | 50 000 |

### Scénario 2 — Prestataire avec NIF valide
*Entreprise avec NIF = pas de RAS PS*

→ Pas de retenue. La TVA sur la facture est collectée normalement.

### Scénario 3 — Imputation RAS sur IBP
*Plombier informel s'immatricule, RAS accumulées = 400 000 FD, IBP dû = 750 000 FD*

| | Montant (FD) |
|-|-------------|
| IBP brut dû | 750 000 |
| RAS PS imputées (quittances) | −400 000 |
| **Solde IBP à payer** | **350 000** |

---

## 6. Pénalités (Art. 249)

| Infraction | Pénalité |
|-----------|---------|
| Défaut de retenue | **100% du montant non retenu** |
