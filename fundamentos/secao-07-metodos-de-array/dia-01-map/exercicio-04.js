const { data } = require('./data');

const books = data.books;

const nameAndAge = () => {
  return books.map(({ author, releaseYear }) => ({
    author: author.name,
    age: releaseYear - author.birthYear,
  }));
};

console.log(nameAndAge());