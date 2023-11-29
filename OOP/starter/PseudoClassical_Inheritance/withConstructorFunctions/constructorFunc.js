/*
 Implementing inheritance between Classes: using Constructor Functions 
 OR
 PseudoClassical inheritance using Constructor Functions
*/

// Parent class
const Person = function(firstName, birthYear){
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function(){
  console.log(2037 - this.birthYear);
}

// Child class
const Student = function(firstName, birthYear, course){
  Person.call(this, firstName, birthYear);
  this.course = course;
}

// linking prototypes manually
Student.prototype = Object.create(Person.prototype);
// Student.prototype = new Person()

Student.prototype.introduce = function(){
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const henry = new Student('Henry', 2020, 'Computer Science');
henry.introduce();
henry.calcAge();
console.log(henry.__proto__);
console.log(henry.__proto__.__proto__);

console.log(henry instanceof Student);
console.log(henry instanceof Person);
console.log(henry instanceof Object);

console.dir(Student.prototype.constructor); // Person instead of Student
// quick fix
Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);


/*
  the main function of Object.create() is to allow you to 
  create an object and manually set it prototypes
*/