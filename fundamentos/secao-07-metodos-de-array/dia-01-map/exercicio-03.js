const { data } = require('./data.js');

const books = data.books;

const formatedBookNames = books.map(({ name, genre, author }) => {
  return `${name} - ${genre} - ${author.name}`;
});

console.log(formatedBookNames);