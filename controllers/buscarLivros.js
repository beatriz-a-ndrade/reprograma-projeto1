const livros = require('../database')
const read = require('readline-sync')

const buscarLivros = () => {
    // Quando o 1 é chamado la no app, entra nesse codigo
    const opcaoInicial = read.question('Deseja buscar por categoria? S/N').toUpperCase()

   // Quando responde S entra aqui nesse if
    if (opcaoInicial === 'S') {
       //mostra no console todas as categorias existentes
        const categorias = livros.map(livro => livro.categoria) 
       console.table(categorias)

       const inputCategoria = read.question('Digite uma categoria conforme tabela acima: ')
        
       const confirmacao = read.question('Tem certeza? S/N ').toUpperCase()

       if(confirmacao === 'S') {
           const livrosFiltrados = livros.filter(livro => livro.categoria === inputCategoria)
        console.table(livrosFiltrados)
        }
    }  
}

module.exports = buscarLivros