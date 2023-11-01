# Email-Management

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Group

Ce projet à été fait par :

- Laura Sadaa
- Minggao Gong
- Nathan Morel

## Introduction

Ce projet est un projet de groupe fait par 3 élèves en majeurs IRV, vous pouvez retrouver le sujet [ici](M1_DT_IRV_Projet_ST2AWD.pdf) ou sur le site de [Thomas Veillard](https://thomas-veillard.fr/front-end-web-development/vue/project/).

## Les outils que nous avons pensée

Voici quelque lien externe que nous avons utilisée

- [Un ancien projet trouver sur github](https://github.com/tknarr/email_mgmt_client/tree/master)
- [Un cours sur un cour Full-Stack Vue + Node](https://vuejsdevelopers.com/courses/fullstack-vue-node/)
- [Les api de google](https://developers.google.com/gmail/api/quickstart/nodejs)
- [L&#39;api de microsoft pour outlook](https://docs.microsoft.com/en-us/outlook/rest/node-tutorial)
- [L&#39;api de github pour idendifier les utilisateurs](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/)
- [La documentation pour une base de donnée firebase](https://firebase.google.com/docs/firestore/quickstart)

### Front end

- [Vue.js](https://vuejs.org/)
- [Boostrop vue](https://bootstrap-vue.org/docs)
- [Boostrop](https://getbootstrap.com/)
- [Exemple in vue](https://github.com/twbs/examples/tree/main/vue)
- [Projet front End](https://www.creative-tim.com/product/bootstrap-vue-argon-dashboard?partner=134895)

### Back end

- [FireBase](https://firebase.google.com/)
- [Node.js](https://nodejs.org/en/)

## Project structure

## Todo list

- [ ] enlever les choses appartenant au template
- [X] creer 2 tables pour la base de donnée
- [X] lier la base de donnée firebase à notre projet
  - [ ] mettre les clée de l'apî dans un .env (pas possible pour le moment)
- [ ] creer les pages de login et de sign in
  - [ ] creer 2 utilisateurs avec mot de passe
- [ ] bouton de Aouth microsft (or git) pour les utilisateurs
- [ ] faire la page ou on voit les mails
  - [ ] envoyer un message
  - [ ] supprimer un mail
- [ ] refaire le css des pages
- [ ] check les routes pour quelle soit sécurité
  - [x] faire une page erreur 404 si route pas trouvé
