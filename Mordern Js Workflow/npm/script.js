import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

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