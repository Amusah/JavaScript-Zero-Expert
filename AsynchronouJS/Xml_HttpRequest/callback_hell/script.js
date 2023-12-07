'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// XML http request

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

const getCountryAndNeighbour = country => {
  // first AJAX call
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();
  // console.log(request.responseText)

  request.addEventListener('load', function(){
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    // console.log(`${data.languages[Object.keys(data['languages'])[0]]}`);

    ////// render first country ///////
    renderCountry(data);

    ////// Get neighbouring country ///////
    const neighbour = data.borders?.[0];
    console.log(neighbour)

    if(!neighbour) return;

    // second AJAX call based on the result of the first call
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function(){
      // console.log(JSON.parse(this.responseText));
      const [data2] = JSON.parse(this.responseText);
      console.log(data2)

      /// render neighbouring country ///
      renderCountry(data2, 'neighbour');
    });
  });
}

getCountryAndNeighbour('canada');
// getCountryData('usa');