import { API_BASE_URL, API_KEY } from '../../config';
import ApiConfigService from '../../api-config.service';

const MoviesService = {
  async getMovieList() {
    const genreResponse = await this.getGenres();
    const { genres } = genreResponse;

    const config = await ApiConfigService.getApiConfiguration();
    const imgBaseUrl = config.images.secure_base_url;

    const movies = await this.getMovies();

    return movies.results.map((result) => {
      const genreNames = result.genre_ids.map((id) => genres.find((genre) => genre.id === id).name);
      const posterPath = result.poster_path;
      return {
        ...result,
        genres: genreNames,
        fullPosterPath: `${imgBaseUrl}original${posterPath}`,
      };
    });
  },

  async getGenres() {
    return fetch(`${API_BASE_URL}/genre/movie/list?api_key=${API_KEY}`, {
      method: 'GET',
    }).then((response) => response.json());
  },

  async getMovies() {
    return fetch(`${API_BASE_URL}/movie/now_playing?api_key=${API_KEY}`, {
      method: 'GET',
    }).then((response) => response.json());
  },
};

export default MoviesService;
