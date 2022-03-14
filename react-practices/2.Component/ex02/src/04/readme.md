1. App.js
    ```js
    import React from 'react'
    import Banner01 from './Banner01'
    import Banner02 from './Banner02'

    const App = () => {
    return (
        <div>
            <Banner01 />
            <Banner02 />
        </div>
    )
    }

    export default App
    ```

2. banner01.js
    ```js
    import React from 'react'
    import styles from './assets/css/Banner01.css';
    const Banner01 = () => {
    return (
        <h1 className={styles.Header}>Hello React</h1>
    )
    }

    export default Banner01
    ```
2. banner02.js
3. 실행
```npm run debug=src04
```