## SASS/SCSS 모듈 번들링 하기
1. css파일 import
    > ./src/App.js
    ```js
    import './assets/scss/App.scss';
    ```
2. webpack.config.js 설정
    + scss module설정
    ```js
    module:{
            rules:[{
                test:/\.(sa|sc|c)ss$/i,    //  어떤 파일이 나의 타겟인지 알려줘야함
                use:['style-loader','css-loader','sass-loader']
            }]
        },
    ``` 
3. loader 다운 및 실행
    ```bash
    npm i
    npm i -D webpack-cli
    npm i -D webpack-dev-server
    npm i -D sass-loader
    npm i -D node-sass
    npm start
    ```