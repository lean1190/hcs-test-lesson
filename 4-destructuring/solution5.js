// We can combine what we learned to create a new object without the property

const pokemon = { name: 'mew', foundIn: 'Kanto' };
const { name, ...allOtherProperties } = pokemon;

console.log('Pokemon unchanged', pokemon);
console.log('Pokemon without name', allOtherProperties);













// ------------------------------------------------------------------

/**
 * # What on earth just happened here?
 * 
 * The spread operator is powerful, it can copy data structures, 
 * and it can also be used to say "put everything that is left in this variable"
 * { ...variableName } = put the rest of the object in variableName
 */