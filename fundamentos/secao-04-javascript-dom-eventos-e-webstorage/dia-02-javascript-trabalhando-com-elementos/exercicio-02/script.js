const whereAreYou = document.getElementById("where-are-you");
const parent = whereAreYou.parentNode;
const firstChildOfChild = document.getElementById("first-child-of-child");
const firstChild = parent.firstElementChild;
const firstChild2 = whereAreYou.previousElementSibling;
const attention = whereAreYou.nextSibling;
const thirdChild = whereAreYou.nextElementSibling;
const thirdChild2 = parent.children[2];

parent.style.backgroundColor = "green";
firstChildOfChild.innerText = "Third requirement text";

console.log(thirdChild2);
