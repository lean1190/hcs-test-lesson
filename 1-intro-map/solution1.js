// The for loop way
const pokemons = ['ditto', 'mew'];

for (let index = 0; index < pokemons.length; index++) {
    pokemons[index] = 'go ' + pokemons[index];
}

console.log(pokemons);
















// ------------------------------------------------------------------

/**
 * # What happened here?
 * 
 * We changed the original array, we cannot see the previous version of the array anymore, it is lost.
 * This is a mutation, we directly changed the content of the array.
 */