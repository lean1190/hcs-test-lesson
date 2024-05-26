// We can use the spread operator to merge arrays

const pokemons = ['ditto', 'mew', 'pikachu', 'charmander', 'bulbasaur'];
const morePokemons = ['lapras', 'vulpix', 'golem', 'articuno', 'mewtwo'];

const allPokemons = [
    // Remember, the spread operator "removes" the brackets "[]" and leaves only the values
    ...['ditto', 'mew', 'pikachu', 'charmander', 'bulbasaur'],
    ...['lapras', 'vulpix', 'golem', 'articuno', 'mewtwo']
]

console.log('All pokemons!', allPokemons);

// This is the same as doing
// const concatPokemons = pokemons.concat(allPokemons);
// console.log('Concat pokemons', allPokemons);

// Or doing
// const forLoopPokemons = pokemons;
// for (let index = 0; index < morePokemons.length; index++) {
//     forLoopPokemons.push(morePokemons[index]);
// }

// console.log('All pokemons with a for loop', pokemons);
// Did you notice something?

















// ------------------------------------------------------------------

/**
 * # What happened here?
 * 
 * We created a new array with all the pokemons by merging the arrays with the spread operator
 */