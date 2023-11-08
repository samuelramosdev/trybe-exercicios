const countries = require('./data');

let objects = [];

countries.forEach(({ name, currencies }) => {

  const country = {
    name: name,
    currencyCode: currencies[0].code,
    currencyName: currencies[0].name,
  }

  objects.push(country);
})

console.log(objects);