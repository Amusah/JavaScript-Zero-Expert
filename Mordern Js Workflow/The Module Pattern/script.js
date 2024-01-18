// Previous module pattern

const shoppingCart2 = (function(){
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity){
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };

  const orderStock = function(product, quantity){
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

shoppingCart2.addToCart('MacBook M2', 4);
shoppingCart2.addToCart('Galileo Telescope', 1);
console.log(shoppingCart2)