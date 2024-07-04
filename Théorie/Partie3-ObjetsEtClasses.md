## Partie 3 : Objets et Classes

### 3.1. Objets

Les objets sont des collections de propriétés, où chaque propriété est une association entre un nom (ou clé) et une valeur. Les objets sont utilisés pour stocker des données structurées et représentent des entités du monde réel de manière plus abstraite et complexe.

#### Création et manipulation d'objets :

Un objet peut être créé en utilisant des accolades `{}` et en définissant des paires clé-valeur.

- **Création d'un objet :**

  ```javascript
  let person = {
      firstName: 'John',
      lastName: 'Doe',
      age: 30
  };
  ```

  Cet objet `person` a trois propriétés : `firstName`, `lastName`, et `age`.

- **Accès aux propriétés :**

  Les propriétés d'un objet peuvent être accédées de deux manières : par notation par point (`.`) ou par notation par crochets (`[]`).

  ```javascript
  console.log(person.firstName); // Accès via notation par point, affiche : John
  console.log(person['lastName']); // Accès via notation par crochets, affiche : Doe
  ```

- **Modification des propriétés :**

  Les valeurs des propriétés d'un objet peuvent être modifiées en utilisant la notation par point ou par crochets.

  ```javascript
  person.age = 31; // Modification via notation par point
  person['firstName'] = 'Jane'; // Modification via notation par crochets
  console.log(person.age); // Affiche : 31
  console.log(person.firstName); // Affiche : Jane
  ```

- **Ajout et suppression de propriétés :**

  Vous pouvez ajouter de nouvelles propriétés à un objet ou supprimer des propriétés existantes.

  ```javascript
  person.email = 'john.doe@example.com'; // Ajout d'une nouvelle propriété
  console.log(person.email); // Affiche : john.doe@example.com

  delete person.age; // Suppression d'une propriété
  console.log(person.age); // Affiche : undefined
  ```

#### Méthodes d'objet :

Les méthodes sont des fonctions définies en tant que propriétés d'un objet. Elles permettent d'effectuer des opérations sur les données de l'objet.

- **Définition d'une méthode :**

  ```javascript
  let person = {
      firstName: 'John',
      lastName: 'Doe',
      age: 30,
      fullName: function() {
          return `${this.firstName} ${this.lastName}`;
      }
  };
  ```

  Dans cet exemple, `fullName` est une méthode de l'objet `person` qui retourne le nom complet.

- **Appel d'une méthode :**

  ```javascript
  console.log(person.fullName()); // Appel de la méthode, affiche : John Doe
  ```

### 3.2. Classes

Les classes en JavaScript sont des modèles pour créer des objets. Elles encapsulent des données avec du code pour travailler sur ces données. Les classes sont introduites dans ECMAScript 6 (ES6) comme une manière plus simple de créer des objets et de gérer l'héritage.

#### Définition de classes :

Une classe est définie à l'aide du mot-clé `class` suivi du nom de la classe.

- **Définition d'une classe :**

  ```javascript
  class Person {
      constructor(firstName, lastName, age) {
          this.firstName = firstName;
          this.lastName = lastName;
          this.age = age;
      }

      fullName() {
          return `${this.firstName} ${this.lastName}`;
      }
  }
  ```

  Dans cet exemple, `Person` est une classe avec un constructeur et une méthode `fullName`.

  - **Constructeur :**

    Le constructeur est une méthode spéciale pour initialiser les objets créés à partir de la classe. Il est appelé automatiquement lors de la création d'une nouvelle instance de la classe.

    ```javascript
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    ```

  - **Méthode :**

    La méthode `fullName` retourne le nom complet de la personne.

    ```javascript
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    ```

- **Création d'une instance de classe :**

  Vous pouvez créer une nouvelle instance de la classe en utilisant le mot-clé `new`.

  ```javascript
  const john = new Person('John', 'Doe', 30);
  console.log(john.fullName()); // Affiche : John Doe
  ```

#### Héritage :

L'héritage permet de créer une nouvelle classe basée sur une classe existante. La nouvelle classe héritera des propriétés et méthodes de la classe parent.

- **Définition d'une sous-classe :**

  Vous pouvez créer une sous-classe qui hérite d'une autre classe en utilisant le mot-clé `extends`.

  ```javascript
  class Student extends Person {
      constructor(firstName, lastName, age, grade) {
          super(firstName, lastName, age); // Appelle le constructeur de la classe parent
          this.grade = grade;
      }

      studentInfo() {
          return `${this.fullName()}, Grade: ${this.grade}`;
      }
  }
  ```

  Dans cet exemple, `Student` est une sous-classe de `Person`. Elle hérite des propriétés `firstName`, `lastName`, et `age`, et ajoute une nouvelle propriété `grade`.

  - **Appel du constructeur de la classe parent :**

    Le mot-clé `super` est utilisé pour appeler le constructeur de la classe parent.

    ```javascript
    super(firstName, lastName, age);
    ```

  - **Méthode supplémentaire :**

    La méthode `studentInfo` retourne les informations de l'étudiant, y compris le nom complet et la note.

    ```javascript
    studentInfo() {
        return `${this.fullName()}, Grade: ${this.grade}`;
    }
    ```

- **Création d'une instance de la sous-classe :**

  Vous pouvez créer une nouvelle instance de la sous-classe en utilisant le mot-clé `new`.

  ```javascript
  const student = new Student('Jane', 'Doe', 20, 'A');
  console.log(student.studentInfo()); // Affiche : Jane Doe, Grade: A
  ```

### Conclusion

Les objets et les classes sont des concepts fondamentaux en JavaScript pour structurer et organiser votre code. Les objets permettent de représenter des entités du monde réel avec des propriétés et des méthodes. Les classes facilitent la création de ces objets et permettent de gérer l'héritage de manière efficace. Pratiquez en créant vos propres objets et classes pour renforcer votre compréhension.

## Exercices pratiques

### Objets

1. **Créer un objet représentant une voiture avec des propriétés pour la marque, le modèle et l'année. Affichez chaque propriété dans la console.**

  ```javascript
  let car = {
      brand: 'Toyota',
      model: 'Corolla',
      year: 2020
  };
  console.log(car.brand); // Affiche : Toyota
  console.log(car.model); // Affiche : Corolla
  console.log(car.year); // Affiche : 2020
  ```

2. **Ajouter une méthode à l'objet voiture pour afficher une description de la voiture. Appelez cette méthode et affichez la description dans la console.**

  ```javascript
  car.getDescription = function() {
      return `${this.brand} ${this.model}, Year: ${this.year}`;
  };
  console.log(car.getDescription()); // Affiche : Toyota Corolla, Year: 2020
  ```

3. **Modifier une propriété de l'objet voiture et ajouter une nouvelle propriété pour la couleur. Affichez les modifications dans la console.**

  ```javascript
  car.year = 2021; // Modifier l'année
  car.color = 'Blue'; // Ajouter une nouvelle propriété pour la couleur
  console.log(car.year); // Affiche : 2021
  console.log(car.color); // Affiche : Blue
  ```

### Classes

1. **Créer une classe `Animal` avec un constructeur pour le nom et l'espèce. Ajouter une méthode `describe` pour afficher une description de l'animal. Créez une instance de cette classe et appelez la méthode `describe`.**

  ```javascript
  class Animal {
      constructor(name, species) {
          this.name = name;
          this.species = species;
      }

      describe() {
          return `${this.name} is a ${this.species}`;
      }
  }

  const lion = new Animal('Leo', 'Lion');
  console.log(lion.describe()); // Affiche : Leo is a Lion
  ```

2. **Créer une sous-classe `Dog` qui hérite de `Animal` et ajoute une propriété pour la race. Ajouter une méthode `bark` qui affiche un message d'aboiement. Créez une instance de cette sous-classe et appelez les méthodes `describe` et `bark`.**

  ```javascript
  class Dog extends Animal {
      constructor(name, species, breed) {
          super(name, species);
          this.breed = breed;
      }

      bark() {
          return 'Woof! Woof!';
      }

      describe() {
          return `${super.describe()} of breed ${this.breed}`;
      }


  }

  const myDog = new Dog('Buddy', 'Dog', 'Golden Retriever');
  console.log(myDog.describe()); // Affiche : Buddy is a Dog of breed Golden Retriever
  console.log(myDog.bark()); // Affiche : Woof! Woof!
  ```

En complétant ces exercices, vous développerez une compréhension pratique des objets et des classes en JavaScript.