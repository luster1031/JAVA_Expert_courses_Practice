import './assets/scss/App.scss';
import logo from './assets/images/logo.svg';

//  어플리케이션 정의
const App = function() {
    const app = document.createElement('div');
    app.className = 'App';
    app.innerHTML=
        `
        <header class='App-header'>
            <img src='${logo }' class='App-logo' alt='logo'/>
            <p>Hello World</p>
        </hedaer>
        `;
    return app;   
}

export { App }