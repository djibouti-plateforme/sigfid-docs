---
sidebar_position: 3
title: Permissions des agents
---

# Gérer les permissions des agents

Chaque fonctionnalité de sigfid-agent est protégée par un **droit d'accès**. Un agent ne peut exécuter une action que si vous lui avez accordé la permission correspondante.

## Attribuer des permissions

1. Ouvrez la fiche de l'agent
2. Faites défiler jusqu'à la section **Permissions**
3. Activez ou désactivez chaque permission avec le bouton à bascule

Les modifications sont sauvegardées automatiquement.

## Liste des permissions disponibles

| Code | Libellé | Description |
|------|---------|-------------|
| `CONTRIBUABLE_VIEW` | Lire les contribuables | Consulter les fiches contribuables |
| `CONTRIBUABLE_PROTECT` | Protéger un contribuable | Marquer un contribuable comme protégé |
| `CONTRIBUABLE_TRANSFER` | Transférer un contribuable | Changer l'affectation d'un contribuable |
| `DECLARATION_ITS_CREATE` | Déclarer l'ITS | Saisir une déclaration ITS |
| `DECLARATION_TVA_CREATE` | Déclarer la TVA | Saisir une déclaration TVA |
| `DECLARATION_IBP_CREATE` | Déclarer l'IBP | Saisir une déclaration IBP |
| `ENREGISTREMENT_CREATE` | Effectuer un enregistrement | Créer une demande d'enregistrement |
| `ENREGISTREMENT_VALIDATE` | Valider un enregistrement | Valider une demande d'enregistrement |
| `REPONDRE_MESSAGERIE` | Répondre à la messagerie | Répondre aux messages des contribuables |

## Bonne pratique

Attribuez uniquement les permissions nécessaires au rôle de l'agent. Un agent du service ITS n'a pas besoin des permissions enregistrement.
