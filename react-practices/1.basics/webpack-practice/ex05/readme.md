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
2. loader 다운 및 실행
```bash
npm i
npm i sass-loader
npm i node-sass sass-loader
npm start
```