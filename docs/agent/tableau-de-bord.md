---
sidebar_position: 3
title: Tableau de bord
---

# Tableau de bord de l'agent

Le tableau de bord de sigfid-agent donne une vue synthétique de l'activité du centre fiscal.

## Indicateurs affichés

### Activité du jour
- Nombre de déclarations saisies aujourd'hui
- Nombre de déclarations validées
- Montant total des impôts liquidés

### Alertes et échéances
- Contribuables actifs sans déclaration TVA (échéance J−3, J−1, dépassée)
- Contribuables actifs sans déclaration ITS
- AMR en attente de recouvrement
- Messages non lus dans la messagerie

### Statistiques du centre fiscal
- Total des recettes du mois courant par type d'impôt
- Comparaison avec le mois précédent
- Taux de conformité déclarative

## Actions rapides

Depuis le tableau de bord, l'agent peut directement :
- **Nouvelle déclaration** : accès rapide par type d'impôt
- **Rechercher un contribuable** : par NIF ou nom
- **Voir les messages** : messagerie avec les contribuables

## Mode hors ligne

Quand la connexion internet est interrompue, le tableau de bord affiche les données en cache avec la mention **"Mode hors ligne — données du [date]"**. Les actions sont mises en file d'attente et synchronisées à la reconnexion.
