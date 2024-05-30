// We need to freeze the object
const pokemon = { name: 'mew', foundIn: 'Kanto' };
pokemon.name = 'ditto'; // Still works.

const immutablePokemon = Object.freeze({ name: 'mew', foundIn: 'Kanto' });

console.log('My immutable pokemon is:', immutablePokemon);


// ------------------------------------------------------------------
















/**
 * # What happened here?
 * 
 * We created our pokemon using const instead of let, but we can still change the name.
 * Then, we created another pokemon using Object.freeze. 
 * This is the ultimate way in Javascript to ensure a value will not change.
 */