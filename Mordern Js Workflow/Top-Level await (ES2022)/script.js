// /****************** named import ********************/

// // Importing module
// /*
//   import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
//   addToCart('MacBook M2', 2);
//   console.log(price, tq);
// */

// console.log('Importing module');
// /*
// import * as shoppingCart from './shoppingCart.js';
// shoppingCart.addToCart('MacBook M2', 2);
// console.log(shoppingCart.totalPrice);

// */


// /****************** default import ********************/
// // import add from './shoppingCart.js';
// import add, { cart } from './shoppingCart.js'; // default and named ({ cart }) import
// add('Dell Alienware 17', 1);
// add('MacBook M2', 1);
// add('Honda Civic', 2);

// console.log(cart);
/*
  The top-level await, which is an added feature to the language
  ES2022, makes it possible to use the 'await' keyword outside 
  an async function, ONLY IN THE CASE OF MODULES

  one caveat here is, top-level await blocks execution of program
*/

console.log('Start Fetching')
const res = await fetch('https://jsonplaceholder.typicode.com/posts');
console.log(res)

const data = await res.json();
console.log(data);

console.log('Fetching ended');


// real world use case of top-level await
const getLastPost = async function(){
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return {
    title: data.at(-1).title,
    text: data.at(-1).body
  };
}

const lastPost = getLastPost();
console.log(lastPost) // Promise {<pending>} cos async func returns promise

const newPost = await getLastPost();
console.log(newPost);