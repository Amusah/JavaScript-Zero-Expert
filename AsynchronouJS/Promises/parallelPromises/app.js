// executing promises in parallel

const getJSON = function(url, errMsg = 'Something went wrong'){
  return fetch(url).then(response => {
    if(!response.ok)
    throw new Error(`${errMsg} (${response.status})`);

    return response.json();
  })
}

const get3Countries = async function(c1, c2, c3){
  try {
    // sequential
    /*
    const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
    const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
    const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);

    console.log([data1.capital[0], data2.capital[0], data3.capital[0]]);
    */

    // parallel
    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`)
    ]);

    console.log(data.map(d => d[0].capital));
  } catch (error) {
    console.error(error);
  }
};
get3Countries('Canada', 'Australia', 'Switzerland');

/*
  parallel promises is good for performance reasons
  but one disadvantage is, when one of the rejects, 
  the whole promise rejects.
*/