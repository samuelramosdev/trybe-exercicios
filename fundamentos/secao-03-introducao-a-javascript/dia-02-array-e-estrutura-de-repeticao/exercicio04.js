const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (let index = 0; index < numbers.length; index += 1) {
  sum += numbers[index];
}

let average = sum / numbers.length;
console.log(average);

average > 20
  ? console.log("O valor da média aritmética é maior que 20")
  : console.log("O valor da média aritmética é menor ou igual a 20");
