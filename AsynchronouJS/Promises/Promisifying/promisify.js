/*
  Promisifying is a technique that is used to convert callback based async
  operations / behaviour into promise based operation / behaviour.
*/

// Promisifying the geolocation api

// navigator.geolocation.getCurrentPosition(
//   position => console.log(position),
//   err => console.error(err)
// );

const getPosition = function(){
  return new Promise(function(resolve, reject){
    navigator.geolocation.getCurrentPosition(
      position => resolve(position),
      err => reject(err)
    );
  });
}

// much simpler approach
const getCurrentPosition = function(){
  return new Promise(function(resolve, reject){
    navigator.geolocation.getCurrentPosition(resolve, reject);
  })
}

getCurrentPosition()
.then(pos => console.log(pos))
.catch(err => console.error(err))