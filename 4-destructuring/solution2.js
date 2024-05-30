const pokemons = ['ditto', 'mew', 'pikachu', 'charmander', 'bulbasaur'];
const [firstPokemon, secondPokemon] = pokemons;

// ☝️ This is the same as doing
const first = pokemons[0];
const second = pokemons[1];

console.log('Go ' + firstPokemon + '!');
console.log('Go ' + secondPokemon + '!');


// Destructuring step by step

// 1. We declare an array
const array = ['value1', 'value2'];

// 2. Use the destructuring syntax
// Right side of assignment: = ['value1', 'value2'] -> from this "array" on the right side of the assignment...
// Left side of assignment: const [array[0], array[1]] -> take the first two elements and assign them to variables -- we can use let or const

// 3. Complete the destructured assignment
// const [array[0], array[1]] = array; -> this syntax doesn't work, it's just for the example
const [firstValue, secondValue] = array;














// ------------------------------------------------------------------

/**
 * # What happened here?
 * 
 * We are creating 2 new variables with the content of the first and second elements in the array by using "destructuring".
 * Destructuring means to dismantle the structure of something, and this is what we are doing with our array.
 * We can get a direct reference to the elements in the array based on their position.
 * 
 * Destructuring comes in handy when working with immutable code, e.g. to do partial updates.
 */