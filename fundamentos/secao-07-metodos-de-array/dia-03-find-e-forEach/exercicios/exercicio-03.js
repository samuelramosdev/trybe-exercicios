const countries = require('./data');

const findCountry = (countries, searchedCountry) => {
  const found = countries.find(({ name }) => name === searchedCountry);

  if (!found) throw new Error('País não encontrado');

  return found
};

console.log(findCountry(countries, 'Brazil'));