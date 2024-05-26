function filterMovies(movies, filterInput) {
    return movies.filter(({ favorite }) => favorite === filterInput);
}

describe('filterMovies', () => {

    it('should return only movies that are favorite', () => {
        const favoriteInputFilter = true;
        const movies = [
            { name: 'Harry Potter', favorite: true },
            { name: 'Avengers', favorite: false },
            { name: 'Matilda', favorite: true },
            { name: 'Hunger games', favorite: false },
            { name: 'Pretty woman', favorite: false },
        ];

        const result = filterMovies(movies, favoriteInputFilter);
        expect(result.length).toBe(2);

        const [firstMovie, secondMovie] = result;
        expect(firstMovie.favorite).toBe(true);
        expect(secondMovie.favorite).toBe(true);
    });
});