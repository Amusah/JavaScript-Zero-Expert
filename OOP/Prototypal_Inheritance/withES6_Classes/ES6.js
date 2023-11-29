/**********Prototypal inheritance with ES6 Class declaration**********/

// class declaration
class Person {
  constructor(firstName, birthYear){
    console.log(this) // logs an empty object
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // .prototype propertis
  calcAge(){
    console.log(2060 - this.birthYear);
  }

  greet(){
    console.log(`Good morning ${this.firstName}`);
  }

  get age(){
    return 2060 - this.birthYear;
  }
}

const berth = new Person('Bertha', 1999);
console.log(berth);
berth.calcAge();

console.log(berth.__proto__ === Person.prototype);

// Person.prototype.greet = function(){
//   console.log(`Hey ${this.firstName}`);
// }

berth.greet();
console.log(berth.age);


/******Things to note about classes********/
// 1. Classes are just special type of functions and not traditional classes from other OOP languages like java
// 2. Classes are NOT hoisted (cannot be accessed before declaration)
// 3. Classes are first-class citizens (can be passed into function and returned from functions)
// 4. Classes are by default executed in strict mode



/********************Getters and Setters********************/
console.log('********************Getters and Setters********************');
const account = {
  owner: 'Henry',
  movements: [200, 400, 730, 100],

  get latest(){
    return this.movements.slice(-1).pop();
  },

  set latest(mov){
    this.movements.push(mov)
  }
};

console.log(account.latest);
account.latest = 777;
console.log(account.movements);


/********************Simple Getters and Setters use case********************/
console.log('********************Getters and Setters use case********************');
class Person1 {
  constructor(fullName, birthYear){
    console.log(this) // logs an empty object
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  kofi = 89;

  // .prototype propertis
  calcAge(){
    console.log(2060 - this.birthYear);
  }

  greet(){
    console.log(`Good morning ${this.fullName}`);
  }

  get age(){
    return 2060 - this.birthYear;
  }

  set fullName(name){
    console.log(name)
    if(name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName(){
    return this._fullName;
  }

  // static methods are not available in prototype object, hence are not inherited by class instances
  static hey(){
    console.log('Hey there 👋');
  }
}

const henry = new Person1('Henry Amusah', 1995);
console.log(henry) 
// henry.hey() // returns an error
Person1.hey()

const phina = new Person1('Josephine Amusah', 1986);
console.log(phina);


// Verifying prototype inheritance between henry and phina instances
console.log(henry.__proto__ === phina.__proto__);