import React from "react";

const App=function(){
    /*
        리액트 컨포넌트는 단일 루트 노드만 렌더링 할 수 있다. 
        
        하나의 element가 아니면 오류가 난다. 
        return (
            <h2>App02</h2>
            <p>JSX Tutorials - 특징2 : single Root Node</p>
        );
    */
    return (
        <div id="App">
            <h2>App02</h2>
            <p>JSX Tutorials - 특징2 : single Root Node</p>
          
        </div>
    );
}
export default App;