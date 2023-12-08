'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderError = msg => {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
}

/*******************************PROMISES*********************************/
// http request using the fetch api

const renderCountry = (data, className = '') => {
  const html = `
      <article class="country ${className}">
        <img class="country__img" src="${data['flags']['svg']}" />
        <div class="country__data">
          <h3 class="country__name">${data['name'][Object.keys(data.name)[0]]}</h3>
          <h4 class="country__region">${data['region']}</h4>
          <p class="country__row"><span>👫</span>${(data['population'] / 1000000).toFixed(1)}million people</p>
          <p class="country__row"><span>🗣️</span>${data['languages'][Object.keys(data.languages)[0]]}</p>
          <p class="country__row"><span>💰</span>${data['currencies'][Object.keys(data.currencies)[0]].name}</p>
        </div>
      </article>
    `;
    // <p class="country__row"><span>💰</span>${data['currencies'][Object.keys(data.currencies)[0]][Object.keys(data['currencies'][Object.keys(data.currencies)[0]])[0]]}</p>

    countriesContainer.insertAdjacentHTML('beforeend', html);
    // countriesContainer.style.opacity = 1;
}

// const getCountryAndNeighbour = country => {
//   // first AJAX call
//   fetch(`https://restcountries.com/v3.1/name/${country}`) // returns a promise
//   .then(response => { // consuming promise
//     console.log(response);
//     return response.json(); // retuns a promise
//   }).then(data => { // consuming promise
//     console.log(data) 
//     renderCountry(data[0]);
//   });
// }


// const getCountryAndNeighbour = country => {
//   // first AJAX call
//   fetch(`https://restcountries.com/v3.1/name/${country}`) // returns a promise
//   .then(response => {
//     console.log(response)
//     if(!response.ok)
//     throw new Error(`Country not found (${response.status})`);

//     return response.json()
//   })
//   .then(data => {
//     console.log(data);
//     renderCountry(data[0]);

//     // let neighbour =  data[0].borders?.[0];
//     let neighbour = 'jksjdkja'
//     if (!neighbour) return;
//     // second AJAX call
//     return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
//   })
//   .then(response => {
//     if(!response.ok)
//     throw new Error(`Country not found (${response.status})`);

//     return response.json()
//   })
//   .then(data => renderCountry(data[0], 'neighbour'))
//   .catch(err => {
//     renderError(`Something went wrong ✴️✴️ ${err.message}. try again`)
//   })
//   .finally(() => {
//     countriesContainer.style.opacity = 1;
//   });
// }

//Helper functions
const fetchAndParseData = function(url, errMsg = 'Something went wrong'){
  return fetch(url).then(response => {
    if(!response.ok)
    throw new Error(`${errMsg} (${response.status})`);

    return response.json();
  })
}

const renderData = function(){}

const getCountryAndNeighbour = country => {
  // first AJAX call
  fetchAndParseData(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
  .then(data => {
    console.log(data);
    renderCountry(data[0]);

    let neighbour =  data[0].borders?.[0];
    if (!neighbour) throw new Error('No neighboring country found!.');
    // second AJAX call
    return fetchAndParseData(`https://restcountries.com/v3.1/alpha/${neighbour}`, 'Country not found')
  })
  .then(data => renderCountry(data[0], 'neighbour'))
  .catch(err => {
    renderError(`Something went wrong ✴️✴️ ${err.message}. Try again`)
  })
  .finally(() => {
    countriesContainer.style.opacity = 1;
  });
}

btn.addEventListener('click', function(){
  getCountryAndNeighbour('Australia');
})
// getCountryData('usa');