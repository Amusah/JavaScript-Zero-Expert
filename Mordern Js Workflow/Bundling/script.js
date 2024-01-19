// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import add, { cart } from './shoppingCart.js'; // default and named ({ cart }) import
import cloneDeep from 'lodash-es';

add('Dell Alienware 17', 1);
add('MacBook M2', 1);
add('Honda Civic', 2);

console.log(cart);


/*********Object Cloning*********/
const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 7}
  ],
  user: { loggedIn: true }
};

const stateClone = Object.assign({}, state); // using native javaScript
const stateDeepClone = cloneDeep(state); // using lodash
state.user.loggedIn = false;
console.log(stateClone);
console.log(stateDeepClone);


// Hot module replacement (the code below is understood my parcel only)
if(module.hot){
  module.hot.accept();
}

class Person{
  greeting = 'Hey';
  constructor(name){
    this.name = name;
    console.log(`${this.greeting}, ${this.name}`);
  }
}
const henry = new Person('Henry')

console.log(cart.find(el => el.quantity >= 2));
Promise.resolve('THIS').then(el => console.log(el))

// Polyfilling
import 'core-js/stable';

// Polyfilling async functions
import 'regenerator-runtime/runtime';
