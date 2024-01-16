/*
  consuming promise with async await
  and handling errors with try catch
*/

const getPosition = function() {
  return new Promise(function(resolve, reject){
    navigator.geolocation.getCurrentPosition(resolve, reject)
  })
}

const whereAmI = async function(country){
  try {
    const pos = await getPosition();
    const { latitude, longitude } = pos.coords;

    
    const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
whereAmI('Canada');
console.log('second');