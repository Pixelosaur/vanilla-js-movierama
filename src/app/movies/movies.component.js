import MoviesTemplate from './movies.template';
import MovieTemplate from './movie/movie.template';
import Loader from '../shared/loader/loader.template';
import MoviesService from './movies.service';
import './movies.template.scss';
import './movie/movie.template.scss';
import '../shared/loader/loader.template.scss';

let showLoader = true;
let pageNumber = 1;
const movieList = [];

const MoviesComponent = {
  init() {
    this.render();
    this.loadMore();
  },

  loadMore() {
    window.addEventListener('scroll', () => {
      const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
      if (scrollTop + clientHeight > scrollHeight - 5) {
        pageNumber += 1;
        setTimeout(this.render, 500);
      }
    });
  },

  async render() {
    this.appElement = document.querySelector('.container');

    if (showLoader) {
      this.appElement.innerHTML = Loader();
    }
    movieList.push(...(await MoviesService.getMovieList(pageNumber)));
    const movies = movieList.reduce((html, movie) => `${html} ${MovieTemplate(movie)}`, '');

    showLoader = false;
    this.appElement.innerHTML = MoviesTemplate(movies);
  },
};

export default MoviesComponent;
