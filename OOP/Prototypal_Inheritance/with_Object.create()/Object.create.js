// Prototypal inheritance with Object.create()

const PersonProto = {
  kofi: 87,
  calcAge(){
    console.log(2060 - this.birthYear);
  },

  init(firstName, birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
}

// creates an object (henry) and manually sets it prototype object to PersonProto object
const henry = Object.create(PersonProto); 
console.log(henry);
henry.name = 'Henry Amusah';
henry.birthYear = 1995;
console.log(henry)
henry.calcAge();

console.log(henry.__proto__);
console.log(henry.__proto__ === PersonProto);
// console.log(henry.hasOwnProperty('name'));

// creates an object (phina) and manually sets it prototype object to PersonProto object
const phina = Object.create(PersonProto);
console.log(phina)
phina.init('Josephine Amusah', 1986);
console.log(phina);

// verify prototypal inheritance between two instances (henry and phina)
console.log(henry.__proto__ === phina. __proto__) // true