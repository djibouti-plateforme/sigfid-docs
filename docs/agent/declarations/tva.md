---
sidebar_position: 2
title: TVA — Taxe sur la Valeur Ajoutée
---

# Taxe sur la Valeur Ajoutée (TVA)

**Référence CGI :** Livre 1, Titre 3, Chapitre 1 — Art. 171 à 211 + Art. 260 à 265  
**Permission requise :** `DECLARATION_TVA_CREATE`  
**Nature :** Impôt déclaratif mensuel — reversement avant le **20 du mois suivant** (Art. 207)

---

## 1. Champ d'application (Art. 171-172)

### 1.1 Opérations imposables

- Importations (franchissement du cordon douanier)
- Livraisons de biens (ventes, échanges, apports)
- Prestations de services
- Travaux immobiliers
- Livraisons à soi-même
- Subventions à caractère commercial
- Produits pétroliers (hors revente au détail par stations-service)

### 1.2 Seuils d'assujettissement (Art. 174, LFI 2022)

| Type d'activité | Seuil CA annuel HT |
|----------------|-------------------|
| Livraisons de biens, prestations à consommer sur place, BTP | **20 000 000 FD** |
| Autres activités (services, professions libérales, hôtellerie sans vente sur place) | **10 000 000 FD** |

:::info Seuil proratisé
En cas de création en cours d'année, le CA est ajusté au prorata. SIGFID vérifie le seuil annuellement et déclenche ou retire l'assujettissement automatiquement (Art. 175).
:::

---

## 2. Exonérations (Art. 176) — 17 catégories principales

| N° | Opération exonérée |
|----|-------------------|
| 1° | Ventes directes par agriculteurs/éleveurs/pêcheurs (produits non transformés) |
| 2° | Opérations bancaires (sauf commissions, LFI 2025), assurance, transmission immobilier |
| 3° | Journaux et périodiques (sauf publicité) |
| 4–6° | Éducation agréée, santé agréée, associations |
| 7–8° | Services administratifs/éducatifs/sociaux de l'État |
| 9–10° | Manuels scolaires, livres |
| 11–13° | Eau potable (30 premiers m³), électricité tranche sociale, pétrole lampant, carburants stations |
| 14–15° | Importations (accords internationaux), marchés publics financement extérieur |
| 16° | Transports internationaux aériens, maritimes, terrestres |
| 17° | Importations promoteurs immobiliers sociaux (LFI 2017) |

:::danger Exonération ≠ Taux zéro
- **Opérations exonérées (Art. 176)** → PAS de droit à déduction de la TVA amont
- **Opérations au taux 0% (exportations, Art. 187-2)** → CONSERVENT le droit à déduction

SIGFID distingue ces deux régimes. Une erreur de classement peut générer des déductions fictives.
:::

---

## 3. Taux applicables (Art. 187)

| Taux | Valeur | Application |
|------|--------|-------------|
| **Taux normal** | **10%** | Toutes opérations taxables |
| **Taux zéro** | **0%** | Exportations, commerce international, marchés publics extérieurs |

---

## 4. Base d'imposition (Art. 184-186)

- **Importations :** valeur en douane + droits et taxes (hors TVA)
- **Livraisons :** prix de vente au client
- **Travaux immobiliers :** montant des mémoires/factures
- **Prestations :** prix des services
- **Agences de voyages :** imposition sur la **marge**

*Inclus dans la base :* impôts et taxes (sauf TVA), frais accessoires, subventions-prix  
*Exclus :* escomptes, remises, consignations

---

## 5. Régime des déductions (Art. 188-204)

### 5.1 Principe général

La TVA ayant grevé les achats est déductible de la TVA collectée **le même mois**. Conditions :
- Biens/services nécessaires à l'exploitation
- TVA figurant sur factures valides ou documents douaniers
- **NIF fournisseur obligatoire** sur chaque facture (Art. 208-210)

### 5.2 Exclusions du droit à déduction (Art. 190-191)

- Dépenses de logement, hébergement, restauration, réception, spectacles (Art. 190-a)
- Biens cédés gratuitement ou à prix anormal (Art. 190-c)
- Produits pétroliers (sauf importateurs ou production électricité EDD) (Art. 190-e)
- Véhicules de transport de personnes, sauf flottes ≥ 8 places ou entreprises de location (Art. 191)

### 5.3 Prorata de déduction — Activité mixte (Art. 192)

Pour les entreprises exerçant à la fois des activités taxables et exonérées :

```
Prorata = CA taxable / CA total
TVA déductible (frais généraux) = TVA totale × Prorata
```

Le prorata est déterminé provisoirement sur N-1, **régularisé en janvier N+1**.

### 5.4 Crédit de TVA et remboursement (Art. 195-204)

Si TVA déductible > TVA collectée → **crédit de TVA**, reportable sur les mois suivants.

**Remboursement possible :**
- Annuel si crédit ≥ **50 000 FD** (Art. 196-1)
- Trimestriel si crédit ≥ **200 000 FD** et crédit continu (Art. 196-2)
- Conditions : investissement immobilisé, ou exportation, ou services liés à l'export (Art. 196-3)

*L'administration dispose de 20 jours pour répondre (Art. 199).*

---

## 6. Saisir une déclaration TVA dans SIGFID

La déclaration TVA est mensuelle. Formulaire SIGFID :

| Bloc | Champ | Règle |
|------|-------|-------|
| Assujetti | NIF + raison sociale | Obligatoire |
| Période | Mois + Année | Obligatoire |
| CA HT taxable (10%) | Montant | Obligatoire |
| CA HT taux zéro (0%) | Montant | Obligatoire |
| CA exonéré | Montant | Obligatoire |
| TVA collectée | Calculé auto (CA taxable × 10%) | Lecture seule |
| TVA déductible import | Montant (docs douane) | Obligatoire |
| TVA déductible achats locaux | Montant (factures NIF valide) | Obligatoire |
| TVA déductible immobilisations | Montant | Obligatoire |
| Prorata applicable | Calculé auto si activité mixte | Auto |
| TVA déductible totale | Calculé auto | Lecture seule |
| TVA due / Crédit | Calculé auto (collectée − déductible) | Lecture seule |
| Crédit antérieur reporté | Report N−1 | Lecture seule |
| **Solde à payer / Crédit à reporter** | **Calculé auto** | **Lecture seule** |

**Étapes dans SIGFID :**
1. Cliquez sur **Déclarations → TVA → Nouvelle déclaration**
2. Sélectionnez le contribuable et la période
3. Saisissez les montants HT par catégorie (taxable, taux zéro, exonéré)
4. Importez les factures d'achats avec NIF fournisseurs
5. SIGFID calcule TVA collectée, déductible et solde
6. Si crédit : SIGFID propose le report ou la demande de remboursement
7. Si aucune opération : cochez **Déclaration Néant**
8. Cliquez sur **Valider**

:::warning Déclaration néant obligatoire
Même sans opération, l'assujetti doit déposer une déclaration néant. SIGFID génère une alerte si un assujetti actif n'a pas déposé de déclaration au 20 du mois.
:::

:::info Déclencheur automatique J+21
SIGFID exécute automatiquement un traitement le 21 de chaque mois : identifie les assujettis sans déclaration, applique la pénalité de retard (5%/mois, minimum 50 000 FD), édite un AMR et notifie l'agent responsable.
:::

---

## 7. Fait générateur et exigibilité (Art. 182-183)

| Opération | Fait générateur | Exigibilité |
|-----------|----------------|------------|
| Ventes / échanges | Livraison | Livraison |
| Importations | Mise à la consommation | Déclaration douane |
| Prestations de services | Exécution du service | **Encaissement du prix** |
| Travaux immobiliers | Exécution des travaux | Encaissement / mémoires |
| Livraison à soi-même | Première utilisation | Première utilisation |

---

## 8. Scénarios de calcul

### Scénario 1 — Vente de marchandises (taux normal)
*Commerce, CA HT = 5 000 000 FD, achats HT = 3 000 000 FD*

| Composante | Montant (FD) |
|-----------|-------------|
| TVA collectée (10% × 5M) | 500 000 |
| TVA déductible (achats) | 300 000 |
| **TVA à reverser** | **200 000** |

### Scénario 2 — Prestation de services
*Cabinet de conseil, CA HT = 2 000 000 FD, charges TVA déductibles = 80 000 FD*

| Composante | Montant (FD) |
|-----------|-------------|
| TVA collectée (10% × 2M) | 200 000 |
| TVA déductible | 80 000 |
| **TVA due** | **120 000** |

### Scénario 3 — Importation + revente locale
*Valeur douane 10M FD, droits 2M FD, revente locale 15M FD HT*

| Composante | Montant (FD) |
|-----------|-------------|
| TVA import = 10% × (10M + 2M) | 1 200 000 |
| TVA collectée revente (10% × 15M) | 1 500 000 |
| TVA déductible (import) | 1 200 000 |
| **TVA due** | **300 000** |

### Scénario 4 — Exportation (taux 0%)
*Export 8M FD, TVA déductible achats = 400 000 FD*

| Composante | Montant (FD) |
|-----------|-------------|
| CA export (taux 0%) | 8 000 000 |
| TVA collectée | 0 |
| TVA déductible (achats) | 400 000 |
| **Crédit de TVA** | **400 000** |
| Remboursement possible (Art. 196) | OUI — crédit ≥ 50 000 FD |

### Scénario 5 — Opération exonérée (hôpital agréé)
*Hôpital privé agréé (Art. 176-6°), CA = 20M FD, achats avec TVA = 500 000 FD*

| Composante | Montant (FD) |
|-----------|-------------|
| CA exonéré | 20 000 000 |
| TVA collectée | 0 |
| TVA déductible | **0** (pas de droit) |
| TVA sur achats | **Charge définitive pour l'hôpital** |

### Scénario 6 — Crédit de TVA (investissement lourd)
*Achat machine 50M HT (TVA = 5M FD), ventes du mois = 10M HT*

| Composante | Montant (FD) |
|-----------|-------------|
| TVA collectée (10% × 10M) | 1 000 000 |
| TVA déductible (machine) | 5 000 000 |
| **Crédit de TVA** | **4 000 000** |
| Remboursement trimestriel (≥ 200K, investissement) | OUI |

### Scénario 7 — Prorata (activité mixte)
*Clinique : pharmacie taxable 30M + soins exonérés 70M. TVA frais généraux = 800 000 FD*

| Composante | Montant (FD) |
|-----------|-------------|
| Prorata = 30M / 100M | **30%** |
| TVA déductible = 800K × 30% | 240 000 |
| TVA non déductible (charge) | 560 000 |

### Scénario 8 — Pénalités (retard + vente sans facture)
*Déclaration mars déposée le 15 mai (25 jours de retard), TVA due = 300 000 FD. Ventes sans facture détectées pour 1M HT*

| Composante | Montant (FD) |
|-----------|-------------|
| TVA due | 300 000 |
| Pénalité retard (5%/mois, min 50K) | 50 000 |
| Majoration 10% | 30 000 |
| Amende vente sans facture (50% × TVA 100K) | 50 000 |
| **Total dû au Trésor** | **430 000** |

---

## 9. Pénalités spécifiques TVA (Art. 260-265)

| Infraction | Pénalité | Article |
|-----------|---------|---------|
| Défaut/retard déclaration | Art. 246 + **minimum 50 000 FD** | Art. 265 |
| Vente sans facture | **50% des droits** (100% en cas de récidive) | Art. 261 |
| Fausse facture / déduction fictive | **100% de la déduction + sanctions pénales** | Art. 262 |
| Demande de remboursement fictif | Délit pénal d'escroquerie | Art. 263 |
| Infractions à l'importation | Réglementation douanes | Art. 264 |

---

## 10. Contrôles de cohérence SIGFID

- Croisement TVA / IBP : CA déclaré TVA = CA déclaré IBP
- Croisement TVA / Douanes : TVA import déclarée = TVA liquidée douane
- Croisement TVA / NIF fournisseurs : vérification NIF sur factures déductibles
- Détection des assujettis actifs sans déclaration (alerte automatique)
