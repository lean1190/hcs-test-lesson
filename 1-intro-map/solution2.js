// The for loop way
const pokemons = ['ditto', 'mew'];
const goPokemons = []

for (let index = 0; index < pokemons.length; index++) {
    goPokemons[index] = 'go ' + pokemons[index];
}

// Alternative using push
// for (let index = 0; index < pokemons.length; index++) {
//     goPokemons.push('go ' + pokemons[index]);
// }

console.log(pokemons, goPokemons);













// ------------------------------------------------------------------

/**
 * # What happened here?
 * Now we can see the previous value, but we are still changing the array. 
 * Not a problem per se, but a "for" loop can have any arbitrary code, and it is easy to misuse.
 * 
 * 
 * # So what option do we have?
 * We have immutable operators.
 * 
 * Mutable = can change
 * Immutable = cannot change.
 * When we write immutable code, we cannot change the content of our data structure unless we recreate it.
 * 
 * Immutable code has some advantages:
 * ↳ It is more predictable.
 * ↳ It is more concise to read.
 * ↳ It is more maintainable.
 * ↳ Prevents you from overwriting state.
 * ↳ It is simpler to debug.
 * 
 * It takes some practice, but once you get used to writing immutable code, it’s hard to stop 💪
 * 
 * Also, keep in mind some of the tradeoffs of immutable code:
 * ↳ Writing immutable code can be hard at the beginning.
 * ↳ It is usually related to functional programming concepts, which can be tricky to understand.
 * ↳ It can be algorithmically less performant than mutable code.
 */