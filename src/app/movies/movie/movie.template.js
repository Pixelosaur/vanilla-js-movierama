const MovieTemplate = (movie) => `
    <div class="movie-item">
       <h4>${movie.title}</h4>
       <img src=${movie.fullPosterPath} alt=${movie.title}>
    </div>
`;

export default MovieTemplate;
