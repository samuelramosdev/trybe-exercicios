const pai = document.getElementById("pai");
const irmaoOndeVoceEsta = document.createElement("section");
irmaoOndeVoceEsta.id = "irmaoOndeVoceEsta";
pai.appendChild(irmaoOndeVoceEsta);

const elementoOndeVoceEsta = document.getElementById("elementoOndeVoceEsta");
const terceiroFilho = document.createElement("section");
terceiroFilho.id = "terceiroERealUltimoFilhoDoFilho";
elementoOndeVoceEsta.appendChild(terceiroFilho);

const primeiroFilhoDoFilho = document.getElementById("primeiroFilhoDoFilho");
const netoDoFilho = document.createElement("section");
netoDoFilho.id = "netoDoFilho";
primeiroFilhoDoFilho.appendChild(netoDoFilho);

const terceiroFilho2 = netoDoFilho.parentNode.parentElement.nextElementSibling;
console.log(terceiroFilho2);
console.log(pai);
