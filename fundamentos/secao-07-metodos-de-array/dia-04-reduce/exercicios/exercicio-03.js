const countries = require("./data");

const totalAreaByRegion = (region = 'Europe') => {
  return countries.filter(({ region: continent }) => continent === region)
    .reduce((acc, curr) => acc + curr.area, 0)
}

console.log(totalAreaByRegion());