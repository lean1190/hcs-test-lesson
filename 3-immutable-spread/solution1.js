// Use const instead of let
const immutableBoolean = true;
const immutableNumber = 1;
const immutablePokemon = 'mew';

console.log('Immutable values', immutableBoolean, immutableNumber, immutablePokemon);ç

let mutablePokemon = 'ditto';
console.log('Mutable', mutablePokemon);

mutablePokemon = 'transform!';
console.log('Changed', mutablePokemon);

// ------------------------------------------------------------------
















/**
 * # What happened here?
 * 
 * const variables cannot be reassigned, so primitive values cannot change.
 */