const countries = require('./data');

countries.forEach((country) => country.planet = 'Earth');

console.log(countries);