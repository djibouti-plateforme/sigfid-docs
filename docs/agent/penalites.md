---
sidebar_position: 7
title: Pénalités fiscales
---

# Pénalités fiscales — Référence complète

**Référence CGI :** Art. 245 à 265

---

## Pénalités générales (Art. 246-250)

Ces pénalités s'appliquent à **tous les impôts déclaratifs**.

### Art. 246 — Défaut ou retard de déclaration

| Situation | Pénalité |
|-----------|---------|
| Intérêt de retard | **5% par mois** dès le premier jour de retard |
| Déclaration déposée dans les 10 jours suivant la mise en demeure (MED) | Majoration **10%** |
| Déclaration déposée plus de 20 jours après la MED | Majoration **40%** |
| Non-dépôt malgré MED | Majoration **40%** + taxation d'office |

### Art. 247 — Retard de paiement

| Pénalité | Taux |
|---------|------|
| Intérêt de retard | **0,5% par mois** |
| Majoration fixe | **5%** du montant différé |

### Art. 248 — Insuffisance de déclaration (bonne foi)

| Pénalité | Taux |
|---------|------|
| Intérêt de retard | **1% par mois** sur le complément |

### Art. 249 — Défaut de retenue à la source

| Impôt concerné | Pénalité |
|---------------|---------|
| ITS (défaut de retenue employeur) | **100% des retenues manquées** |
| IRNR (défaut de retenue) | **100% des retenues manquées** |
| RAS PS (défaut de retenue) | **100% des retenues manquées** |

:::danger Pénalité la plus lourde
Art. 249 : L'amende est égale au montant des retenues non effectuées, en sus du principal. Un employeur qui omet 50 000 FD d'ITS paie **100 000 FD** au Trésor (50 000 + 50 000).
:::

### Art. 250 — Mauvaise foi et fraude

| Situation | Majoration |
|-----------|-----------|
| Mauvaise foi (insuffisance volontaire) | **40%** des droits éludés |
| Manœuvres frauduleuses | **80%** des droits éludés |

---

## Pénalités spécifiques TVA (Art. 260-265)

| Infraction | Pénalité | Article |
|-----------|---------|---------|
| Défaut/retard déclaration TVA | Art. 246 + **minimum 50 000 FD** | Art. 265 |
| Vente sans facture | **50% des droits compromis** (100% en récidive) | Art. 261 |
| Fausse facture / déduction fictive | **100% de la déduction + sanctions pénales** | Art. 262 |
| Demande de remboursement fictif | Délit pénal d'escroquerie | Art. 263 |

---

## Pénalités spécifiques licences (Art. 257-259)

| Infraction | Pénalité | Article |
|-----------|---------|---------|
| Commerce de boissons sans licence | Amende + fermeture | Art. 257 |
| Défaut d'affichage du titre de licence | Amende | Art. 259 |

---

## Workflow de gestion des pénalités dans SIGFID

### Déclenchement automatique

SIGFID déclenche automatiquement les pénalités à chaque dépassement d'échéance :

1. **J+1 après l'échéance** : SIGFID calcule l'intérêt de retard (Art. 247 ou 246)
2. **Envoi de la mise en demeure (MED)** : l'agent valide et envoie la MED depuis SIGFID
3. **J+10 après MED** : si aucune déclaration → majoration 10%
4. **J+20 après MED** : si aucune déclaration → majoration 40%
5. **Taxation d'office** : si persistance, l'agent émet une taxation d'office

### Avis de Mise en Recouvrement (AMR)

L'AMR est émis automatiquement par SIGFID dès qu'une dette est constatée. L'agent peut :
1. Consulter la liste des AMR en attente
2. Suivre les paiements associés
3. Émettre un rappel ou engager une procédure de recouvrement forcé

---

## Exemple de calcul de pénalités complet

**Situation :** SARL XYZ, TVA mars non déclarée et non payée (due = 500 000 FD), MED envoyée le 5 mai, déclaration déposée le 12 mai (dans les 10 jours).

| Composante | Montant (FD) |
|-----------|-------------|
| TVA due (mars) | 500 000 |
| Intérêt de retard (5%/mois × 2 mois) | 50 000 |
| Majoration 10% (dépôt dans les 10j de MED) | 50 000 |
| Minimum pénalité TVA (Art. 265) | 50 000 |
| Pénalité retenue = MAX(50K+50K ; 50K) | 100 000 |
| **Total à payer** | **600 000** |
