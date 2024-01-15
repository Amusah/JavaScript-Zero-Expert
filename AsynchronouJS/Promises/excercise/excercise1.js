'use strict'

const countriesContainer = document.querySelector('.countries');

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
    countriesContainer.style.opacity = 1;
}

let key = '394165843608160291545x9264';
const whereAmI = (lat, lon) => {
  return fetch(`https://geocode.xyz/${lat},${lon}?geoit=json&auth=${key}`)
  .then(response => {
    if(!response.ok) throw new Error(`Problem with geocoding ${response.status}`);

    return response.json();
  })
  .then(data => {
    console.log(`You are in ${data.city}, ${data.country}`);

    return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
  })
  .then(res => {
    if(!res.ok)
    throw new Error(`Country not found ${res.status}`);

    return res.json();
  })
  .then(data => renderCountry(data[0]))
  .catch(err => console.error(`${err.message} ✴️`));
}
whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(4.909006, -1.765373);