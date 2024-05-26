// The for loop way
const pokemons = ['ditto', 'mew', 'pikachu', 'charmander', 'bulbasaur'];
const myFavoritePokemons = [];

for (let index = 0; index < pokemons.length; index++) {
    const pokemon = pokemons[index];
    if (pokemon === 'pikachu' || pokemon === 'mew') {
        myFavoritePokemons.push(pokemon);
    }
}

console.log('My favorite pokemons are: ', myFavoritePokemons);
















// ------------------------------------------------------------------

/**
 * # What happened here?
 * 
 * We created a new array with a for loop and an if condition
 * to grab only our favorite pokemons.
 */