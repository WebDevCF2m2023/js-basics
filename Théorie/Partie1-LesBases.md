## Partie 1 : Les Bases de JavaScript

### 1.1. Variables et Types de Données

**Théorie :**

#### Déclaration de variables :

- **`let`** : Utilisé pour déclarer des variables dont la valeur peut changer.

  ```javascript
  let age = 25; // La variable 'age' peut être modifiée
  ```

- **`const`** : Utilisé pour déclarer des variables dont la valeur ne change pas.

  ```javascript
  const name = "Alice"; // La variable 'name' ne peut pas être modifiée
  ```

- **`var`** : Ancienne façon de déclarer des variables. `let` et `const` sont préférés pour leurs portées plus prévisibles.

  ```javascript
  var isStudent = true; // Utilisé dans les anciennes versions de JavaScript
  ```

#### Types de données primaires :

- **`number`** : Pour les nombres, qu'ils soient entiers ou décimaux.

  ```javascript
  let age = 25; // Type number
  ```

- **`string`** : Pour les chaînes de caractères.

  ```javascript
  const name = "Alice"; // Type string
  ```

- **`boolean`** : Pour les valeurs vraies (`true`) ou fausses (`false`).

  ```javascript
  let isStudent = true; // Type boolean
  ```

- **`null`** : Représente une absence de valeur intentionnelle.

  ```javascript
  let emptyValue = null; // Type null
  ```

- **`undefined`** : Une variable à laquelle aucune valeur n'a été assignée.

  ```javascript
  let notAssigned; // Type undefined
  ```

- **`bigint`** : Pour les très grands nombres entiers.

  ```javascript
  let bigNumber = 12345678901234567890n; // Type bigint
  ```

- **`symbol`** : Pour créer des identifiants uniques.

  ```javascript
  let uniqueID = Symbol("id"); // Type symbol
  ```

#### Types complexes :

- **`object`** : Pour les collections de données ou des entités plus complexes.

  ```javascript
  let person = {
      firstName: "John",
      lastName: "Doe"
  }; // Type object
  ```

- **`array`** : Pour les listes ordonnées de valeurs.

  ```javascript
  let hobbies = ["reading", "gaming", "coding"]; // Type object (array)
  ```

### 1.2. Opérateurs

**Théorie :**

#### Opérateurs arithmétiques :

Utilisés pour effectuer des calculs.

- `+` : Addition
- `-` : Soustraction
- `*` : Multiplication
- `/` : Division
- `%` : Modulo (reste de la division)

```javascript
let a = 5;
let b = 2;

console.log(a + b); // 7
console.log(a - b); // 3
console.log(a * b); // 10
console.log(a / b); // 2.5
console.log(a % b); // 1
```

#### Opérateurs de comparaison :

Utilisés pour comparer des valeurs.

- `==` : Égalité (vérifie l'égalité de valeur, pas de type)
- `===` : Égalité stricte (vérifie l'égalité de valeur et de type)
- `!=` : Inégalité
- `!==` : Inégalité stricte
- `>` : Supérieur à
- `<` : Inférieur à
- `>=` : Supérieur ou égal à
- `<=` : Inférieur ou égal à

```javascript
let a = 5;
let b = 2;

console.log(a == 5); // true
console.log(a === "5"); // false
console.log(a != b); // true
console.log(a !== 5); // false
console.log(a > b); // true
console.log(a < b); // false
```

#### Opérateurs logiques :

Utilisés pour combiner des expressions booléennes.

- `&&` : ET logique (vrai si les deux opérandes sont vrais)
- `||` : OU logique (vrai si au moins un des opérandes est vrai)
- `!` : NON logique (inverse la valeur)

```javascript
let a = 10;
let b = 20;

console.log(a > 5 && b > 15); // true
console.log(a > 15 || b > 15); // true
console.log(!(a > 5)); // false
```

### 1.3. Structures de Contrôle

**Théorie :**

#### Conditions :

Utilisées pour exécuter du code en fonction de certaines conditions.

- **`if`** : Exécute un bloc de code si la condition est vraie.
- **`else if`** : Exécute un autre bloc de code si la première condition est fausse et la condition suivante est vraie.
- **`else`** : Exécute un bloc de code si toutes les conditions précédentes sont fausses.

```javascript
let score = 75;

if (score >= 90) {
    console.log('Grade: A');
} else if (score >= 80) {
    console.log('Grade: B');
} else if (score >= 70) {
    console.log('Grade: C');
} else {
    console.log('Grade: F');
}
```

- **`switch`** : Exécute différents blocs de code en fonction de la valeur d'une variable.

```javascript
let grade = 'B';

switch (grade) {
    case 'A':
        console.log('Excellent');
        break;
    case 'B':
        console.log('Très bien');
        break;
    case 'C':
        console.log('Bien');
        break;
    case 'D':
        console.log('Satisfaisant');
        break;
    case 'F':
        console.log('Échec');
        break;
    default:
        console.log('Note invalide');
        break;
}
```

#### Boucles :

Utilisées pour répéter un bloc de code.

- **`for`** : Répète un bloc de code un nombre déterminé de fois.

  ```javascript
  for (let i = 0; i < 5; i++) {
      console.log(`Iteration ${i}`);
  }
  ```

- **`while`** : Répète un bloc de code tant qu'une condition est vraie.

  ```javascript
  let i = 0;
  while (i < 5) {
      console.log(`Iteration ${i}`);
      i++;
  }
  ```

- **`do while`** : Répète un bloc de code au moins une fois, puis continue tant qu'une condition est vraie.

  ```javascript
  let i = 0;
  do {
      console.log(`Iteration ${i}`);
      i++;
  } while (i < 5);
  ```

- **`for...of`** : Parcourt les éléments d'un objet itérable (comme un tableau).

  ```javascript
  let fruits = ["apple", "banana", "cherry"];
  for (let fruit of fruits) {
      console.log(fruit);
  }
  ```

- **`for...in`** : Parcourt les propriétés énumérables d'un objet.

  ```javascript
  let person = { firstName: "John", lastName: "Doe" };
  for (let key in person) {
      console.log(`${key}: ${person[key]}`);
  }
  ```

### Conclusion

Ces concepts de base sont essentiels pour comprendre JavaScript et commencer à écrire du code. Ils forment le socle sur lequel vous pouvez construire des compétences plus avancées en programmation.
