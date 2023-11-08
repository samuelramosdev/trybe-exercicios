const countries = require("./data");

const getPopulation = (countries) => {
  return countries.reduce((acc, curr) => acc += curr.population, 0)
};

console.log(getPopulation(countries));