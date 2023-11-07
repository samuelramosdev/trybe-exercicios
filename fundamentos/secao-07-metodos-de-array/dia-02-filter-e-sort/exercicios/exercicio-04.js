const pokemons = require("./data");

const sortPokemons = (pokemons) => {
  return pokemons.sort(({ level: aLevel, name: aName }, { level: bLevel, name: bName }) => {
    if (aLevel === bLevel) {
      return aName.localeCompare(bName);
    } else {
      return bLevel - aLevel;
    }
  });
};

console.log(sortPokemons(pokemons));