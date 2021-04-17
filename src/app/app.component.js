import AppTemplate from './app.template';

const AppComponent = {
  init() {
    this.appElement = document.querySelector('#app');
    this.render();
  },

  render() {
    this.appElement.innerHTML = AppTemplate();
  },
};

export default AppComponent;
