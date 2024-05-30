// The .filter() way
const pokemons = ['ditto', 'mew', 'pikachu', 'charmander', 'bulbasaur'];
const myFavoritePokemons = pokemons.filter((pokemon) => {
    return pokemon === 'pikachu' || pokemon === 'mew';
});
// Loop 1: ('ditto') => { return 'ditto' === 'pikachu' || 'ditto' === 'mew' }; = FALSE
// Loop 2: ('mew') => { return 'mew' === 'pikachu' || 'mew' === 'mew' }; = TRUE
// Loop 3: ('pikachu') => { return 'pikachu' === 'pikachu' || 'pikachu' === 'mew' }; = TRUE
// Loop 4: ('charmander') => { return 'charmander' === 'pikachu' || 'charmander' === 'mew' }; = FALSE
// Loop 5: ('bulbasaur') => { return 'bulbasaur' === 'pikachu' || 'bulbasaur' === 'mew' }; = FALSE

console.log('My favorite pokemons are: ', myFavoritePokemons);
















// ------------------------------------------------------------------

/**
 * # What happened here?
 * 
 * We created a new array by using the .filter() function, and the source array stays the same.
 * The .filter() functions signature looks like this:
 * 
 * Array.filter(callback) => returns a new array with the elements where the callback condition returns true
 * - callback(element, index) => returns true or false
 * - element is the same as doing array[index] in a for loop
 * - index is the position in the array, e.g. 0, 1 ,2
 */