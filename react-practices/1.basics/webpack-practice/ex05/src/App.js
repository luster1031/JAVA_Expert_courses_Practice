import './assets/scss/App.scss';

//  어플리케이션 정의
const App = function() {
    const App = document.createElement('h1');
    App.className = 'Header';
    App.textContent = 'Hello World';
    return App;   
}

export { App }