const img = document.querySelector('#img');
const dogBtn = document.querySelector('#dog-btn');
const catBtn = document.querySelector('#cat-btn');
const randomBtn = document.querySelector('#random-btn');

dogBtn.addEventListener('click', (event) => {
  event.preventDefault();
  fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then((data) => {
      const petUrl = data.message;
      img.src = petUrl;
    })
});

catBtn.addEventListener('click', (event) => {
  event.preventDefault();
  fetch('https://api.thecatapi.com/v1/images/search')
    .then((response) => response.json())
    .then(([data]) => {
      const petUrl = data.url;
      img.src = petUrl;
    })
});

randomBtn.addEventListener('click', (event) => {
  event.preventDefault();
  Promise.any([
    fetch("https://api.thecatapi.com/v1/images/search"),
    fetch("https://dog.ceo/api/breeds/image/random"),
  ])
    .then((response) => response.json())
    .then((data) => {
      const petUrl = data.message || data[0].url;
      img.src = petUrl;
    });

});
