import React from "react";
const App = function() {
  
    //  reactDom에 create하는 것
    /*
    const App = React.createElement('h1', null, 'Hello World');
    return App;   
    */

    const message = "Hello World";
    //  JSX
    return (
        <div>
            <h1>(message)</h1>
        </div>
    );
    
    //React.createElement('div', React.createElement('h1', null, 'Hello World'), null);
}

//export { 'App':App } -> 이름이 App
export { App }