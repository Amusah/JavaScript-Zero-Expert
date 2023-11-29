/*
 Implementing inheritance between Classes: using ES6 Classes
 OR
 PseudoClassical inheritance using ES6 Classes
*/

class Person {
  constructor(fullName, birthYear){
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  calcAge(){
    console.log(2060 - this.birthYear);
  }

  greet(){
    console.log(`Hey ${this.fullName}`);
  }

  get age(){
    return 2060 - this.birthYear;
  }

  set fullName(name){
    if(name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName(){
    return this._fullName;
  }

  // Static method
  static hey(){
    console.log('Hey there 👋');
  }
}

class Student extends Person{
  /*
    the constructor function can be ignored if you don't need
    additional properties for the child class
  */
  constructor(fullName, birthYear, course){
    // the super keyword must always be invoked first
    super(fullName, birthYear);
    this.course = course;
  }

  introduce(){
    console.log(`My name is ${this.fullName} and i study ${this.course}`);
  }

  greet(){
    console.log(`Hey guys this is ${this.fullName} I love you all`);
  }
}

const henry = new Student('Henry Amusah', '2012', 'UAV Engineering');
console.log(henry);
henry.introduce();
henry.calcAge();
henry.greet();