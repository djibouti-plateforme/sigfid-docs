---
sidebar_position: 3
title: IBP / IMF
---

# Impôt sur les Bénéfices Professionnels (IBP) et Impôt Minimum Forfaitaire (IMF)

**Référence CGI :** Livre 1, Titre 1, Chapitre 2-3  
**Permission requise :** `DECLARATION_IBP_CREATE`

## IBP — Présentation

L'IBP frappe les bénéfices réalisés par les personnes physiques et morales exerçant une activité professionnelle à Djibouti.

**Taux : 25 %** sur le bénéfice net imposable.

## IMF — Présentation

L'IMF est un impôt minimum dû même en l'absence de bénéfices. Il est calculé sur le **chiffre d'affaires hors taxes**.

| Paramètre | Valeur |
|-----------|--------|
| Taux | 1 % du CA HT |
| Plancher | 50 000 FD |
| Plafond | 5 000 000 FD |

## Règle IBP vs IMF

L'impôt dû est le **plus élevé** entre l'IBP calculé et l'IMF :

```
Impôt dû = MAX(IBP, IMF)
```

Si l'entreprise est déficitaire, elle paie l'IMF (minimum).

## Saisir une déclaration

1. Cliquez sur **Déclarations → IBP/IMF**
2. Sélectionnez le contribuable
3. Saisissez le bénéfice net (ou la perte) et le chiffre d'affaires HT
4. SIGFID calcule IBP, IMF et détermine l'impôt dû
5. Validez
