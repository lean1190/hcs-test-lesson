function filterMovies(movies, filterInput) {
    return movies.filter(({ isFavorite }) => isFavorite === filterInput);
}

describe('filterMovies', () => {

    it('should return only movies that are favorite', () => {
        const favoriteInputFilter = true;
        const movies = [
            { name: 'Harry Potter', isFavorite: true },
            { name: 'Avengers', isFavorite: false },
            { name: 'Matilda', isFavorite: true },
            { name: 'Hunger games', isFavorite: false },
            { name: 'Pretty woman', isFavorite: false },
        ];

        const result = filterMovies(movies, favoriteInputFilter);
        expect(result.length).toBe(2);

        const [firstMovie, secondMovie] = result;
        expect(firstMovie.isFavorite).toBe(true);
        expect(secondMovie.isFavorite).toBe(true);
    });
});