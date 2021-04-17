import AppTemplate from './app.template';
import MoviesModule from './movies/movies.module';

const AppComponent = {
  init() {
    this.appElement = document.querySelector('#app');
    this.render();
    MoviesModule.init();
  },

  render() {
    this.appElement.innerHTML = AppTemplate();
  },
};

export default AppComponent;
