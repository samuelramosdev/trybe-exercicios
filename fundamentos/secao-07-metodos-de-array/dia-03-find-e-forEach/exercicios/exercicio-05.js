const countries = require('./data');

const buildString = (countries, name, ...properties) => {
  const countryFound = countries.find((country) => country.name === name)
  return `${countryFound.name} - ${properties}`;
};

countries.forEach((country) => {
  const string = buildString(countries, country.name, country.capital, country.currencies[0].code, country.currencies[0].name);
  console.log(string.split(',').join(' - '));
});
