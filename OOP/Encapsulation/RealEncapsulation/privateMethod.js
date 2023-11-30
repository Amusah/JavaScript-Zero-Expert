/*
  Types of fields
  1. Public fields
  2. Private fields
  3. public methods
  4. Private methods
*/


class Account {
  // public fields
  locale = navigator.language;

  // private fields
   #movements = [];
   #pin;

  constructor(owner, currency, pin){
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // this._movements = []; // protected
    // this.locale = navigator.language;

    console.log(`Thank you for creating an account with us ${owner}`);
  }

  // Public interface (API)

  getMovement(){
    return this._movements;
  }

  greetUser(){
    console.log(`Thank you for creating an account with us ${this.owner}`);
  }

  credit(val){
    this.#movements.push(val);
  }

  debit(val){
    this.#movements.push(-val);
  }

  requestLoan(val){
    if (this.#approveLoan(val)){
      this.credit(val);
      console.log(`A Loan of ${val} has been approved`);
    }
  }
  
  // private methods
   #approveLoan(val){
    return true;
  }
}

const acc1 = new Account('Phina', 'EUR', 1111);
// console.log(acc1);
// acc1._movements.push(1000);
// acc1._movements.push(-50);
acc1.credit(2000);
acc1.debit(50);
acc1.requestLoan(1000);
//acc1.#approveLoan(1000); // in real world scenario, method shouldn't be accessible
console.log(acc1);

console.log(acc1.pin); // in real world scenario, pin shouldn't be accessible

// console.log(acc1.#movements) // error
// console.log(acc1.#pin); // error
