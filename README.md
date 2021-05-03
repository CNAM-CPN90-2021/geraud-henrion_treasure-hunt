# Chasse au Trésor

Projet initialisé à l'aide de la commande suivantes :
```sh
ionic start treasure-hunt
# Framework: React,  Starter template: blank
```

Désactivation du mode strict de typescript (pour pouvoir écrire simplement du javascript) :
```diff
# tsconfig.json
-   "strict": true,
+   "strict": false,
```

## Commandes

Au premier lancement, faire `npm install`, puis dupliquer `.env.dist`en `.env` et ajouter les variables d'environnement nécessaires.

Lancer le serveur de dev :
```
npm start
```

## Sujets

- créer un compte + générer access token mapbox
- .env
- feuille de styles mapbox
- Context
- paramètres d'url
