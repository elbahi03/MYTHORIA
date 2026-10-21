# Mythoria — Trading Card Game

## 1. Présentation du projet

Mythoria est un site web dédié à un jeu de cartes à collectionner inspiré d'un univers dark fantasy. Les joueurs peuvent découvrir différents boosters, explorer l'univers du jeu et acheter des packs de cartes.

Ce projet est réalisé dans le cadre d'un travail pédagogique en autonomie sur une période de 7 jours.

## 2. Liens du projet

- Site web déployé sur Vercel : [https://mythoria-beta.vercel.app/]
- Repository GitHub : [https://github.com/elbahi03/MYTHORIA.git]
- planning : [https://github.com/users/elbahi03/projects/8]

## 3. Objectifs du premier livrable

Le premier livrable consiste à développer les deux premières pages du site :

- Home : une page d'accueil immersive présentant l'univers de Mythoria.
- Booster Shop : une boutique permettant de découvrir les boosters disponibles et de les ajouter à un panier.

Le panier permet de gérer les quantités, de calculer le prix total et de conserver son contenu après l'actualisation de la page.

## 4. Fonctionnalités

### Page Home

- Présentation de l'univers de Mythoria.
- Section Hero avec le nom du jeu et un slogan.
- Bouton « Découvrir les boosters » permettant d'accéder à la boutique.
- Bouton « Ouvrir mon grimoire » pour accéder à la collection.
- Présentation des catégories de cartes.
- Présentation des boosters disponibles.
- Mise en avant de quelques cartes légendaires.
- Navigation entre les différentes sections du site.

### Page Booster Shop

- Affichage des boosters avec leur illustration, leur nom, leur description et leur prix.
- Présentation du nombre et des catégories de cartes que chaque booster peut contenir.
- Ajout de boosters au panier.
- Modification des quantités.
- Calcul automatique du total du panier.
- Suppression d'un booster du panier.
- Possibilité de vider le panier.
- Conservation du panier grâce à LocalStorage.
- Simulation de la validation d'une commande, sans paiement réel.

## 5. Technologies utilisées

- HTML5 : structure et organisation des pages web.
- CSS3 : mise en page, design, animations et adaptation aux différentes tailles d'écran.
- JavaScript : gestion des données, des événements et de la logique du panier.
- DOM (Document Object Model) : manipulation dynamique du contenu HTML pour afficher les boosters et actualiser le panier.
- LocalStorage : sauvegarde du panier dans le navigateur afin de conserver son contenu après actualisation.
