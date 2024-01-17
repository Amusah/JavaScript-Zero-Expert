/****************** named import ********************/

// Importing module
/*
  import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
  addToCart('MacBook M2', 2);
  console.log(price, tq);
*/

console.log('Importing module');
/*
import * as shoppingCart from './shoppingCart.js';
shoppingCart.addToCart('MacBook M2', 2);
console.log(shoppingCart.totalPrice);

*/


/****************** default import ********************/
// import add from './shoppingCart.js';
import add, { cart } from './shoppingCart.js'; // default and named ({ cart }) import
add('Dell Alienware 17', 1);
add('MacBook M2', 1);
add('Honda Civic', 2);

console.log(cart);