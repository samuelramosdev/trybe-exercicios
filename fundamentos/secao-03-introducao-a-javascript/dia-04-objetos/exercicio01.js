const reader = {
  name: "Julia",
  lastName: "Pessoa",
  age: 21,
  favoriteBooks: [
    {
      title: "O Senhor dos Anéis - a Sociedade do Anel",
      author: "J. R. R. Tolkien",
      publisher: "Martins Fontes",
    },
  ],
};

const name = reader.name;
const lastName = reader.lastName;
const title = reader.favoriteBooks[0].title;

console.log(`O livro favorito de ${name} ${lastName} se chama "${title}"`);

reader.favoriteBooks.push({
  title: "Harry Potter e o Prisioneiro de Azkaban",
  author: "JK Rowling",
  publisher: "Rocco",
});

const numberOfBooks = reader.favoriteBooks.length;

numberOfBooks > 1
  ? console.log(`${name} tem ${numberOfBooks} livros favoritos`)
  : console.log(`${name} tem ${numberOfBooks} livro favorito`);
