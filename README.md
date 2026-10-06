# Calculator — Testing workshop

Petite calculatrice web en Node.js/Express, utilisée comme support pour pratiquer 3 niveaux de test : unitaire (Jest), intégration (Supertest) et end-to-end (Puppeteer).

## Contexte

Projet réalisé en binôme dans le cadre d'un atelier ETNA sur les méthodologies de test. L'application elle-même est volontairement simple : l'objectif était la pratique du testing, pas la complexité fonctionnelle.

**Ma contribution** : implémentation de l'API Express (routes de calcul, gestion des erreurs), des tests unitaires (`calculator.test.js`) et d'intégration (`app.test.js`), et mise en place de la suite Puppeteer (`e2e.test.js`).

**Contribution de ma coéquipière** : Punyaporn Leelawongpanich a contribué sur ce même périmètre de tests (en partie via un agent Claude Code qu'elle pilotait).

## Stack

- Node.js, Express
- Jest (tests unitaires)
- Supertest (tests d'intégration)
- Puppeteer (tests end-to-end)

## Installation

```bash
npm install
```

## Lancer le serveur

```bash
npm start
```

Adresse : `http://localhost:3000`.

## Lancer les tests

```bash
# Tests unitaires (calculator.js)
npx jest test/calculator.test.js

# Tests d'intégration (routes Express)
npx jest test/app.test.js

# Tests end-to-end (le serveur est démarré automatiquement par la suite)
npx jest test/e2e.test.js

# Tout en même temps
npm test
```

## Routes API

| Méthode | Route             | Description     |
|---------|-------------------|------------------|
| GET     | `/`               | Page calculatrice |
| GET     | `/add/:a/:b`      | Addition         |
| GET     | `/substract/:a/:b`| Soustraction     |
| GET     | `/multiply/:a/:b` | Multiplication   |
| GET     | `/devide/:a/:b`   | Division         |

Les routes renvoient `{ "result": <valeur> }`, ou `{ "error": "<message>" }` avec un statut 400 en cas d'erreur (ex. division par zéro, paramètre non numérique).
