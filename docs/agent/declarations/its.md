---
sidebar_position: 1
title: Déclaration ITS
---

# Impôt sur les Traitements et Salaires (ITS)

**Référence CGI :** Livre 1, Titre 1, Chapitre 1 — Art. 1 à 17  
**Permission requise :** `DECLARATION_ITS_CREATE`

## Présentation

L'ITS est un impôt **prélevé à la source** par l'employeur sur les rémunérations versées chaque mois. L'employeur est le redevable légal (Art. 285). SIGFID gère à la fois le calcul individuel par salarié et l'obligation de versement global.

## Champ d'application (Art. 1-3)

Sont imposables toutes les rémunérations versées à des personnes physiques dans le cadre d'une relation de travail :
- Traitements, salaires, indemnités, primes, gratifications
- Allocations forfaitaires pour frais professionnels
- Avantages en nature et en espèces
- Pensions et allocations viagères

## Exonérations (Art. 4-5)

- Personnel diplomatique en poste à Djibouti
- Pensions de retraite
- Coopérants de l'assistance technique française
- **Salaire imposable mensuel ≤ 50 000 FD** (après déductions, Art. 6)

:::warning Seuil d'exonération
Le seuil de 50 000 FD s'applique au salaire **imposable** (après déduction CNSS/pension), pas au salaire brut. Exemple : salaire brut 53 000 FD − 3 500 FD CNSS = 49 500 FD imposable → **exonéré**.
:::

## Calcul de la base imposable (Art. 6, 9)

La base imposable mensuelle = Salaire brut − Cotisations CNSS − Cotisations retraite

### Déductions obligatoires
- Cotisations CNSS (part salariale)
- Cotisations de retraite obligatoires

### Avantages en nature (Art. 17)
Les avantages en nature sont évalués à leur valeur réelle et intégrés dans la base imposable.

## Barème progressif (Art. 15)

| Tranche mensuelle | Taux |
|-------------------|------|
| 0 — 50 000 FD | 0 % |
| 50 001 — 150 000 FD | 9 % |
| 150 001 — 300 000 FD | 14 % |
| 300 001 — 500 000 FD | 19 % |
| 500 001 — 900 000 FD | 24 % |
| 900 001 — 1 500 000 FD | 29 % |
| 1 500 001 — 3 000 000 FD | 34 % |
| > 3 000 000 FD | 39 % |

### Taux forfaitaire (Art. 16)
Pour les emplois temporaires (< 1 mois), un taux forfaitaire de **20 %** s'applique sur le salaire brut.

### Arrondi (Art. 14)
L'impôt calculé est arrondi à la dizaine de francs inférieure.

## Saisir une déclaration ITS

1. Dans la barre latérale, cliquez sur **Déclarations → ITS**
2. Sélectionnez le contribuable (employeur)
3. Sélectionnez la **période** (mois/année)
4. Saisissez pour chaque salarié : nom, salaire brut, cotisations
5. SIGFID calcule automatiquement l'ITS par salarié et le total à verser
6. Cliquez sur **Valider la déclaration**

La déclaration validée génère automatiquement une dette dans le compte impôts.

## Pénalités (Art. 246-249)

| Infraction | Pénalité |
|-----------|---------|
| Défaut de retenue (Art. 249) | 100 % de l'impôt non retenu |
| Défaut de déclaration (Art. 246) | 25 % + intérêts de retard |
| Retard de paiement (Art. 247) | 1,5 % par mois de retard |
| Insuffisance de déclaration (Art. 248) | 50 % du complément dû |

## Échéances de versement (Art. 287)

| Situation | Échéance |
|-----------|---------|
| Employeur général | 15 du mois suivant |
| Administration publique | 15 du mois suivant |
| Déclaration néant | Obligatoire même si aucun salarié |
