'use strict';
/**************Prototypal inheritance using constructor functions**************/
const Person = function(firstName, birthYear){
  console.log(this) // logs empty object created when invoked with the new keyword
  
  // instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
}

const henry = new Person('Henry', 1995);
console.log(henry);

/*
  when the new keyword is invoked on a function (constructor function),

  1. a new empty object is created || {}
  2. the function is called, with the 'this' keyword pointing to the empty object
  3. the empty object is linked to a prototye object
  4. the created object is automatically returned from the constructor function
*/

const phina = new Person('Josephine', 1986);
const ob = new Person('Mavis', 1991);
console.log(phina, ob);
console.log(phina instanceof Person);

/***************Prototypes****************/
// attaching prototype interface(method) to the person constructor 
Person.prototype.calcAge = function(){
  console.log(2060 - this.birthYear);
  // console.log(this)
}

phina.calcAge();
ob.calcAge();
henry.calcAge();

console.log(henry.__proto__ === Person.prototype);
console.log(henry.__proto__ === phina.__proto__);
console.log(Person.prototype.isPrototypeOf(phina));

// attaching properties(data) to the person constructor
Person.prototype.species = 'Homo Sapiens';

console.log(phina.species);
console.log(phina.hasOwnProperty('firstName')); // true
console.log(phina.hasOwnProperty('species')); // false
console.log(Object.keys(phina));

// inspecting the prototype chain
console.log('*****************Inspecting the prototype chain*****************');
console.log(henry.__proto__);
// Object.prototype (head of prototype chain);
console.log(henry.__proto__.__proto__);
console.dir(Person.prototype.constructor);

const arr = [4, 7, 1, 4, 2, 1, 2, 3, 3, 5, 5, 9, 10, 8];
console.log(arr.__proto__ === Array.prototype);

console.log(Array.prototype);
Array.prototype.unique = function(){
  return [...new Set(this)];
}
console.log(arr.unique());


// Verifying prototypal inheritance between two instances (phina and ob);
console.log(phina.__proto__ === ob.__proto__) // true