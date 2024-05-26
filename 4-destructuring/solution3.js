const pokemon = { name: 'mew', foundIn: 'Kanto' };
const { name, foundIn } = pokemon;

console.log('Name:', name);
console.log('Found in:', foundIn);

// This is the same as doing
const name2 = pokemon.name;
const foundIn2 = pokemon.foundIn;

console.log('Name:', name2);
console.log('Found in:', foundIn2);













// ------------------------------------------------------------------

/**
 * # What happened here?
 * 
 * We are creating 2 new variables with the content of the properties in the object by using "destructuring".
 * We can get one property, two, or all of them with this method.
 * 
 * Tip: to destructure, we use the same syntax as the data structure.
 * - Arrays use -> const [] = []
 * - Objects use -> const {} = {}
 */