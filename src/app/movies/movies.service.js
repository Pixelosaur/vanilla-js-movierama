import { API_BASE_URL, API_KEY } from '../../config';
import ApiConfigService from '../../api-config.service';

const MoviesService = {
  async getMovieList(page = 1) {
    const genreResponse = await this.getGenres();
    const { genres } = genreResponse;

    const config = await ApiConfigService.getApiConfiguration();
    const imgBaseUrl = config.images.secure_base_url;

    const movies = await this.getMovies(page);

    return movies.results.map((result) => {
      const genreNames = result.genre_ids.map((id) => genres.find((genre) => genre.id === id).name);
      const posterPath = result.poster_path;
      const year = new Date(result.release_date).getFullYear();
      return {
        ...result,
        genres: genreNames,
        fullPosterPath: `${imgBaseUrl}original${posterPath}`,
        yearOfRelease: year,
      };
    });
  },

  getGenres() {
    return fetch(`${API_BASE_URL}/genre/movie/list?api_key=${API_KEY}`, {
      method: 'GET',
    }).then((response) => response.json());
  },

  getMovies(page) {
    return fetch(`${API_BASE_URL}/movie/now_playing?page=${page}&api_key=${API_KEY}`, {
      method: 'GET',
    }).then((response) => response.json());
  },

  searchMovies(query) {
    const encodedQuery = encodeURI(query);
    const url = `${API_BASE_URL}/search/movie?query=${encodedQuery}&api_key=${API_KEY}`;
    return fetch(url, {
      method: 'GET',
    }).then((response) => response.json());
  },
};

export default MoviesService;
