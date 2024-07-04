## Partie 5 : Événements

### Introduction

Les événements sont des actions ou des occurrences qui se produisent dans le système que vous programmez, auxquelles le système peut réagir. En JavaScript, les événements sont souvent liés à des interactions de l'utilisateur avec la page web, comme des clics de souris, des frappes au clavier, des soumissions de formulaire, et plus encore.

### 5.1. Gestion des événements

Pour réagir aux événements en JavaScript, vous devez ajouter des gestionnaires d'événements (ou écouteurs d'événements) aux éléments du DOM. Un gestionnaire d'événements est une fonction qui est exécutée lorsque l'événement spécifié se produit.

#### Ajouter un gestionnaire d'événements avec `addEventListener`

La méthode `addEventListener` est la façon moderne et flexible d'ajouter des gestionnaires d'événements en JavaScript. Elle prend deux arguments principaux :

1. Le type d'événement (comme 'click', 'mouseover', 'keydown', etc.)
2. La fonction à exécuter lorsque l'événement se produit.

- **Syntaxe :**

  ```javascript
  element.addEventListener('eventType', function);
  ```

- **Exemple pratique :**

  Supposons que nous ayons un bouton et que nous souhaitions afficher une alerte lorsqu'il est cliqué.

  ```html
  <button id="myButton">Click me</button>
  <script>
      const button = document.getElementById('myButton');
      button.addEventListener('click', function() {
          alert('Button clicked!');
      });
  </script>
  ```

  Dans cet exemple, nous sélectionnons le bouton par son ID, puis ajoutons un gestionnaire d'événements pour l'événement 'click'. Lorsque le bouton est cliqué, une alerte s'affiche.

#### Types d'événements courants

Voici quelques types d'événements courants et comment les utiliser :

- **`click` :**

  Se produit lorsqu'un élément est cliqué.

  ```javascript
  element.addEventListener('click', function() {
      console.log('Element clicked');
  });
  ```

- **`mouseover` et `mouseout` :**

  `mouseover` se produit lorsque le pointeur de la souris entre dans un élément, et `mouseout` se produit lorsqu'il quitte un élément.

  ```javascript
  element.addEventListener('mouseover', function() {
      console.log('Mouse over element');
  });

  element.addEventListener('mouseout', function() {
      console.log('Mouse out of element');
  });
  ```

- **`keydown` et `keyup` :**

  `keydown` se produit lorsqu'une touche du clavier est enfoncée, et `keyup` se produit lorsqu'une touche est relâchée.

  ```javascript
  document.addEventListener('keydown', function(event) {
      console.log(`Key down: ${event.key}`);
  });

  document.addEventListener('keyup', function(event) {
      console.log(`Key up: ${event.key}`);
  });
  ```

- **`submit` :**

  Se produit lorsqu'un formulaire est soumis.

  ```javascript
  const form = document.getElementById('myForm');
  form.addEventListener('submit', function(event) {
      event.preventDefault(); // Empêche l'envoi du formulaire
      console.log('Form submitted');
  });
  ```

#### Gestionnaire d'événements en tant que fonctions séparées

Il est souvent utile de définir les gestionnaires d'événements en tant que fonctions séparées, surtout si la fonction est complexe ou si vous voulez réutiliser la même fonction pour plusieurs événements.

- **Exemple pratique :**

  ```html
  <button id="myButton">Click me</button>
  <script>
      const button = document.getElementById('myButton');

      function handleClick() {
          alert('Button clicked!');
      }

      button.addEventListener('click', handleClick);
  </script>
  ```

  Dans cet exemple, nous définissons la fonction `handleClick` séparément et l'utilisons comme gestionnaire d'événements pour l'événement 'click'.

#### Suppression des gestionnaires d'événements

Vous pouvez supprimer un gestionnaire d'événements en utilisant la méthode `removeEventListener`. Cela peut être utile si vous souhaitez arrêter d'écouter un événement spécifique.

- **Syntaxe :**

  ```javascript
  element.removeEventListener('eventType', function);
  ```

- **Exemple pratique :**

  ```html
  <button id="myButton">Click me</button>
  <script>
      const button = document.getElementById('myButton');

      function handleClick() {
          alert('Button clicked!');
      }

      button.addEventListener('click', handleClick);

      // Suppression du gestionnaire d'événements après 5 secondes
      setTimeout(function() {
          button.removeEventListener('click', handleClick);
          console.log('Event listener removed');
      }, 5000);
  </script>
  ```

  Dans cet exemple, le gestionnaire d'événements pour le bouton est supprimé après 5 secondes.

### Exercices pratiques

1. **Ajoutez un gestionnaire d'événements `click` à un bouton qui change le texte du bouton lorsqu'il est cliqué :**

  ```html
  <button id="myButton">Click me</button>
  <script>
      const button = document.getElementById('myButton');
      button.addEventListener('click', function() {
          button.textContent = 'Clicked!';
      });
  </script>
  ```

2. **Ajoutez un gestionnaire d'événements `mouseover` à un élément qui change la couleur de fond de l'élément lorsqu'il est survolé par la souris :**

  ```html
  <div id="myDiv" style="width: 100px; height: 100px; background-color: lightblue;"></div>
  <script>
      const div = document.getElementById('myDiv');
      div.addEventListener('mouseover', function() {
          div.style.backgroundColor = 'lightgreen';
      });
      div.addEventListener('mouseout', function() {
          div.style.backgroundColor = 'lightblue';
      });
  </script>
  ```

3. **Ajoutez un gestionnaire d'événements `keydown` au document qui affiche la touche enfoncée dans la console :**

  ```html
  <script>
      document.addEventListener('keydown', function(event) {
          console.log(`Key pressed: ${event.key}`);
      });
  </script>
  ```

4. **Ajoutez un gestionnaire d'événements `submit` à un formulaire qui empêche l'envoi du formulaire et affiche un message dans la console :**

  ```html
  <form id="myForm">
      <input type="text" name="name" placeholder="Enter your name">
      <button type="submit">Submit</button>
  </form>
  <script>
      const form = document.getElementById('myForm');
      form.addEventListener('submit', function(event) {
          event.preventDefault(); // Empêche l'envoi du formulaire
          console.log('Form submission prevented');
      });
  </script>
  ```