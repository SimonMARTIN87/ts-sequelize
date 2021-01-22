Le plus intéressant se passe dans [`src/models/list.ts`](./src/models/list.ts).

## dépendances

- node >= LTS (14.15.4)
- une DB compatible avec Sequelize

## install

`npm install` ou `yarn`

## config

Remplir le fichier `config/config.json` avec les paramètres de la DB.

## migrate & seed

`npx sequelize db:migrate && npx sequelize db:seed:all`

## transpilage

`tsc`

## run 

`node dist/index.js`