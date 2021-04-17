import { API_BASE_URL, API_KEY } from './config';

const ApiConfigService = {
  getApiConfiguration() {
    return fetch(`${API_BASE_URL}/configuration?api_key=${API_KEY}`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => data);
  },
};

export default ApiConfigService;
