function Car(make){
  this.make = make;
  this.speed = 0;
}
// Car.prototype.speed = 0;

Car.prototype.accelerate = function(){
  this.speed += 10;
  console.log(`${this.make} going at ${this.speed} km/h`);
}

Car.prototype.brake = function(){
  this.speed -= 5;
  console.log(`${this.make} going at ${this.speed} km/h`);
}

let firstCar = new Car('Toyota');
let secondCar = new Car('Tesla');
firstCar.accelerate();
firstCar.brake();

secondCar.accelerate();
