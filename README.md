# Revision JS || Introduction à TS 

L'objectif de ce cours est de faire une révision globale des concepts que vous avez vu depuis le début de formation. 
On se concentrera ici sur le Javascript ( ou [Typescript](https://www.typescriptlang.org/) pour ceux qui trouvent ça trop facile) **Mais** les exercices feront appels à des notions de HTML/CSS. 

# Exercices de révisions JS :

- Faire un fork de ce repo ( le mettre en public );
  
- Ouvrir le dossier;
  
- Créer le dossier `Exercices`;

- Créer le dossier `Classe1` ou `Classe2`  
  
- Créer un dossier à son nom;
  
- Ouvrir son éditeur de code :
  
  `code .` (Pour VSCode);
  
- Pour chaque exercice, créer un dossier avec le numéro de l'exercice et dans le dossier un fichier *.js* avec le numéro de l'exercice ( exemple : `ex01.js` );
  
- Vous pouvez tester votre code [ici](https://www.jsplayground.dev/);
  
  Ou utiliser node dans le terminal de votre éditeur;
  
- Internet / [Google](https://www.google.com) est votre ami, toutes les réponses à vos questions se trouvent sur internet, mais n'hésitez poser des questions si vous bloquez, ne copiez pas bêtement les réponses, essayez de comprendre ce que vous écrivez;

- **Bonus global** : *Faire les exercices en Typescript*;
  

### 0/ On vérifie qu'on a compris la consigne :

- Créer un fichier test et afficher une blague dans la console.
- Créer une page index.html et afficher la blague dans une "alerte" 

### 1/ Créer une page html avec un texte `H1` qui change selon l'heure qu'il est.

- Afficher également le jour, la date et l'heure ( sans les secondes )

### 2/ Voici une table : 

```js
const consoles = [
    "PlayStation",
    "Xbox",
    "Nintendo Switch",
    "Sega Genesis",
    "Atari 2600",
    "Super Nintendo",
    "Game Boy",
    "PlayStation 5",
    "Xbox Series X",
    "Nintendo 64",
    "Sega Dreamcast",
    "PlayStation 2"
];
```

- Créer une interface simple avec un espace pour afficher du texte en un bouton, dispose les comme tu le veux.
- Copie l'interface pour chaque exercice 
  1. Au clic sur le bouton, affiche le 8ème élément du tableau.
  2. Au clic sur le bouton,  enlève le premier et le dernier élément du tableau, affiche ensuite le nouveau tableau ( toutes les instructions doivent être effectuée au clic sur le bouton )
  3. Au clic sur le bouton, affiche chaque élément du tableau, l'un après l'autre.

### 3/ Manipuler le DOM:

- Dans le dossier `Exercices` utiliser le fichier `domSample1.html` pour : 
  - Sélectionne la balise dont l'id est "target": remplace son contenu par "owned".
  - Sélectionne la balise p dont la classe est "target": remplace son contenu par "owned".

- Dans le dossier `Exercices` utiliser le fichier `domSample2.html`pour :
  - Sélectionne les balises dont la classe est "target": remplace leurs contenus par "owned".
  
### 4/ Créer un caroussel d'images (au choix) , qui défilent automatiquement, prévoir des boutons pour arrêter le processus de défilement automatique, et des flèches pour passer d'une image à l'autre, vers l'avant ou vers l'arrière. 

### 5/ Créer un bouton qui change la couleur d'une div lorsqu'il est cliqué :

- Générer une couleur aléatoire avec une fonction

### 6/ Reprendre le code de l'exercice précédent, ajouter un titre et faire en sorte que le titre change lors du clic sur le bouton ( attention, la couleur ne doit plus changer )

### 7/ Créer un formulaire pour choisir un nom d'utilisateur et un mot de passe, avant d'envoyer le formulaire vous devez vérifiez que le mot de passe choisi fait plus de 10 caractères ( grace à JS ) :

- Vérifier également la présence de chiffres, de caractères spéciaux et de majuscules dans le champ "password" du formulaire
- Afficher un message d'erreur si le mot de passe ne répond pas aux critères
- Faire du layout


### 8/ Ecrire les chiffres de 0 à 10 avec une fonction :

- Trouver plusieurs méthodes pour le faire
- Ecrire les chiffres de 10 à 0

### 9/ Ecrire une fonction qui affiche les chiffres de 1 à 100, chaque multiple de 3 doit afficher Fizz, chaque multiple de 5 doit afficher Buzz, et les multiples communs de 3 & 5 doivent afficher FizzBuzz.

- Utiliser `for` ou `while` 
- Utiliser un switch

### 10/ Ecrire l'alphabet de A à Z avec une fonction :

- Utiliser la manière "simple"
- Utiliser la méthode ASCII

Deux petites pages de documentation à lire, l'exercice est un petit peu plus compliqué, mais la fonction peut être écrite en 3 lignes.

**Un peu de documentation utile :**
- [String.fromCharCode() - JavaScript | MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode)
  
- [Table des codes ASCII et leur correspondance](https://www.purebasic.com/french/documentation/reference/ascii.html)
  

### 11/ Ecrire une fonction qui prend un chiffre en paramètre et affiche s'il est positif ou négatif :

- traiter le cas de "0".

### 12/ Calculer, à l'aide d'une fonction le résultat de 5 multiplié par 5 : 

- Ecrire une fonction pour le faire pour n'importe quel nombre
- Créer un fichier `html` et faire une interface de calcul
- *Créer toutes les fonctions d'une calculatrice et créer une interface simple pour permettre d'éffectuer les calculs* (Bonus)

### 13/ Créer une page `html` avec un script qui choisi un nombre entre 1 & 100, puis demande à l'utilisateur de choisir un nombre.

- Le script répond "plus grand" ou "plus petit" en fonction, ou le félicite si le nombre est correct, tout en affichant son nombre d'essais.

### 14/ Utiliser une API pour afficher des informations sur une page `html` et faire le layout avec [TailwindCSS](https://tailwindcss.com/)

- Inclure un sélecteur pour permettre de choisir "l'objet" à afficher.

### 15/ Créer une to-do-list sous forme de mini application web ( HTML / CSS / JS )

- Ajout de tâches
- Confirmation de la tâche ( tâche effectuée )
- Séparer les 3 fichiers et les importer correctement dans l'HTML. 
- Stocker les informations dans le [localstorage](https://developer.mozilla.org/fr/docs/Web/API/Window/localStorage)

### 16/ Consolidation : Coder un jeu de type snake.

### 17/ Travail de groupe : Par groupe de 3, vous devez coder un [Cookie Clicker](https://orteil.dashnet.org/cookieclicker/), celui ci doit comprendre un écran d'acceuil, un indicateur de score, des bonus et leur valeur.

- Utilisez Github pour collaborer.
- Vous devez pouvoir expliquer votre code lors de sa présentation. 
- Appliquez un maximum de concept vu pendant les révisions.