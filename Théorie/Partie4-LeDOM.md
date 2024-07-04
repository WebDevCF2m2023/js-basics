## Partie 4 : Manipulation du DOM

La manipulation du DOM (Document Object Model) est une compétence essentielle pour tout développeur web. Le DOM est une représentation en mémoire de la structure d'un document HTML ou XML. Il permet aux langages de programmation comme JavaScript de manipuler, modifier et interagir avec la structure, le style et le contenu d'une page web.

### 4.1. Sélection des éléments

Pour manipuler les éléments du DOM, il faut d'abord les sélectionner. JavaScript offre plusieurs méthodes pour sélectionner les éléments du DOM.

#### Sélection avec `getElementById` :

Cette méthode sélectionne un élément par son identifiant unique (`id`). Chaque élément d'un document HTML peut avoir un `id`, mais celui-ci doit être unique.

- **Syntaxe :**

  ```javascript
  const element = document.getElementById('myId');
  ```

- **Exemple pratique :**

  ```html
  <div id="myId">Hello World</div>
  <script>
      const element = document.getElementById('myId');
      console.log(element); // Affiche l'élément avec l'id 'myId'
  </script>
  ```

#### Sélection avec `getElementsByClassName` :

Cette méthode sélectionne tous les éléments ayant une classe spécifique. Elle retourne une collection d'éléments (HTMLCollection).

- **Syntaxe :**

  ```javascript
  const elements = document.getElementsByClassName('myClass');
  ```

- **Exemple pratique :**

  ```html
  <div class="myClass">Item 1</div>
  <div class="myClass">Item 2</div>
  <script>
      const elements = document.getElementsByClassName('myClass');
      console.log(elements); // Affiche tous les éléments avec la classe 'myClass'
  </script>
  ```

#### Sélection avec `querySelector` :

Cette méthode retourne le premier élément qui correspond à un sélecteur CSS spécifié.

- **Syntaxe :**

  ```javascript
  const element = document.querySelector('.myClass');
  ```

- **Exemple pratique :**

  ```html
  <div class="myClass">Item 1</div>
  <div class="myClass">Item 2</div>
  <script>
      const element = document.querySelector('.myClass');
      console.log(element); // Affiche le premier élément avec la classe 'myClass'
  </script>
  ```

#### Sélection avec `querySelectorAll` :

Cette méthode retourne tous les éléments qui correspondent à un sélecteur CSS spécifié. Elle retourne une collection d'éléments (NodeList).

- **Syntaxe :**

  ```javascript
  const elements = document.querySelectorAll('.myClass');
  ```

- **Exemple pratique :**

  ```html
  <div class="myClass">Item 1</div>
  <div class="myClass">Item 2</div>
  <script>
      const elements = document.querySelectorAll('.myClass');
      console.log(elements); // Affiche tous les éléments avec la classe 'myClass'
  </script>
  ```

### 4.2. Modification du DOM

Une fois que vous avez sélectionné un élément du DOM, vous pouvez le modifier de différentes manières, y compris le contenu, les attributs, et même ajouter ou supprimer des éléments.

#### Modification du contenu :

Vous pouvez modifier le contenu d'un élément en utilisant la propriété `textContent`.

- **Syntaxe :**

  ```javascript
  const element = document.getElementById('myId');
  element.textContent = 'New Content';
  ```

- **Exemple pratique :**

  ```html
  <div id="myId">Old Content</div>
  <script>
      const element = document.getElementById('myId');
      element.textContent = 'New Content'; // Change le contenu de 'Old Content' à 'New Content'
  </script>
  ```

#### Modification des attributs :

Vous pouvez modifier les attributs d'un élément en utilisant la méthode `setAttribute`.

- **Syntaxe :**

  ```javascript
  const element = document.getElementById('myId');
  element.setAttribute('class', 'newClass');
  ```

- **Exemple pratique :**

  ```html
  <div id="myId" class="oldClass">Hello World</div>
  <script>
      const element = document.getElementById('myId');
      element.setAttribute('class', 'newClass'); // Change la classe de 'oldClass' à 'newClass'
  </script>
  ```

#### Ajout d'éléments :

Vous pouvez ajouter de nouveaux éléments au DOM en utilisant les méthodes `createElement` et `appendChild`.

- **Syntaxe :**

  ```javascript
  const newElement = document.createElement('div');
  newElement.textContent = 'Hello World';
  document.body.appendChild(newElement);
  ```

- **Exemple pratique :**

  ```html
  <script>
      const newElement = document.createElement('div');
      newElement.textContent = 'Hello World';
      document.body.appendChild(newElement); // Ajoute un nouvel élément 'div' avec le contenu 'Hello World' au corps du document
  </script>
  ```

#### Suppression d'éléments :

Vous pouvez supprimer des éléments du DOM en utilisant la méthode `removeChild`.

- **Syntaxe :**

  ```javascript
  const element = document.getElementById('myId');
  document.body.removeChild(element);
  ```

- **Exemple pratique :**

  ```html
  <div id="myId">Hello World</div>
  <script>
      const element = document.getElementById('myId');
      document.body.removeChild(element); // Supprime l'élément avec l'id 'myId'
  </script>
  ```

### Conclusion

La manipulation du DOM est une compétence fondamentale pour tout développeur web. En apprenant à sélectionner et modifier les éléments du DOM, vous pouvez créer des pages web interactives et dynamiques. Pratiquez ces techniques pour renforcer votre compréhension et devenir plus à l'aise avec la manipulation du DOM.

## Exercices pratiques

### Sélection des éléments

1. **Sélectionnez un élément par son ID et modifiez son contenu :**

  ```html
  <div id="exampleId">Original Content</div>
  <script>
      const element = document.getElementById('exampleId');
      element.textContent = 'Modified Content'; // Change le contenu de 'Original Content' à 'Modified Content'
  </script>
  ```

2. **Sélectionnez tous les éléments avec une certaine classe et modifiez leur contenu :**

  ```html
  <div class="exampleClass">Item 1</div>
  <div class="exampleClass">Item 2</div>
  <script>
      const elements = document.getElementsByClassName('exampleClass');
      for (let i = 0; i < elements.length; i++) {
          elements[i].textContent = 'Modified Content'; // Change le contenu de tous les éléments avec la classe 'exampleClass'
      }
  </script>
  ```

### Modification du DOM

1. **Créez un nouvel élément et ajoutez-le au DOM :**

  ```html
  <script>
      const newElement = document.createElement('p');
      newElement.textContent = 'This is a new paragraph.';
      document.body.appendChild(newElement); // Ajoute un nouvel élément 'p' avec le contenu 'This is a new paragraph.' au corps du document
  </script>
  ```

2. **Supprimez un élément du DOM :**

  ```html
  <div id="elementToRemove">This element will be removed</div>
  <script>
      const element = document.getElementById('elementToRemove');
      document.body.removeChild(element); // Supprime l'élément avec l'id 'elementToRemove'
  </script>
  ```

En complétant ces exercices, vous développerez une compréhension pratique de la sélection et de la modification des éléments du DOM en JavaScript.