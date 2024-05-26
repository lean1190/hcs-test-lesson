const favoriteInputFilter = true;
const movies = [
    { name: 'Harry Potter', favorite: true },
    { name: 'Avengers', favorite: false },
    { name: 'Matilda', favorite: true },
    { name: 'Hunger games', favorite: false },
    { name: 'Pretty woman', favorite: false },
];

// We .filter() the movies based on the input
// PLUS we use destructuring in the function, to only take the "favorite" property from each movie
const filteredMovies = movies.filter(({ favorite }) => favorite === favoriteInputFilter);

// We print both arrays
console.log('Result', movies, filteredMovies);