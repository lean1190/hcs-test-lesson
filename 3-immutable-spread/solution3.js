// We can update immutable objects by recreating them.
// Let me introduce you to the spread operator.

const immutablePokemon = Object.freeze({ name: 'mew', foundIn: 'Kanto' });
const updatedPokemon = {
    ...immutablePokemon, // "..." is called the spread operator
    foundIn: 'Johto'
}

console.log('Updated pokemon:', immutablePokemon);

// Spreading step by step
const updatedPerson = {
    // 1. The ... operator "removes" the brackets "{}", and creates a copy of the properties inside the object.
    ...{ 
        name: 'lean', 
        surname: 'vilas' 
    },
    // This creates an object like
    // const updatedPerson = {
    //      name: 'lean',
    //      surname: 'vilas'
    // }

    // 2. We overwrite the value of the property with the same key 'name'
    name: 'updated'
    // This creates an object like
    // const updatedPerson = {
    //      --name--: 'lean', // This property is replaced with the 'updated' one
    //      surname: 'vilas'
    //      name: 'updated',
    // }
}

console.log('Updated person:', updatedPerson);
















// ------------------------------------------------------------------

/**
 * # What happened here?
 * 
 * We created an updated version of our pokemon with the help of the spread operator ...
 * This operator is our best ally when working with immutable objects and arrays.
 * 
 * With objects, the ... operator "removes" the brackets "{}", and leaves the properties inside the object.
 */