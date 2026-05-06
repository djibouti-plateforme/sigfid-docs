---
sidebar_position: 2
title: Fiche contribuable
---

# Fiche contribuable

**Permission requise :** `CONTRIBUABLE_VIEW`

La fiche contribuable centralise toutes les informations fiscales d'un contribuable.

## Informations générales

| Champ | Description |
|-------|------------|
| **NIF** | Numéro d'Identification Fiscale (unique) |
| **Raison sociale / Nom** | Dénomination de l'entreprise ou nom de la personne physique |
| **Forme juridique** | SARL, SA, Personne physique, etc. |
| **Code ISIC** | Classification internationale des activités |
| **Classe de patente** | Déterminée automatiquement par SIGFID depuis le code ISIC |
| **Régime IBP** | Simplifié / Réel / Micro-entreprise |
| **Assujetti TVA** | Oui / Non + date d'assujettissement |
| **Centre fiscal** | Centre fiscal d'affectation |
| **Statut** | Actif / Suspendu / Protégé |

## Onglets de la fiche

### Onglet Compte impôts
Voir le [compte impôts détaillé](./compte-impots).

### Onglet Déclarations
Historique de toutes les déclarations soumises, par type d'impôt et par période.

| Statut | Signification |
|--------|--------------|
| **Soumise** | Saisie par l'agent, en attente |
| **Validée** | Traitée et confirmée |
| **Rejetée** | Erreurs détectées, correction requise |
| **Néant** | Déclaration à zéro déposée |

### Onglet Documents
Documents rattachés au contribuable : baux, actes, liasses fiscales, justificatifs.

### Onglet Messagerie
Conversations avec le contribuable via sigfid-client.

### Onglet Historique
Journal d'audit de toutes les actions effectuées sur le dossier.

## Actions disponibles sur la fiche

| Action | Permission requise |
|--------|-------------------|
| Consulter la fiche | `CONTRIBUABLE_VIEW` |
| Modifier les informations | `CONTRIBUABLE_EDIT` |
| Protéger le dossier | `CONTRIBUABLE_PROTECT` |
| Transférer vers un autre centre | `CONTRIBUABLE_TRANSFER` |
| Créer une déclaration | Permission spécifique par impôt |

## Contribuable protégé

Un dossier marqué "protégé" est accessible uniquement aux agents ayant la permission `CONTRIBUABLE_PROTECT`. Toute tentative d'accès par un agent non autorisé est enregistrée dans l'audit trail.
