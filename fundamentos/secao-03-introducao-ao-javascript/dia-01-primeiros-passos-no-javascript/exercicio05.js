let chessPiece = "Cavalo";

switch (chessPiece.toLowerCase()) {
  case "rei":
    console.log("Rei -> Uma casa para qualquer direção1");
    break;
  case "bispo":
    console.log("Bispo -> Todas as diagonais");
    break;
  case "rainha":
    console.log("Rainha -> Diagonal, horizontal e vertical.");
    break;
  case "cavalo":
    console.log('Cavalo -> "L" pode pular sobre as peças.');
    break;
  case "peão":
    console.log(
      "Peão -> Umas casa pra frente, no primeiro movimento podem ser duas."
    );
    break;
  default:
    console.log("Erro, peça inválida");
}
