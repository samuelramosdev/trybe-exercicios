const countries = require('./data');

const newCountry = {
  name: 'Germany',
  region: 'Europe',
  currencies: [{ code: 'EUR', name: 'Euro' }],
  capital: 'Berlin',
  population: 83190556,
  area: 357386
};

const addCountry = (countries, newCountry) => [...countries, newCountry];

console.log(addCountry(countries, newCountry));