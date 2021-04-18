import MoviesTemplate from './movies.template';
import MovieTemplate from './movie/movie.template';
import Loader from '../shared/loader/loader.template';
import MoviesService from './movies.service';
import './movies.template.scss';
import './movie/movie.template.scss';
import '../shared/loader/loader.template.scss';

let showLoader = true;

const MoviesComponent = {
  init() {
    this.appElement = document.querySelector('.container');
    this.render();
  },

  async render() {
    if (showLoader) {
      this.appElement.innerHTML = Loader();
    }
    const movieList = await MoviesService.getMovieList();
    const movies = movieList.reduce((html, movie) => `${html} ${MovieTemplate(movie)}`, '');

    showLoader = false;
    this.appElement.innerHTML = MoviesTemplate(movies);
  },
};

export default MoviesComponent;
