const movies = [
    { name: 'Harry Potter', favorite: true },
    { name: 'Avengers', favorite: false },
    { name: 'Matilda', favorite: true },
    { name: 'Hunger games', favorite: false },
    { name: 'Pretty woman', favorite: false },
];

// We will set the last element of the array to be a favorite
const lastElementIndex = movies.length - 1;
const updatedLastElement = {
    ...movies[lastElementIndex],
    favorite: true, // We overwrite the value
    changed: 'This one changed!' // And we add one extra property because we can :)
};

// This solution only works in Node versions >= 20
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/with
const updatedMovies1 = movies.with(lastElementIndex, updatedLastElement);

// For previous versions
const updatedMovies2 = movies.map((movie, index) => {
    if (index === lastElementIndex) { // Is it the last element of the array?
        return updatedLastElement;
    }

    return movie;
});

console.log('Movies', movies);
console.log('Update #1', updatedMovies1);
console.log('Update #2', updatedMovies2);