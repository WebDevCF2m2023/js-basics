## Partie 2 : Fonctions et Portée

### 2.1. Fonctions

Les fonctions sont des blocs de code réutilisables qui effectuent une tâche spécifique. Elles peuvent prendre des arguments en entrée et peuvent retourner une valeur.

#### Définition et appel de fonctions :

Les fonctions en JavaScript peuvent être définies de plusieurs manières. La méthode la plus courante est d'utiliser le mot-clé `function`.

- **Définition d'une fonction :**

  ```javascript
  function greet(name) {
      console.log(`Hello, ${name}!`);
  }
  ```

  Cette fonction prend un argument `name` et affiche un message de salutation.

- **Appel de la fonction :**

  ```javascript
  greet('Alice'); // Affiche : Hello, Alice!
  ```

#### Fonctions anonymes et expressions de fonction :

Une fonction anonyme est une fonction sans nom. Elle est souvent utilisée comme une expression et peut être assignée à une variable.

- **Fonction anonyme :**

  ```javascript
  const greet = function(name) {
      console.log(`Hello, ${name}!`);
  };
  ```

  Ici, une fonction anonyme est assignée à la variable `greet`.

- **Appel de la fonction :**

  ```javascript
  greet('Bob'); // Affiche : Hello, Bob!
  ```

#### Fonctions fléchées (Arrow functions) :

Les fonctions fléchées sont une syntaxe plus concise pour écrire des fonctions anonymes. Elles utilisent la syntaxe `=>`.

- **Fonction fléchée :**

  ```javascript
  const greet = (name) => {
      console.log(`Hello, ${name}!`);
  };
  ```

  Ici, la fonction fléchée est assignée à la variable `greet`.

- **Appel de la fonction :**

  ```javascript
  greet('Charlie'); // Affiche : Hello, Charlie!
  ```

#### Paramètres par défaut :

Les paramètres par défaut permettent de définir des valeurs par défaut pour les paramètres de fonction. Si aucun argument n'est fourni lors de l'appel de la fonction, le paramètre prend la valeur par défaut.

- **Paramètre par défaut :**

  ```javascript
  function greet(name = 'Guest') {
      console.log(`Hello, ${name}!`);
  }
  ```

  Si aucun argument n'est passé à la fonction, `name` prendra la valeur `'Guest'`.

- **Appel de la fonction sans argument :**

  ```javascript
  greet(); // Affiche : Hello, Guest!
  ```

### 2.2. Portée (Scope)

La portée fait référence à l'accès aux variables et fonctions dans différentes parties du code. En JavaScript, il existe plusieurs types de portée : portée globale, portée de fonction, et portée de bloc.

#### Portée globale :

Les variables déclarées en dehors de toute fonction ont une portée globale. Elles sont accessibles depuis n'importe quel endroit dans le code.

- **Exemple de portée globale :**

  ```javascript
  let globalVariable = 'I am global';

  function showGlobal() {
      console.log(globalVariable);
  }

  showGlobal(); // Affiche : I am global
  console.log(globalVariable); // Affiche : I am global
  ```

#### Portée des fonctions :

Les variables déclarées à l'intérieur d'une fonction sont locales à cette fonction. Elles ne sont pas accessibles en dehors de la fonction.

- **Exemple de portée de fonction :**

  ```javascript
  function testScope() {
      let localVariable = 'I am local';
      console.log(localVariable);
  }

  testScope(); // Affiche : I am local
  console.log(localVariable); // Erreur : localVariable is not defined
  ```

#### Portée des blocs avec `let` et `const` :

Les variables déclarées avec `let` et `const` ont une portée de bloc. Cela signifie qu'elles ne sont accessibles qu'à l'intérieur du bloc où elles sont déclarées (par exemple, à l'intérieur d'une boucle ou d'une condition).

- **Exemple de portée de bloc :**

  ```javascript
  let x = 10;

  if (true) {
      let x = 20; // Cette variable x est locale au bloc if
      console.log(x); // Affiche : 20
  }

  console.log(x); // Affiche : 10
  ```

  Dans cet exemple, il y a deux variables `x` distinctes : une dans le bloc `if` et une dans le bloc global.

- **Portée des blocs avec `const` :**

  Les variables déclarées avec `const` ont également une portée de bloc, mais elles ne peuvent pas être réassignées.

  ```javascript
  const y = 10;

  if (true) {
      const y = 20; // Cette variable y est locale au bloc if
      console.log(y); // Affiche : 20
  }

  console.log(y); // Affiche : 10
  ```

### Conclusion

Comprendre les fonctions et la portée des variables est essentiel pour écrire du code JavaScript efficace et sans erreurs. Les fonctions permettent de structurer le code en blocs réutilisables, tandis que la portée des variables aide à contrôler où ces variables sont accessibles. Pratiquez avec les exemples ci-dessus et essayez de créer vos propres fonctions et de gérer la portée des variables pour renforcer votre compréhension.