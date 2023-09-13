let num1 = 1;
let num2 = 4;
let num3 = 4;
let maior = "";
if (num1 != num2 && num1 != num3 && num2 != num3) {
  if (num1 > num2 && num1 > num3) {
    maior = "O primeiro número é o maior.";
  } else if (num2 > num1 && num2 > num3) {
    maior = "O segundo número é o maior.";
  } else {
    maior = "O terceiro número é o maior.";
  }
  console.log(maior);
} else {
  console.log("Existem números iguais");
}
