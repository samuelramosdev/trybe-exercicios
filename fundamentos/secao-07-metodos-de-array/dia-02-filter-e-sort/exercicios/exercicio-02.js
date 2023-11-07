const pokemons = require("./data");

const getStrongPokemonNames = (pokemons) => {
  return pokemons.filter(({ level }) => level > 50).map(({ name }) => name);
};

console.log(getStrongPokemonNames(pokemons));