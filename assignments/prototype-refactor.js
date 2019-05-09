/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
class GameObject {
    constructor(gameObjectAttributes){
        this.createdAt = gameObjectAttributes.createdAt;
        this.name = gameObjectAttributes.name;
        this.dimensions = gameObjectAttributes.dimensions;
    }
    destroy(){
        return `${this.name} was removed from the game.`;
    }
  }
  

  
  /*
    === CharacterStats ===
    * healthPoints
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */
  class CharacterStats extends GameObject{
    constructor(characterStatsAttributes){
        super(characterStatsAttributes);
        this.name = characterStatsAttributes.name;
        this.healthPoints = characterStatsAttributes.healthPoints;
  }
  takeDamage() {
    return `${this.name} took damage`;
  }
}
  
  /*
    === Humanoid (Having an appearance or character resembling that of a human.) ===
    * team
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */
  class Humanoid extends CharacterStats{
    constructor(humanoidAttributes){
        super(humanoidAttributes);
        this.team = humanoidAttributes.team;
        this.weapons = humanoidAttributes.weapons;
        this.language = humanoidAttributes.language;
  }
  greet() {
    return `${this.name} offers a greeting in ${this.language}.`;
    }
}

//At first I thought I have to use multiple interitance and use Humanoid extends GameObject.
//Just in case, there is no direct multiple inheritance but it would work out like this.
//Humanoid.prototype.takeDamage = CharacterStats.prototype.takeDamage;
  
  /*
    * Inheritance chain: GameObject -> CharacterStats -> Humanoid
    * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
    * Instances of CharacterStats should have all of the same properties as GameObject.
  */
  
  // Test you work by un-commenting these 3 objects and the list of console logs below:
  
  
    const mage = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 5,
      name: 'Bruce',
      team: 'Mage Guild',
      weapons: [
        'Staff of Shamalama',
      ],
      language: 'Common Tongue',
    });
  
    const swordsman = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      healthPoints: 15,
      name: 'Sir Mustachio',
      team: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Tongue',
    });
  
    const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Lilith',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    });
  
    console.log(mage.createdAt); // Today's date
    console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    console.log(swordsman.healthPoints); // 15
    console.log(mage.name); // Bruce
    console.log(swordsman.team); // The Round Table
    console.log(mage.weapons); // Staff of Shamalama
    console.log(archer.language); // Elvish
    console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    console.log(mage.takeDamage()); // Bruce took damage.
    console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  
  
    // Stretch task: 
    // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
    // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
    // * Create two new objects, one a villain and one a hero and fight it out with methods!
  
  
  
   /*  function Player(name) {
      this.name = name
      }
      
      Person.prototype.sayName = function sayName() {
      console.log(`My name is ${this.name} I am team ${this.team}`);
      
      function GreenTeamPlayer(name) {
      Player.call(this, name)
      this.team = 'green'
      }
      
      GreenTeamPlayer.prototype = Object.create(Player.prototype)
      
      function RedTeamPlayer(name) {
      Player.call(this, name)
      this.team = 'red'
      }
      
      RedTeamPlayer.prototype = Object.create(Player.prototype)
      
      const dan = new GreenTeamPlayer('Dan')
      const cat = new RedTeamPlayer('Rosie')
      
      dan.name()
      cat.sayName()
       */
      
  /*
      # Prototypes Challenge
  
        Overview: Study the console.log() and object method invocations at the bottom of the page. Update the Animal and Dog constructors so that the logs and methods match the commented result next to them.
        
        Challenge: Add the missing `speak` method, complete the `eat` method
  */
  
  /* 
      function Animal(attributes) {
        this.weight = attributes.weight;
        this.height = attributes.height;
        this.food = attributes.food;
      }
  
      Animal.prototype.eat = function() {
        console.log(`The ${this.animalCommonName} eats ${this.food}`);
      }
  
      Animal.prototype.speak = function() {
        console.log(`${this.name} says: ${this.bark}`);
      }
  
      function Dog(dogAttributes) {
        // Connect the attributes so we can use the this keyword
        Animal.call(this, dogAttributes);
        this.name = dogAttributes.name;
        this.bark = dogAttributes.bark;
        this.animalCommonName = dogAttributes.animalCommonName;
      }
      // Set up our __proto__ inheritance to Animal
      Dog.prototype = Object.create(Animal.prototype);
  
      const dog = new Dog({
        'name': 'Dr. Doggo',
        'animalCommonName': "dog",
        'weight': 40,
        'height': 12,
        'food': 'meat',
        'bark': 'Woof!'
      });
  
      console.log(dog.animalCommonName); // "dog"
      dog.eat(); // "The dog eats meat"
      dog.speak(); // "Dr. Doggo says: Woof!"
  */