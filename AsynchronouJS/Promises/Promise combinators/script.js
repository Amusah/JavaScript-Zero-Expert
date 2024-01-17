/*******Some Other Promise Combinators*******/

const getJSON = function(url, errMsg = 'Something went wrong'){
  return fetch(url).then(response => {
    if(!response.ok)
    throw new Error(`${errMsg} (${response.status})`);

    return response.json();
  })
};

// Promise.race
(async function(){
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v3.1/name/Sweden`),
    getJSON(`https://restcountries.com/v3.1/name/Australia`),
    getJSON(`https://restcountries.com/v3.1/name/Canada`)
  ]);
  console.log(res[0])
})();


const timeout = function(sec){
  return new Promise(function(_, reject){
    setTimeout(function(){
      reject(new Error('Request took too long!'));
    }, sec * 1000)
  });
};

Promise.race([
  getJSON(`https://restcountries.com/v3.1/name/Canada`),
  timeout(1)
])
.then(res => console.log(res[0]))
.catch(err => console.error(err));

// race() settles after the first success or failure of the promises supplied


// Promise.allSettled
Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Another success')
]).then(res => console.log(res))

// allSettled() returns/settles with the result of all promises supplied (both resolved and rejected)


// Promise.all()
Promise.all([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Another success')
])
.then(res => console.log(res))
.catch(err => console.error(err))

/*
  all() settles when all promises supplied have been resolved
  or rejects when either of the rejects
*/

Promise.any([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Another success')
])
.then(res => console.log(res))
.catch(err => console.error(err))

/*
  any() returns the first fulfilled promise and ignores
  the rejcted ones
*/