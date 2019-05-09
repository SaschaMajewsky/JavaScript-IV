// CODE here for your Lambda Classes

/* // version one - downside is no IntelliSense automcomplete - upside shorter to write
class Person {
    constructor(personAttributes) {
        this.name = personAttributes.name;
        this.age = personAttributes.age;
        this.location = personAttributes.location;
        this.language = personAttributes.language;
    }
    speak() {
        return `Hello, my name is ${this.name}, I am from ${this.location}`;
      }
} */


class Person {
    constructor({name, age = 0, location, language = 'english'}) {
        this.name = name;
        this.age = age;
        this.location = location;
        this.language = language;
    }
    speak() {
        return `Hello, my name is ${this.name}, I am from ${this.location}`;
    }
}

/* // version one - downside is no IntelliSense automcomplete - upside shorter to write
 class Instructor extends Person {
    constructor(instructorAttributes) {
        super(instructorAttributes);
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
        this.speciality = instructorAttributes.speciality;
    }
} */


class Instructor extends Person {
    constructor({name, age = 0, location, language = 'english', favLanguage, catchPhrase, speciality}) {
        super({name, age, location, language});
        this.favLanguage = favLanguage;
        this.catchPhrase = catchPhrase;
        this.speciality = speciality;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(studentObj, subject) {
        return `${studentObj.name} receives a perfect score on ${subject}`;
    }
}


/* // version one - downside is no IntelliSense automcomplete - upside shorter to write
class Student extends Person {
    constructor(studentAttributes) {
        super(studentAttributes);
        this.cohort = studentAttributes.cohort;
        this.alumniStatus = studentAttributes.alumniStatus;
    }
}
 */

class Student extends Person {
    constructor({name, age = 0, location, language = 'english', previousBackground, favSubject}) {
        super({name, age, location, language});
        this.previousBackground = previousBackground;
        this.favSubject = favSubject;
    }
    listsSubjects() {
        this.favSubject.map(function(subject){
            console.log(subject);
        })
    }
    PRAssignment (subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}


class ProjectManager extends Instructor {
    constructor({name, age = 0, location, language = 'english', favLanguage, catchPhrase, speciality, gradClassName, favInstructor}) {
        super({name, age, location, language, favLanguage, catchPhrase, speciality});
        this.gradClassName = gradClassName;
        this.favInstructor = favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
    }
    debugsCode (studentObj, subject) {
        return `${this.name} debugs ${studentObj.name}'s code on ${subject}`;
    }
}


const alex = new Person({
    name: 'Alex',
    age: 22,
    location: 'Berlin',
    language: 'German'});

const sascha = new Student({
    name: 'Sascha',
    age: 25,
    location: 'Hamburg',
    language: 'german',
    previousBackground: 'finance',
    favSubject: ['JavaScript', 'HTML', 'CSS']
});

const ben = new Student({
    name: 'Ben',
    age: 28,
    location: 'NYC',
    language: 'english',
    previousBackground: 'surfing',
    favSubject: ['HTML', 'CSS']
});

const dan = new Instructor({
    name: 'Dan',
    age: 35,
    location: 'NYC',
    language: 'english',
    favLanguage: 'JavaScript',
    catchPhrase: 'Stay PAWsitive!',
    speciality: 'Making good toast'
});

const josh = new Instructor({
    name: 'Josh',
    age: 30,
    location: 'Texas',
    language: 'english',
    favLanguage: 'Python',
    catchPhrase: 'A userface is like a joke. If you have to explain it, it is not that good',
speciality: 'Teaching'
});

const elan = new ProjectManager({
    name: 'Elan',
    age: 25,
    location: 'NYC',
    language: 'english',
    favLanguage: 'JavaScript',
    catchPhrase: 'A userface is like a joke. If you have to explain it, it is not that good',
    speciality: 'Teaching',
    gradClassName: 'WEB17',
    favInstructor: 'Josh'
});

const adam = new ProjectManager({
    name: 'Adam',
    age: 28,
    location: 'Washington',
    language: 'english',
    favLanguage: 'JavaScript',
    catchPhrase: 'consologe.log("Code works until here");',
    speciality: 'Managing Standups',
    gradClassName: 'WEB17',
    favInstructor: 'Keiran'
});


// Destructuring Example
const {name, age} = sascha; //const name = sascha.name
console.log('Extraced Keys aka Destructuring:' , name, age);

console.log(alex);
console.log(sascha);
console.log(ben);
console.log(dan);
console.log(josh);
console.log(elan);
console.log(adam);

console.log(alex.speak());
console.log(sascha.speak());
console.log(ben.speak());
console.log(dan.speak());
console.log(josh.speak());
console.log(elan.speak());
console.log(adam.speak());

sascha.listsSubjects();
console.log(sascha.PRAssignment('Assembler'));

ben.listsSubjects();
console.log(ben.PRAssignment('Kung-Fu'));

console.log(dan.demo('CSS'));
console.log(dan.grade(sascha, 'HTML'));

console.log(josh.demo('Python'));
console.log(josh.grade(ben, 'Python'));

console.log(elan.standUp('Hires'));
console.log(elan.debugsCode(sascha, 'HTML'));

console.log(adam.standUp('AfterHours'));
console.log(adam.debugsCode(ben, 'CSS'));