const countries = require("./data");

const longestName = (countries) => {
  return countries.reduce((acc, curr) => acc.name.length < curr.name.length ? curr : acc);
};

console.log(longestName(countries));
