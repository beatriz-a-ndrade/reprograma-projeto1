// [3] RECOMENDADOS: Buscar livros recomendados

const livros = require("../database");
const read = require("readline-sync");
const listarLivrosOrdenados = require("./listarLivrosOrdenados");

const listarRecomendados = () => {
  const confirmarRecomendados = read
    .question("Deseja visualizar lista de livros que sao recomendados? S/N:  ")
    .toUpperCase();

  if (confirmarRecomendados === "S") {
    const livrosRecomendados = livros.filter(
      (livro) => livro.recomenda === true
    );
    console.table(livrosRecomendados);
  } else {
    console.log("fim do algoritmo");
  }
};

module.exports = listarLivrosOrdenados;
