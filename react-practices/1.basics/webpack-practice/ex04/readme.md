1. css파일 import
    > ./src/App.js
    ```js
    import './assets/css/App.css';
    ```
2. css header className 설정
    > ./src/App.js
    ```js
    App.className = 'Header';
    ```
    + App.css파일의 .Header를 쓰기 위함
3. webpack.config.js 설정
    ```js
    module:{
            rules:[{
                test:/\.css$/i,    //  어떤 파일이 나의 타겟인지 알려줘야함
                use:['style-loader','css-loader']
            }]
        },
    ```
4. 실행 
```bash
npm i
npm i -D style-loader css-loader
npm run build
npm start
```