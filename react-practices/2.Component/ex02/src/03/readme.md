# Normal CSS (css loader option : {module: true})
+ ```npm run debug src=03```
    + option을 안 줘도 됨
+ 해싱이 됨
    + 해싱된 이름으로 써줘야한다.
        ```js
        import React from 'react'
        import css from './assets/css/App.css';
        const App = () => {
        return (
            <div>
                <h1 className={css.Header}>{"Normal CSS (css loader option : {module: true})"}</h1>
            </div>
        )
        }

        export default App
        ```
        + ```<h1 className={css.Header}>``` 해줘야한다.
+ css 모듈화 시켜야함
    + 한 코드에만 특화되게 