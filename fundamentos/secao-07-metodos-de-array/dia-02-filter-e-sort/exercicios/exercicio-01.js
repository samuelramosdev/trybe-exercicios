const pokemons = require('./data');


const filterStrongPokemons = (pokemons) => {
  return pokemons.filter(({ level }) => level > 30);
};

console.log(filterStrongPokemons(pokemons));