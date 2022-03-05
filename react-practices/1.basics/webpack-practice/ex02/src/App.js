//  어플리케이션 정의
const App = function() {
    const App = document.createElement('h1');
    App.textContent = 'Hello World';
    return App;   
}

//export { 'App':App } -> 이름이 App
export { App }