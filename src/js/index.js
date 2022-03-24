/*
 quando clicar no pokemon da listagem temos que esconder o cartão do pokemon aberto e mostrar o cartão correspondendte ao que foi selecionado na listagem

 para isso vamos precisar trabalar com dois elementos 
 1 - listagem
 2 - cartão pokemon

 precisamos criar duas variáveis no JS pra trabalar com os elementos da tela

 vamos precisar trabalhhar com um evento de clique feito pelo usuário na listagem de pokemons

 - remover a classe aberto só do cartão que está aberto
 - ao clicar em pokemon da listagem pegamos o ID desse pokemon pra saber qual cartão mostrar
 - remover a classe ativo que marca o pokemon selecionado
 - adicionar a classe ativo no item da lista selecionado
*/

// precisamos criar duas variáveis no JS pra trabalhar com os elementos da tela 

const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

function soma(numero1, numero2){
    console.log(numero1 + numero2)
}

listaSelecaoPokemons.forEach(pokemon => {
    //vamos precisar trabalhhar com um evento de clique feito pelo usuário na listagem de pokemons

    
    pokemon.addEventListener('click', () => {
    //- remover a classe aberto só do cartão que está aberto
const cartaoPokemonAberto = document.querySelector('.aberto')
cartaoPokemonAberto.classList.remove('aberto')

//- ao clicar em pokemon da listagem pegamos o ID desse pokemon pra saber qual cartão mostrar
     const idPokemonSelecionado = pokemon.attributes.id.value

     const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado

     const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
     cartaoPokemonParaAbrir.classList.add('aberto')

     //- remover a classe ativo que marca o pokemon selecionado
     const pokemonAtivoNaListagem = document.querySelector('.ativo')
     pokemonAtivoNaListagem.classList.remove('ativo')

     //- adicionar a classe ativo no item da lista selecionado
     const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
     pokemonSelecionadoNaListagem.classList.add('ativo')
     
    })

})
