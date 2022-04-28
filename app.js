const read = require("readline-sync");
const buscarLivros = require("./controllers/buscarLivros");
const listarLivrosNaoLidos = require("./controllers/listarLivrosNaoLidos");
const listarRecomendados = require("./controllers/listarRecomendados");
const listarLivrosOrdenados = require("./controllers/listarLivrosOrdenados");

const resposta = read.question(` 
====================== Menu ===========================
1 - CATEGORIA: Buscar livro por categoria
2 - ORDENAR: Ordenar livros por quantidade de paginas
3 - RECOMENDADOS: Buscar livros recomendados
4 - LISTA DE DESEJO: Busca livros nao lidos

5 - SAIR

Digite um numero[1-5]: 
`);

// Quando a pessoa escolher a opção 1, eu quero que o JS
// chame a função que vai estar no meu arquivo
// controllers/burcarLivros.js

switch (resposta) {
  case "1":
    buscarLivros(); //chamar a função buscarLivros
    break;
  case "2":
    listarLivrosOrdenados(); //chamar funçao livrosOrdenados
    break;
  case "3":
    listarRecomendados(); //chamar função listarRecomendados
    break;
  case "4":
    listarLivrosNaoLidos(); //chamar função listarLivrosNaoLidos
  default:
    console.log("fim do algoritmo");
    break;
}
