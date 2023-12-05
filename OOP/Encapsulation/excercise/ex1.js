// Parent class
class Car{
  constructor(make, currentSpeed){
    this.make = make;
    this.currentSpeed = currentSpeed;
  }

  accelerate(){
    this.currentSpeed += 20;
    console.log(`${this.make} going at ${this.currentSpeed}km/h`);
  }

  brake(){
    this.currentSpeed -= 5;
    console.log(`${this.make} going at ${this.currentSpeed}km/h`);
    return this;
  }

  get speedUS(){
    return this.currentSpeed / 1.6;
  }

  set speedUS(speed){
    this.currentSpeed = speed * 1.6;
  }
}


// Child class
class EVCL extends Car {
  #charge;
  constructor(make, currentSpeed, charge){
    super(make, currentSpeed);
    this.make = make;
    this.currentSpeed = currentSpeed;
    this.#charge = charge;
  }

  chargeBattery(chargeTo){
    this.#charge = chargeTo;
    console.log(`${this.make} is charged to ${this.#charge}%`);
    return this;
  }

  accelerate(){ 
    this.currentSpeed += 20;
    this.#charge -= 1;
    console.log(`${this.make} going at ${this.currentSpeed} km/h, with a charge of ${this.#charge}%`);
    return this;
  }
  
}

const rivian = new EVCL('Rivian', 120, 23);
console.log(rivian);
rivian.accelerate()
.accelerate()
.accelerate()
.brake()
.chargeBattery(100)
.accelerate();

console.log(rivian.speedUS);

