let numberChosen = 10;
let print = "";
if (numberChosen > 1) {
  for (let index = 0; index < numberChosen; index += 1) {
    print += "*";
  }
  for (let index = 0; index < numberChosen; index += 1) {
    console.log(print);
  }
}
