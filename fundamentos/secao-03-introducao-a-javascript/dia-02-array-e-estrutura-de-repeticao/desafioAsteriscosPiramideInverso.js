let numberChosen = 5;
let column = "";
let predecessor = numberChosen - 1;

for (let index = 0; index < numberChosen; index += 1) {
  for (let columnIndex = 0; columnIndex < numberChosen; columnIndex += 1) {
    if (columnIndex < predecessor) {
      column += " ";
    } else {
      column += "*";
    }
  }
  console.log(column);
  column = "";
  predecessor -= 1;
}
