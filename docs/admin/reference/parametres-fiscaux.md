---
sidebar_position: 2
title: Paramètres fiscaux
---

# Paramètres fiscaux

Les paramètres fiscaux (taux, barèmes, seuils) sont configurés ici et utilisés par les fonctions de calcul de SIGFID. **Aucun taux n'est codé en dur** dans le système.

:::warning Règle obligatoire
Toute modification d'un paramètre fiscal doit se baser sur un texte de loi (CGI, loi de finances). Notez toujours la référence légale lors d'une mise à jour.
:::

## Paramètres ITS — Barème progressif (Art. 15 CGI)

Le barème de l'ITS comporte 8 tranches. Pour chaque tranche, configurez :

| Champ | Description |
|-------|-------------|
| Tranche de (FD) | Revenu mensuel imposable minimum de la tranche |
| Tranche à (FD) | Revenu mensuel imposable maximum de la tranche |
| Taux (%) | Taux marginal applicable |

**Barème en vigueur (CGI 2025, Art. 15) :**

| Tranche | Taux |
|---------|------|
| 0 — 50 000 FD | 0 % (exonéré) |
| 50 001 — 150 000 FD | 9 % |
| 150 001 — 300 000 FD | 14 % |
| 300 001 — 500 000 FD | 19 % |
| 500 001 — 900 000 FD | 24 % |
| 900 001 — 1 500 000 FD | 29 % |
| 1 500 001 — 3 000 000 FD | 34 % |
| Au-delà de 3 000 000 FD | 39 % |

## Paramètres TVA (Art. 185 CGI)

| Paramètre | Valeur |
|-----------|--------|
| Taux normal | 10 % |
| Taux zéro (exportations) | 0 % |
| Seuil d'assujettissement | 30 000 000 FD / an |

## Paramètres IBP (Art. 21 CGI)

| Paramètre | Valeur |
|-----------|--------|
| Taux sur bénéfices | 25 % |
| IMF (minimum) | 1 % du chiffre d'affaires HT |
| Plancher IMF | 50 000 FD |
| Plafond IMF | 5 000 000 FD |

## Historique des modifications

Chaque modification de paramètre est horodatée et attribuée à l'administrateur ayant effectué le changement. Les calculs passés conservent un snapshot des paramètres utilisés au moment du calcul.
