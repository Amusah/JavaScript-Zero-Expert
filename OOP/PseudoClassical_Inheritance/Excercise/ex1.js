// Parent class
const Car = function(make, currentSpeed){
  this.make = make;
  this.currentSpeed = currentSpeed;
}
Car.prototype.accelerate = function(){
  this.currentSpeed += 20;
  console.log(`${this.make} going at ${this.currentSpeed}km/h`);
}
Car.prototype.brake = function(){
  this.currentSpeed -= 5;
  console.log(`${this.make} going at ${this.currentSpeed}km/h`);
}

// Child class
const EV = function(make, currentSpeed, charge){
  Car.call(this, make, currentSpeed);
  this.charge = charge;
}

// link child's prototype to parent's prototype;
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function(chargeTo){
  this.charge = chargeTo;
  console.log(`${this.make} is charged to ${this.charge}%`);
}

EV.prototype.accelerate = function(){ // polymorphism
  this.currentSpeed += 20;
  this.charge -= 1;
  console.log(`${this.make} going at ${this.currentSpeed} km/h, with a charge of ${this.charge}%`);
}

const tesla = new EV('Tesla', 120, 23);
console.log(tesla);
tesla.accelerate();
tesla.accelerate();
tesla.chargeBattery(50);
tesla.accelerate();

EV.prototype.constructor = EV;
console.dir(EV.prototype.constructor);