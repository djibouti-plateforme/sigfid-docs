---
sidebar_position: 1
title: Vue d'ensemble des déclarations
---

# Déclarations fiscales — Vue d'ensemble

SIGFID gère tous les **impôts déclaratifs** du système fiscal djiboutien. Chaque impôt dispose de sa propre page de documentation détaillée.

## Tableau des impôts couverts

| Impôt | Code | Référence CGI | Échéance | Permission |
|-------|------|---------------|---------|------------|
| [ITS — Traitements et Salaires](./its) | ITS | Livre 1, Titre 1, Chap. 1 — Art. 1-17 | 10 du mois M+1 | `DECLARATION_ITS_CREATE` |
| [TVA — Taxe sur la Valeur Ajoutée](./tva) | TVA | Livre 1, Titre 3, Chap. 1 — Art. 171-211 | 20 du mois M+1 | `DECLARATION_TVA_CREATE` |
| [IBP / IMF — Bénéfices Professionnels](./ibp-imf) | IBP/IMF | Livre 1, Titre 1, Chap. 2-3 — Art. 18-62 | 1er avril (réel) / 1er février (simplifié) | `DECLARATION_IBP_CREATE` |
| [Patentes & Centimes Additionnels](./patentes) | CP/CA | Livre 1, Titre 2, Chap. 1-2 — Art. 91-129 | Annuelle | `DECLARATION_PATENTE_CREATE` |
| [Contribution des Licences](./licences) | CL | Livre 1, Titre 2, Chap. 3 — Art. 130-136 | Annuelle | `DECLARATION_LICENCE_CREATE` |
| [IRNR — Rémunérations Non-Résidents](./irnr) | IRNR | Livre 1, Titre 1, Chap. 5 — Art. 70-77 | 15 du mois M+1 | `DECLARATION_IRNR_CREATE` |
| [RAS PS — Retenue sur Prestations](./ras-ps) | RAS | Livre 1, Titre 4, Chap. 4 — Art. 298 | 15 du mois M+1 | `DECLARATION_RAS_CREATE` |
| [Autres impôts (IIS, IPVI, IPVM, IRVM, TBA)](./autres-impots) | Divers | Livre 1, Titre 1, Chap. 4-9 | Variable | Variable |

---

## Principes communs à toutes les déclarations

### Taux et barèmes dynamiques

Aucun taux n'est codé en dur dans SIGFID. Tous les paramètres fiscaux sont configurés par l'administrateur fonctionnel dans sigfid-console et lus dynamiquement à chaque calcul.

### Historisation obligatoire

Chaque calcul fiscal est enregistré en base avec :
- Les entrées (assiette, données du contribuable)
- Les paramètres utilisés au moment du calcul (snapshot)
- Le résultat et le détail des étapes
- La date, l'agent exécutant et la référence CGI applicable

### Déclaration Néant obligatoire

Même en l'absence d'opérations, tout contribuable actif doit déposer une déclaration néant. SIGFID détecte les défaillants et génère des alertes automatiques.

### Pénalités automatiques

SIGFID calcule et applique automatiquement les pénalités (Art. 246-250 CGI) dès dépassement des échéances.

---

## Cycle de traitement d'une déclaration dans SIGFID

```
1. Agent saisit la déclaration
          ↓
2. SIGFID calcule l'impôt (paramètres depuis la BDD)
          ↓
3. Agent valide → déclaration enregistrée (audit trail)
          ↓
4. SIGFID crée la dette dans le compte impôts
          ↓
5. Contribuable reçoit notification
          ↓
6. Contribuable paie → agent enregistre le paiement
          ↓
7. Compte impôts soldé
```
