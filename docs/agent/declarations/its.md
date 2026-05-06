---
sidebar_position: 1
title: ITS — Impôt sur les Traitements et Salaires
---

# Impôt sur les Traitements et Salaires (ITS)

**Référence CGI :** Livre 1, Titre 1, Chapitre 1 — Art. 1 à 17 + Art. 285 à 291  
**Permission requise :** `DECLARATION_ITS_CREATE`  
**Nature :** Impôt déclaratif, retenu à la source par l'employeur, sans émission de rôle (Art. 285)

---

## 1. Champ d'application

### 1.1 Revenus imposables (Art. 1-3)

Sont imposables toutes rémunérations versées à des personnes physiques dans le cadre d'une relation de travail :
- Traitements, salaires, indemnités, primes, allocations, gratifications, salaires de congé
- Allocations et indemnités forfaitaires pour frais professionnels
- Pourboires
- Pensions et allocations viagères (en contrepartie d'une période de travail)
- Avantages en nature et en espèces

### 1.2 Personnes et revenus exonérés (Art. 4)

- Personnel diplomatique en poste à Djibouti
- Pensions de retraite
- Coopérants de l'assistance technique française
- **Personnes dont le salaire imposable mensuel ≤ 50 000 FD** (après déductions CNSS/pension)

:::warning Seuil d'exonération
Le seuil de 50 000 FD s'applique au salaire **imposable** (après déductions), pas au salaire brut.
**Exemple :** Brut 53 000 FD − CNSS 3 500 FD = imposable 49 500 FD → **exonéré**.
:::

### 1.3 Revenus accessoires exonérés (Art. 5)

- Allocations familiales, restitutions de retenues de pension
- Remboursements de frais professionnels sur justificatifs
- Pensions alimentaires et d'invalidité
- Revenus réinvestis (Code des investissements)
- **Indemnités de départ : abattement de 1 500 000 FD** (LFI 2022)

---

## 2. Calcul de la base imposable

### 2.1 Formule (Art. 6, 9)

```
Base imposable = Salaire brut cash + Avantages en nature − Déduction CNSS − Retenues pension
Déduction CNSS = MIN(Brut cash ; Plafond CNSS 400 000 FD) × Taux CNSS (6%)
```

:::info Plafond CNSS
La cotisation CNSS salariale est plafonnée à 400 000 FD/mois. La déduction maximale est donc 24 000 FD (400 000 × 6%), même pour un salaire de 800 000 FD.
:::

### 2.2 Avantages en nature (Art. 17)

| Avantage | Évaluation |
|----------|-----------|
| Logement de fonction | Valeur locative réelle ou cadastrale, diminuée de la part payée par le salarié |
| Véhicule de fonction | **Forfait 40 000 FD/mois** par véhicule et par bénéficiaire |
| Frais personnels | Montant réel (téléphone, électricité, eau) |
| Frais domestiques | Salaire réellement versé ou SMIC légal, par employé |

### 2.3 Rappels de salaires (Art. 10)

Les rappels sont incorporés dans le mois de versement. Si le rappel dépasse **50% du revenu mensuel imposable**, le salarié peut opter pour l'incorporation rétroactive (recalcul mois par mois).

### 2.4 Avances (Art. 11)

Les avances ne sont **pas** une rémunération imposable. Les remboursements d'avances sont réintégrés dans le revenu imposable.

### 2.5 Arrondi (Art. 14)

Toute fraction de base inférieure à **5 000 FD est négligée** (arrondi au multiple de 5 000 FD inférieur).

---

## 3. Barème progressif (Art. 15, LFI 2021/2022)

S'applique aux salaires imposables **supérieurs à 50 000 FD** :

| Tranche de revenu mensuel | Taux | Impôt sur la tranche | Cumulé max |
|---------------------------|------|---------------------|------------|
| 0 — 30 000 FD | 2% | 600 | 600 |
| 30 001 — 50 000 FD | 12% | 2 400 | 3 000 |
| 50 001 — 150 000 FD | 15% | 15 000 | 18 000 |
| 150 001 — 300 000 FD | 22% | 33 000 | 51 000 |
| 300 001 — 600 000 FD | 25% | 75 000 | 126 000 |
| 600 001 — 1 000 000 FD | 30% | 120 000 | 246 000 |
| 1 000 001 — 2 000 000 FD | 35% | 350 000 | 596 000 |
| Au-delà de 2 000 001 FD | 45% | — | — |

:::warning Interaction exonération / barème
Les salaires ≤ 50 000 FD sont TOTALEMENT exonérés (Art. 4). Pour les salaires > 50 000 FD, le barème s'applique **dès le premier franc** (les tranches 1 et 2 à 2% et 12% s'appliquent bien). Tester le seuil EN PREMIER, puis appliquer le barème complet si dépassé.
:::

### Taux forfaitaire emploi < 1 mois (Art. 16)

Pour les rémunérations > 50 000 FD versées à des personnes employées **moins d'un mois civil** : taux forfaitaire minimal de **15%** sur la totalité de la rémunération.

:::tip Règle du plus favorable pour l'État
SIGFID calcule les deux résultats (barème et forfait 15%) et retient le **plus élevé**. Pour des rémunérations très élevées (> 600 000 FD environ), le barème progressif dépassera les 15%.
:::

---

## 4. Scénarios de calcul

### Scénario 1 — Salaire exonéré (≤ 50 000 FD)
*M. Ibrahim, employé de commerce, brut mensuel = 48 000 FD*

| Composante | Montant (FD) |
|-----------|-------------|
| Salaire brut mensuel | 48 000 |
| CNSS salariale (6%) | −2 880 |
| Base imposable | 45 120 |
| Arrondi (Art. 14) | **45 000** |
| Test seuil Art. 4 : 45 000 ≤ 50 000 | **EXONÉRÉ** |
| **ITS dû** | **0** |

### Scénario 2 — Salaire moyen (200 000 FD)
*Mme Fatima, comptable, brut mensuel = 200 000 FD*

| Composante | Montant (FD) |
|-----------|-------------|
| Salaire brut | 200 000 |
| CNSS (6%) | −12 000 |
| Base imposable | 188 000 |
| Arrondi → | 185 000 |
| Tranche 0–30 000 × 2% | 600 |
| Tranche 30 001–50 000 × 12% | 2 400 |
| Tranche 50 001–150 000 × 15% | 15 000 |
| Tranche 150 001–185 000 × 22% | 7 700 |
| **ITS dû mensuel** | **25 700** |

*Taux effectif : 25 700 / 188 000 = 13,67%*

### Scénario 3 — Salaire élevé (800 000 FD)
*M. Ahmed, directeur technique, brut = 800 000 FD*

| Composante | Montant (FD) |
|-----------|-------------|
| Salaire brut | 800 000 |
| CNSS (6% × plafond 400 000) | −24 000 |
| Base imposable | 776 000 |
| Arrondi → | 775 000 |
| Tranches 0–600 000 | 126 000 |
| Tranche 600 001–775 000 × 30% | 52 500 |
| **ITS dû mensuel** | **178 500** |

*Taux effectif : 23,00%*

### Scénario 4 — Très haut salaire + avantages en nature
*M. Youssouf, DG, brut cash = 1 500 000 FD + véhicule + logement (loyer réel 150 000 FD)*

| Composante | Montant (FD) |
|-----------|-------------|
| Salaire brut cash | 1 500 000 |
| Avantage véhicule (forfait Art. 17) | +40 000 |
| Avantage logement (loyer réel Art. 17) | +150 000 |
| Total rémunération brute | 1 690 000 |
| CNSS (6% × plafond 400 000, sur brut cash) | −24 000 |
| Base imposable | 1 666 000 |
| Arrondi → | 1 665 000 |
| Tranches 0–1 000 000 | 246 000 |
| Tranche 1 000 001–1 665 000 × 35% | 232 750 |
| **ITS dû mensuel** | **478 750** |

*Taux effectif : 28,74%*

### Scénario 5 — Emploi temporaire < 1 mois (Art. 16)
*M. Omar, consultant 12 jours, rémunération = 180 000 FD*

| Option | Calcul | Résultat |
|--------|--------|---------|
| **A — Forfait 15%** | 15% × 180 000 | 27 000 |
| **B — Barème progressif** | Tranches jusqu'à 180 000 | 24 600 |
| **ITS dû = MAX(A, B)** | | **27 000** |

### Scénario 6 — Employeurs multiples (Art. 290)
*Mme Sahra : Employeur A 250 000 FD, Employeur B 150 000 FD*

- Employeur A retient indépendamment sur base 235 000 FD : **ITS = 36 700 FD**
- Employeur B retient indépendamment sur base 140 000 FD : **ITS = 16 500 FD**
- Total retenu par les employeurs : **53 200 FD**
- ITS sur base cumulée (375 000 FD) : **69 750 FD**
- **Complément dû par Mme Sahra à la DGI : 16 550 FD**

### Scénario 7 — Indemnité de départ (Art. 5-5°)
*M. Hassan, indemnité de départ = 3 000 000 FD*

| Composante | Montant (FD) |
|-----------|-------------|
| Indemnité brute | 3 000 000 |
| Abattement (Art. 5-5°, LFI 2022) | −1 500 000 |
| Indemnité imposable | 1 500 000 |
| ITS sur barème (tranches 1–7) | 421 000 |
| **ITS dû sur indemnité** | **421 000** |

*Note : calculé séparément du salaire du dernier mois.*

---

## 5. Obligations de l'employeur

### 5.1 Déclaration nominative (Art. 289)

Chaque versement est accompagné d'une déclaration comportant :
- Période concernée, NIF et adresse de l'employeur
- État nominatif des salariés : rémunération brute, cotisations, base imposable, ITS dû
- Totaux : rémunérations brutes, cotisations, bases imposables, ITS global

### 5.2 Déclaration Néant obligatoire

Tout employeur actif (NIF valide + patente en cours) doit déposer une déclaration ITS **chaque mois**, même en l'absence de salaires versés.

### 5.3 Échéances de versement (Art. 287, LFI 2024)

| Situation | Échéance | Seuil |
|-----------|---------|-------|
| Régime mensuel (règle générale) | Avant le **10** du mois M+1 | ITS > 50 000 FD/mois |
| Régime trimestriel | Avant le **15** du mois M+1 | ITS ≤ 50 000 FD/mois |
| Cessation d'entreprise (Art. 288) | **Immédiatement** | Quel que soit le montant |
| Décès de l'employeur | **15 jours** après décès | Quel que soit le montant |

### 5.4 Conservation des registres (Art. 286)

Conservation **10 ans** obligatoire. Les retenues, même irrégulières, sont dues au Trésor. Les salariés sont **solidairement responsables** avec l'employeur.

---

## 6. Saisir une déclaration ITS dans SIGFID

1. Dans sigfid-agent, cliquez sur **Déclarations → ITS**
2. Cliquez sur **Nouvelle déclaration**
3. Recherchez et sélectionnez l'**employeur** (par NIF ou raison sociale)
4. Sélectionnez la **période** (mois/année)
5. Renseignez pour **chaque salarié** :
   - Nom, prénom, NIF salarié
   - Salaire brut cash
   - Avantages en nature (logement, véhicule, autres)
   - Cotisations CNSS et pension
   - Type d'emploi (régulier ou < 1 mois)
6. SIGFID calcule **automatiquement** pour chaque salarié : base imposable, ITS dû
7. Vérifiez le récapitulatif : total ITS à reverser
8. Si aucun salarié ce mois : cochez **Déclaration Néant**
9. Cliquez sur **Valider la déclaration**

La déclaration validée génère automatiquement une **dette** dans le compte impôts de l'employeur.

---

## 7. Pénalités (Art. 246-249)

| Infraction | Pénalité | Article |
|-----------|---------|---------|
| Défaut de retenue à la source | **100% des retenues manquées** | Art. 249 |
| Non-dépôt de déclaration | 5%/mois + 10% (10 j. après MED) ou 40% | Art. 246 |
| Retard de paiement | 0,5%/mois + 5% | Art. 247 |
| Insuffisance de déclaration (bonne foi) | 1%/mois | Art. 248 |
| Mauvaise foi / fraude | 40% à 80% des droits | Art. 250 |

:::danger Pénalité la plus lourde
Art. 249 : Un employeur qui omet de retenir 50 000 FD d'ITS paie 50 000 + 50 000 = **100 000 FD** au Trésor. SIGFID calcule cette amende automatiquement.
:::

### Exemple de calcul de pénalités (Scénario 9)
*Société ABC, aucune retenue pendant 3 mois, ITS non retenu = 450 000 FD*

| Composante | Montant (FD) |
|-----------|-------------|
| ITS non retenu (3 mois) | 450 000 |
| Amende Art. 249 (100%) | 450 000 |
| Intérêt retard (0,5% × 3 mois) | 6 750 |
| Majoration 5% (Art. 247) | 22 500 |
| **TOTAL dû au Trésor** | **929 250** |
