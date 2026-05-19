---
title: Foire aux questions
description: Réponses aux questions fréquentes des administrateurs, agents et contribuables utilisant SIGFID.
sidebar_position: 91
---

# Foire aux questions

## Questions générales

### Qu'est-ce que SIGFID ?

SIGFID est le **Système Intégré de Gestion Fiscale de Djibouti**, la plateforme numérique de la Direction Générale des Impôts (DGI) pour la gestion de l'ensemble du cycle fiscal : immatriculation, déclarations, liquidations, recouvrement, contentieux et messagerie avec les contribuables.

### Cette documentation est-elle officielle ?

Oui. Elle est éditée par la Direction Générale des Impôts. En cas de divergence entre cette documentation et le Code Général des Impôts ou la loi de finances en vigueur, **seuls les textes officiels font foi**.

### Sur quel CGI repose la documentation ?

La version courante de la documentation est alignée sur le **Code Général des Impôts 2025** et tient compte des modifications introduites par la Loi de Finances Initiale (LFI) en vigueur. Les références d'articles sont systématiquement indiquées sur chaque page.

---

## Administrateur fonctionnel

### Quelle est la différence entre administrateur fonctionnel et agent des impôts ?

L'**administrateur fonctionnel** configure le système : il crée les comptes agents, attribue les permissions, paramètre les centres fiscaux et saisit les taux fiscaux. Il n'effectue **aucune opération fiscale** sur des contribuables.

L'**agent des impôts** utilise le système configuré pour traiter les dossiers : déclarations, liquidations, paiements, messagerie.

### Pourquoi les taux ne sont-ils pas codés en dur dans SIGFID ?

Pour qu'une modification de la loi de finances (changement de taux, de barème, de seuil) ne nécessite **aucune intervention informatique**. Seul l'administrateur fonctionnel met à jour la valeur en base de données via sigfid-console.

### Comment retracer qui a modifié un paramètre fiscal ?

Chaque modification de paramètre est horodatée et attribuée à l'administrateur exécutant. Les calculs passés conservent un **snapshot** des paramètres utilisés au moment du calcul — un changement de taux n'affecte donc jamais rétroactivement les déclarations déjà liquidées.

---

## Agent des impôts

### J'obtiens « Accès refusé » sur une fonctionnalité. Que faire ?

Vous n'avez pas la permission requise. Contactez votre administrateur fonctionnel pour qu'il vous l'attribue. Voir la [liste des permissions disponibles](/admin/utilisateurs/permissions).

### Une déclaration néant est-elle vraiment obligatoire ?

Oui. Tout assujetti actif doit déposer une déclaration **même en l'absence d'opérations** sur la période. SIGFID détecte automatiquement les défaillants et applique les pénalités prévues aux Art. 246-250 du CGI.

### Comment savoir si un contribuable doit être soumis à la TVA ?

SIGFID vérifie automatiquement le seuil annuel d'assujettissement (Art. 174 CGI — 10 ou 20 millions FD selon l'activité) et déclenche ou retire l'assujettissement chaque année. En cas de création en cours d'année, le CA est ajusté au prorata.

### Que se passe-t-il si je valide une déclaration par erreur ?

La déclaration est versée à l'audit trail et ne peut pas être supprimée. Vous devez établir une **déclaration rectificative**. Toute action est tracée (qui, quand, quoi).

---

## Contribuable

### Comment accéder à mon espace contribuable ?

Votre accès est créé par votre centre fiscal lors de votre immatriculation. Vous recevez un email d'invitation contenant un lien pour définir votre mot de passe.

### Qui peut consulter mes données fiscales ?

Seuls les **agents autorisés de votre centre fiscal** disposant des permissions nécessaires. Toutes les consultations sont tracées. Vos données sont protégées conformément au **Protocole de Confidentialité et Protection des Données SIGFID 2026**.

### Comment échanger avec mon centre fiscal ?

Utilisez la **messagerie sécurisée** intégrée à votre espace. Les échanges sont conservés et constituent une trace officielle des communications.

---

## Technique & sécurité

### Cette documentation collecte-t-elle des données ?

**Non.** Le site est statique, ne contient aucun script de suivi tiers et n'utilise pas de cookies. Aucune donnée personnelle n'est collectée à la consultation.

### Comment signaler une faille sur le site de documentation ?

Consultez notre [politique de sécurité](https://github.com/boubacarDiatta/sigfid-monorepo/blob/main/SECURITY.md) et signalez la faille par canal privé. **Ne créez pas d'issue publique.**

### Le code source du système SIGFID est-il public ?

Le code applicatif (sigfid-console, sigfid-agent, espace contribuable) **n'est pas public**. Seule la documentation l'est, à des fins de transparence et de formation.
