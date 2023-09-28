const h1 = document.createElement("h1");
h1.innerHTML = "TrybeTrip - Agência de Viagens";
document.body.appendChild(h1);

const mainContent = document.createElement("main");
mainContent.className = "main-content";
document.body.appendChild(mainContent);

const centerSection = document.createElement("section");
centerSection.className = "center-content";
mainContent.appendChild(centerSection);

const p = document.createElement("p");
p.innerHTML = "Conheça os pacotes";
centerSection.appendChild(p);

const leftSection = document.createElement("section");
leftSection.className = "left-content";
mainContent.appendChild(leftSection);

const rightSection = document.createElement("section");
rightSection.className = "right-content";
mainContent.appendChild(rightSection);

const img = document.createElement("img");
img.src = "https://picsum.photos/200";
img.className = "small-image";
leftSection.appendChild(img);

const ul = document.createElement("ul");
const countList = [
  "um",
  "dois",
  "três",
  "quatro",
  "cinco",
  "seis",
  "sete",
  "oito",
  "nove",
  "dez",
];
for (let index = 0; index < countList.length; index += 1) {
  const li = document.createElement("li");
  li.innerHTML = countList[index];
  ul.appendChild(li);
}
rightSection.appendChild(ul);

for (let index = 0; index < 3; index += 1) {
  const h3 = document.createElement("h3");
  h3.innerHTML = index;
  mainContent.appendChild(h3);
}

h1.className = "title";

const h3 = document.getElementsByTagName("h3");
for (let index = 0; index < 3; index += 1) {
  h3[index].className = "description";
}

mainContent.removeChild(leftSection);

rightSection.style.marginRight = "auto";

centerSection.style.backgroundColor = "green";

ul.lastChild.remove();
ul.lastChild.remove();
