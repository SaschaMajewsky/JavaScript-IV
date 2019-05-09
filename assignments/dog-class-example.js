/*
# Prototypes to Classes Challenge

Challenge: Convert Constructor Functions & Prototype code to use ES6 Classes
*/


class Animal {
    constructor(attributes){
    this.weight = attributes.weight;
    this.height = attributes.height;
    this.food = attributes.food;
    this.sound = attributes.sound;
    this.name = attributes.name;
    this.animalCommonName = attributes.animalCommonName;
    }
    eat() {
    console.log(`The ${this.animalCommonName} eats ${this.food}`);
    }
    speak() {
    console.log(`${this.name} says ${this.sound}`)
    } 
  }
  
  
  class Dog extends Animal{
    // Connect the attributes so we can use the this keyword
    constructor(dogAttributes){
    super(dogAttributes);
    this.breed = dogAttributes.breed;
    this.vaccines = dogAttributes.vaccines;
    }
  }
  // Set up our __proto__ inheritance to Animal
  
  
  const dog = new Dog({
    'name': 'Dr. Doggo',
    'animalCommonName': "dog",
    'weight': 40,
    'height': 12,
    'food': 'meat',
    'sound': 'Woof!',
    'breed': 'Dachsund',
    'vaccines' : 'Vaccinated'
  });
  
  console.log(dog.animalCommonName); // "dog"
  dog.eat(); // "The dog eats meat"
  dog.speak(); // "Dr. Doggo says: Woof!"
  
  console.log(dog.vaccines);
  console.log(dog.weight);

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}