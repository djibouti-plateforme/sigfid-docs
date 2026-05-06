---
sidebar_position: 8
title: Autres impôts déclaratifs
---

# Autres impôts déclaratifs

## IIS — Impôt d'Incitation Sociale (Art. 78-86)

**Référence CGI :** Livre 1, Titre 1, Chapitre 6  
**Permission requise :** `DECLARATION_IIS_CREATE`

L'IIS frappe les revenus de placements financiers perçus par certains **établissements publics** (EPA et établissements à vocation sociale). Il s'applique aux placements à revenu fixe et variable.

**Règle d'exclusion mutuelle (Art. 86) :** Un établissement ne peut être soumis à la fois à l'IIS et à l'IGS (Impôt sur les Grosses Sociétés).

**Workflow dans SIGFID :**
1. Cliquez sur **Déclarations → IIS**
2. Sélectionnez l'établissement public assujetti
3. Saisissez les revenus de placements du trimestre
4. SIGFID calcule l'IIS selon les taux applicables
5. Validez

---

## IPVI — Impôt sur les Plus-Values Immobilières (Art. 63-69)

**Référence CGI :** Livre 1, Titre 1, Chapitre 4  
**Permission requise :** `DECLARATION_IPVI_CREATE`

### Champ d'application (Art. 65)

- Cessions de terrains, constructions, droits réels immobiliers
- Échanges d'immeubles
- Apports en société d'immeubles

### Calcul de la plus-value imposable (Art. 68)

```
Plus-value nette = Prix de cession − Prix de revient (prix d'acquisition + frais)
IPVI = Plus-value nette × Taux applicable
```

### Exonérations (Art. 66)

- Cession de la résidence principale (sous conditions)
- Plus-values inférieures au seuil réglementaire
- Cessions dans le cadre de l'expropriation pour utilité publique

**Workflow dans SIGFID :**
1. Cliquez sur **Déclarations → IPVI**
2. Sélectionnez le contribuable (cédant)
3. Renseignez : nature du bien, prix d'acquisition, date d'acquisition, prix de cession, frais
4. SIGFID calcule la plus-value et l'impôt
5. Joignez l'acte de cession
6. Validez

---

## IPVM — Impôt sur les Plus-Values Mobilières

**Référence CGI :** Livre 1, Titre 1, Chapitre 4 (variante mobilière)  
**Permission requise :** `DECLARATION_IPVM_CREATE`

S'applique aux plus-values réalisées lors de la cession de valeurs mobilières (actions, obligations, parts sociales).

**Workflow dans SIGFID :**
1. Cliquez sur **Déclarations → IPVM**
2. Sélectionnez le contribuable
3. Renseignez les cessions de l'exercice (date, nature, prix d'achat, prix de vente)
4. SIGFID calcule la plus-value nette et l'impôt
5. Validez

---

## IRVM — Impôt sur les Revenus des Valeurs Mobilières (Art. 90F-90N)

**Référence CGI :** Livre 1, Titre 1, Chapitre 9  
**Permission requise :** `DECLARATION_IRVM_CREATE`  
**Nature :** Retenue à la source sur dividendes distribués

### Taux (Art. 90K-90L)

L'IRVM s'applique aux dividendes distribués par les sociétés.

### Exonération (Art. 90H)

Dividendes distribués < **10 000 000 FD** par an → exonérés d'IRVM.

### Obligations (Art. 90M)

La société distributrice opère la retenue et la reverse à la DGI dans les **15 jours** suivant la distribution, avec :
- Un bordereau de versement
- Un état nominatif des bénéficiaires

**Workflow dans SIGFID :**
1. Cliquez sur **Déclarations → IRVM**
2. Sélectionnez la société distributrice
3. Renseignez le montant total des dividendes distribués
4. Saisissez l'état nominatif des actionnaires bénéficiaires
5. SIGFID calcule l'IRVM et vérifie le seuil d'exonération (10M FD)
6. Validez dans les 15 jours de la distribution

---

## TBA — Taxe sur les Billets d'Avion (Art. 90A-90E)

**Référence CGI :** Livre 1, Titre 1, Chapitre 8  
**Permission requise :** `DECLARATION_TBA_CREATE`  
**Redevable :** Compagnies aériennes et agences de voyage

### Champ d'application (Art. 90A)

Tout billet d'avion au départ de Djibouti (quelle que soit la nationalité du passager ou le lieu d'émission du billet).

### Tarification (Art. 90D)

Les tarifs sont fixés par destination (internationale ou régionale) et configurés dans les paramètres fiscaux SIGFID.

### Obligations (Art. 90E)

- Déclaration **mensuelle** par la compagnie aérienne ou l'agence
- Reversement avant le **20 du mois suivant**

**Workflow dans SIGFID :**
1. Cliquez sur **Déclarations → TBA**
2. Sélectionnez la compagnie aérienne ou l'agence
3. Saisissez le nombre de billets émis par destination pour le mois
4. SIGFID calcule la TBA = nombre de billets × tarif par destination
5. Validez avant le 20 du mois suivant
