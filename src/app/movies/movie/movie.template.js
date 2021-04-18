const MovieTemplate = (movie) => `
    <div class="movie-item">
        <div class="overview">
            <div class="meta">
                <span>
                    <i class="far fa-calendar-alt"></i>
                    <span>${movie.yearOfRelease}</span>
                </span>
                
                <span>
                    <i class="far fa-star"></i>
                    <span>${movie.vote_average}</span>
                </span>
            </div>
            <div class="poster">
                <img src=${movie.fullPosterPath} alt=${movie.title}>
            </div>
        </div>
        <div class="genres">
            ${movie.genres.reduce(
    (html, genre) => `${html} <span class="badge">${genre}</span>`,
    '',
  )}
        </div>
        <div class="description">
            <h4 class="title">${movie.title}</h4>
            <p>${movie.overview}</p>
        </div>
    </div>
`;

export default MovieTemplate;
