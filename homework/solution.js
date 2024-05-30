const favoriteInputFilter = true;
const movies = [
    { name: 'Harry Potter', isFavorite: true },
    { name: 'Avengers', isFavorite: false },
    { name: 'Matilda', isFavorite: true },
    { name: 'Hunger games', isFavorite: false },
    { name: 'Pretty woman', isFavorite: false },
];

// We .filter() the movies based on the input
// PLUS we use destructuring in the function, to only take the "isFavorite" property from each movie
const filteredMovies = movies.filter(({ isFavorite }) => {
    return isFavorite === favoriteInputFilter;
});

// We print both arrays
console.log('Result', movies, filteredMovies);