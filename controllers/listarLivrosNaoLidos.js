// [4] LISTA DE DESEJO: Buscar livros nao lidos // Deverá (listar) livros que ainda não foram lidos
// [Método chave]: filter
const livros = require("../database");
const read = require("readline-sync");

// Quando o 4 é chamado la no app.js entra nesse codigo

const listarLivrosNaoLidos = () => {
  const confirmarNaoLidos = read
    .question("Deseja visualizar lista de livros nao lidos? S/N: ")
    .toUpperCase();
  // Quando responde 'S' vai nesse if
  if (confirmarNaoLidos === "S") {
    const livrosNaoLidos = livros.filter((livro) => livro.leu === false);
    console.table(livrosNaoLidos);
  } else {
    console.log("fim do algoritmo");
  }
};

module.exports = listarLivrosNaoLidos;
