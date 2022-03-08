import ReactDOM from 'react-dom';
import { App } from './App.js';

//  dom API
/*document
    .getElementById('root')
    .appendChild(App());
*/

// React API 
ReactDOM.render(App(), document.getElementById('root'));    //  ReactDom에 있는 걸 Dom에 동기화 시키는 것
    //  react 변경한 점 찾아줘서 반영함
    //  id가 root인 dom을 찾아서 반영해줌