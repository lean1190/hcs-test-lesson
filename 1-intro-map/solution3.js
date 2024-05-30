// The .map() way
const pokemons = ['ditto', 'mew'];
const goPokemons = pokemons.map((pokemon) => {
    return 'go ' + pokemon
});
// Loop 1: ('ditto') => { return 'go ' + 'ditto' };
// Loop 2: ('mew') => { return 'go ' + 'mew' };

console.log(pokemons, goPokemons);










// ------------------------------------------------------------------

// Have you learned about arrow functions already? "() => {}"
// They are a different way to write a function.

// With regular functions we can write is as:
const goPokemonsOldFashion = pokemons.map(function(pokemon) {
  return 'go ' + pokemon;
});

















// ------------------------------------------------------------------

/**
 * # What happened here?
 * 
 * We created a new array by using the .map() function, and the source array stays the same.
 * The .map() functions signature looks like this:
 * 
 * Array.map(callback) => returns a new array that is the result of the callback function
 * - callback(element, index) => returns the modified element
 * - element is the same as doing array[index] in a for loop
 * - index is the position in the array, e.g. 0, 1 ,2
 */