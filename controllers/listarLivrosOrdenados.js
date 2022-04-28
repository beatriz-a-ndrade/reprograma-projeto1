//[2] ORDENAR: Ordenar livros por quantidade de paginas

const livros = require("../database");
const read = require("readline-sync");

const listarLivrosOrdenados = () => {
  const confirmarOrdenados = read
    .question(
      "Deseja visualizar a lista de livros ordenada de forma crescente por quantidade de paginas ? S/N:  "
    )
    .toUpperCase();

  if (confirmarOrdenados === "S") {
    const livrosOrdenados = livros.sort((a, b) => {
      return a.paginas - b.paginas;
    });
    console.table(livrosOrdenados);
  } else {
    console.log("fim do algoritmo");
  }
};

module.exports = listarLivrosOrdenados;
