const numbers = [4, 9, -1, 16, -5, 25];

const squaredNumbers = numbers.map((number) => number > 0 ? number ** 2 : NaN);

console.log(squaredNumbers);