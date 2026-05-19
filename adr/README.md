# Architecture Decision Records (ADR)

Ce dossier contient les **décisions d'architecture** structurantes prises sur le projet `sigfid-docs`. Chaque ADR documente le contexte, la décision, les alternatives considérées et les conditions sous lesquelles la décision devrait être réexaminée.

## À quoi ça sert ?

Un ADR sert à **laisser une trace écrite du raisonnement** derrière une décision technique ou organisationnelle, pour que les futurs mainteneurs (et vous-même dans six mois) puissent :

- Comprendre **pourquoi** une décision a été prise, pas seulement **quelle** décision
- Identifier les **conditions qui justifient une réévaluation** (pas seulement « est-ce qu'on change ? »)
- Connaître les **alternatives écartées** pour ne pas reproduire un débat déjà tranché
- Tracer l'**évolution** des décisions au fil du temps (un ADR peut superseder un précédent)

## Convention de nommage

```
NNNN-titre-en-kebab-case.md
```

Exemple : `0001-documentation-publique-sans-authentification.md`

Les ADR sont **immuables une fois acceptés**. Si une décision est revue, on ne modifie pas l'ADR original — on en crée un nouveau qui *supersede* l'ancien (en mentionnant son numéro dans le champ Statut).

## Statuts possibles

| Statut | Signification |
|--------|--------------|
| **Proposé** | En cours de discussion, pas encore validé |
| **Accepté** | Décision en vigueur |
| **Déprécié** | N'est plus la décision en vigueur mais aucune décision de remplacement n'a été prise |
| **Remplacé par ADR NNNN** | Une décision ultérieure a pris le relais |

## Index

| N° | Titre | Statut | Date |
|----|-------|--------|------|
| [0001](./0001-documentation-publique-sans-authentification.md) | Documentation publique sans authentification | Accepté | 2026-05-19 |

## Comment créer un nouvel ADR

1. Copier le format de l'ADR le plus récent
2. Prendre le numéro suivant disponible
3. Renseigner tous les champs (Contexte, Décision, Alternatives, Conséquences, Conditions de réévaluation)
4. Référencer le nouvel ADR dans le tableau d'index ci-dessus
5. Soumettre en pull request pour revue avant de marquer **Accepté**
