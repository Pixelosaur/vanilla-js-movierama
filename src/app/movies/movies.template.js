const MoviesTemplate = (movies) => `
    <div class="movies">
        <div class="movie-search">
            <input id="search" type="search" name="search" value="" placeholder="Search..." />
        </div>
        ${movies}
    </div>
`;

export default MoviesTemplate;
