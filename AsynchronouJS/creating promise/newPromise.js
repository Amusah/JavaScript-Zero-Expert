/****Building a simple promise****/

// new Promise(executor function(resolve, reject)){}

const lotteryPromise = new Promise(function(resolve, reject){
  console.log('Lottery is on')
  setTimeout(function(){
    if(Math.random() >= 0.5) {
    resolve('You win');
  } else {
    reject(new Error('Sorry try again'));
  }
  }, 2000);
});

// consuming promise
lotteryPromise.then(res => console.log(res))
.catch(err => console.error(err));

// Promisifying setTimeout func
const wait = function(seconds){
  return new Promise(function(resolve){
    setTimeout(resolve, seconds * 1000);
  })
}

// consuming...
wait(2).then(() => {
  console.log('I waited for 2 seconds');
  return wait(1);
}).then(() => console.log('I waited for 1 second'));


// creating a promise that resolves immediately
Promise.resolve('i resolved immediately').then(x => console.log(x));

// creating a promise that rejects immediately
Promise.reject('i rejected immediately').catch(err => console.error(err));



/*
  Promisifying is a technique that is used to convert callback based async
  operations / behaviour into promise based operation / behaviour.
*/