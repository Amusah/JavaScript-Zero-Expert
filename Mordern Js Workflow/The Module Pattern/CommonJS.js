/************The CommonJS Modules*************/

// Export
export.addToCart = function(product, quantity){
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

// Import
const { addToCart } = require('./shoppingCart.js');


/*
  The code above will fail to execute in the browser env
  but this module specification exist in earlier versions
  of node.js
*/