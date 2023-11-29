const PersonProto = {
  calcAge(){
    console.log(2023 - this.birthYear)
  }, 

  init(firstName, birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

// Parent class
const studentProto = Object.create(PersonProto);

// Polymorphism here
studentProto.init = function(firstName, birthYear, course){
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
}

studentProto.introduce = function(){
  console.log(`My name is ${this.firstName}, and i study ${this.course}`);
}

// Child class
const henry = Object.create(studentProto);
console.log(henry);
henry.init('Henry', 1995, 'Computer Science');
henry.introduce();
henry.calcAge()
console.log(henry);


