const livros = require('../database')
const read = require('readline-sync')

const listarLivrosNaoLidos = () => {
    const confirmarNaoLidos  = read.question('Deseja visualizar lista de livros nao lidos? S/N: ').toUpperCase() 

    if(confirmarNaoLidos === 'S') {
        const livrosNaoLidos = livros.filter(livro => livro.leu === false) 
        console.table(livrosNaoLidos)
    } else {
        console.log('fim do algoritmo')
    
        }
    }

    module.exports = listarLivrosNaoLidos
