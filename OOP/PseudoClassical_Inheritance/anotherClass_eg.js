class Account {
  constructor(owner, currency, pin){
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;

    console.log(`Thank you for creating an account with us ${owner}`);
  }

  // Public interface (API)

  greetUser(){
    console.log(`Thank you for creating an account with us ${this.owner}`);
  }

  credit(val){
    this.movements.push(val);
  }

  debit(val){
    this.movements.push(-val);
  }

  approveLoan(val){
    return true;
  }

  requestLoan(val){
    if (this.approveLoan(val)){
      this.credit(val);
      console.log(`A Loan of ${val} has been approved`);
    }
  }
}

const acc1 = new Account('Phina', 'EUR', 1111);
// console.log(acc1);
// acc1.movements.push(1000);
// acc1.movements.push(-50);
acc1.credit(2000);
acc1.debit(50);
acc1.requestLoan(1000);
acc1.approveLoan(1000); // in real world scenario, method shouldn't be accessible
console.log(acc1);

console.log(acc1.pin); // in real world scenario, pin shouldn't be accessible



/*
  the example above justifies the essense of encapsulation
  ...having public and private fields
*/




/*
function BankAccount(owner, currency, pin){
  this.owner = owner;
  this.currency = currency;
  this.pin = pin;
  this.movements = [];
  this.locale = navigator.language;

  console.log(`Thank you for banking with us ${owner}`);
}

BankAccount.prototype.greetUser = function(){
  console.log(`Thank you for banking with us ${this.owner}`);
}

const acc2 = new BankAccount('Henry', 'GHS', 2222);
console.log(acc2);
acc2.greetUser();
*/
