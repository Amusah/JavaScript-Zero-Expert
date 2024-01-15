/**********EVENT LOOP in practice**********/
console.log('Test begin');
setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('Resolved promise 1').then(res => console.log(res)); /* will be executed before timeout 
callback due to microtask priority queue */

/* prove to demonstrate how the microtasks 
queue can starve the callback queue at times */

Promise.resolve('Resolved promise 2').then(res => {
  for(let i = 0; i < 1000000000; i++){}
  console.log(res);
})
console.log('Test ends');