//  어플리케이션 정의
function App(){
    const App = document.createElement('h1');
    App.textContent = 'Hello World';
    return App;   
}

document
    .getElementById('root')
    .appendChild(App());