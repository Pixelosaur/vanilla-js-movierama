import MoviesTemplate from './movies.template';
import MovieTemplate from './movie/movie.template';
import MoviesService from './movies.service';
import './movies.template.scss';
import './movie/movie.template.scss';

const MoviesComponent = {
  init() {
    this.appElement = document.querySelector('.container');
    this.render();
  },

  async render() {
    const movieList = await MoviesService.getMovieList();
    const movies = movieList.reduce((html, movie) => `${html} ${MovieTemplate(movie)}`, '');

    this.appElement.innerHTML += MoviesTemplate(movies);
  },
};

export default MoviesComponent;
