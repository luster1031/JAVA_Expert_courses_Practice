import React from "react";
const App = function() {
    //  dom API - browser dom에 create하는 것
    //  const App = document.createElement('h1');
    //  App.textContent = 'Hello World';

    
    //  reactDom에 create하는 것
    const App = React.createElement('h1', null, 'Hello World');
    return App;   
}

//export { 'App':App } -> 이름이 App
export { App }