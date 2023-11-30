class Account {
  constructor(owner, currency, pin){
    this.owner = owner;
    this.currency = currency;
    this._pin = pin;
    this._movements = []; // protected
    this.locale = navigator.language;

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
    this._movements.push(val);
  }

  debit(val){
    this._movements.push(-val);
  }

  _approveLoan(val){
    return true;
  }

  requestLoan(val){
    if (this._approveLoan(val)){
      this.credit(val);
      console.log(`A Loan of ${val} has been approved`);
    }
  }
}

const acc1 = new Account('Phina', 'EUR', 1111);
// console.log(acc1);
// acc1._movements.push(1000);
// acc1._movements.push(-50);
acc1.credit(2000);
acc1.debit(50);
acc1.requestLoan(1000);
acc1._approveLoan(1000); // in real world scenario, method shouldn't be accessible
console.log(acc1);

console.log(acc1.pin); // in real world scenario, pin shouldn't be accessible


/*
  the prefix _ does not entirely make the method or property private
  it's just a convention that informs other developers as such
*/