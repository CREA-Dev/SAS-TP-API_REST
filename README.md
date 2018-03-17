# Installation

1.  Installation de NodeJS: https://nodejs.org/en/download/
2.  Clonage du dépôt: `git clone https://github.com/CREA-Dev/SAS-TP-API_REST tp-api-rest && cd tp-api-rest`
3.  Installation des modules externes: `npm install`

# Lancement

Lancer le serveur avec `node server.js`.
Il est nécessaire de l'arrêter (CTRL+C) et de le relancer à chaque modification.

Pour que le serveur se relance tout seul à chaque modification, vous pouvez utiliser `nodemon`:

```bash
npm install -g nodemon
npm run dev
```

# Exemples

Le fichier [javascript.js](javascript.js) réuni un ensemble d'exemples pour comprendre le fonctionnement de base de javascript.
Il est possible de l'exécuter avec la commande `node javascript.js`.

# Modules

Dans ce dépôt, vous trouverez 2 modules supplémentaires qui seront éventuellement plus tard.
Vous n'en avez pas besoin pour commencer l'exercice.

* `auth.js` pour gérer l'authentification sur les endpoints
* `mongo.js` pour gérer les accès à une base de données MongoDB
