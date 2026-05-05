---
sidebar_position: 1
title: Introduction
---

# Guide de l'administrateur fonctionnel

L'administrateur fonctionnel est responsable de la **configuration et du paramétrage** du système SIGFID. Il n'effectue pas d'opérations fiscales — ce rôle est réservé aux agents des impôts.

## Responsabilités

| Domaine | Actions |
|---------|---------|
| **Utilisateurs** | Créer et gérer les comptes agents et administrateurs |
| **Permissions** | Attribuer et retirer les droits d'accès aux agents |
| **Centres fiscaux** | Créer et configurer les centres fiscaux |
| **Paramètres fiscaux** | Saisir les taux, barèmes et seuils fiscaux |

## Principe fondamental

> L'administrateur fonctionnel **configure** le système. L'agent des impôts **l'utilise** pour traiter les dossiers fiscaux.

Les paramètres fiscaux (taux d'imposition, barèmes, seuils) sont **toujours saisis en base de données** par l'administrateur — jamais codés en dur dans le système. Si la loi de finances modifie un taux, seule la base de données est mise à jour.

## Accès à l'application

L'administrateur fonctionnel accède à **sigfid-console**, l'interface d'administration dédiée.
