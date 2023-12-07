'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// XML http request

const getCountryData = country => {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();
  // console.log(request.responseText)

  request.addEventListener('load', function(){
    const [data] = JSON.parse(this.responseText);
    console.log(data)
    console.log(`${data.languages[Object.keys(data['languages'])[0]]}`);

    const html = `
      <article class="country">
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
  });
}

getCountryData('nicaragua');
// getCountryData('usa');