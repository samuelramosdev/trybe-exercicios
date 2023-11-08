const countries = require("./data");

const getLargestCountriesByRegion = (countries) => {
  return countries.reduce((acc, curr) => {
    if (!acc[country.region] || curr.area > acc[country.region].area) {
      acc[country.region] = { name: country.name, area: country.area };
    }
    return acc;
  }, {});
}