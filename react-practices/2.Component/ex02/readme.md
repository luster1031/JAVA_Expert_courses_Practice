# ex02 : Component Styling(Working with UI)

### [01 예제 : Inline Styling](https://github.com/luster1031/JAVA_Expert_courses_Practice/tree/master/react-practices/2.Component/ex02/src/01)
### [02 예제 : Normal CSS](https://github.com/luster1031/JAVA_Expert_courses_Practice/tree/master/react-practices/2.Component/ex02/src/02)
+ css loader option : {module: false}
+ html처럼 하면 된다.
+ ```$npm run debug src=02 css-modules=false```
### [03 예제 : Normal CSS](https://github.com/luster1031/JAVA_Expert_courses_Practice/tree/master/react-practices/2.Component/ex02/src/03)
+ css loader option : {module: true}
+ ```$npm run debug src=03 css-modules=true```
### [04 예제 : CSS Module](https://github.com/luster1031/JAVA_Expert_courses_Practice/tree/master/react-practices/2.Component/ex02/src/04)
+ css loader option : {module: true}
    + 모듈로 다루기
    + webpack.config.js에 옵션 추가 해야함
+ ```$npm run debug src=04 css-modules=true```
### [05 예제 : SACC & SCSS](https://github.com/luster1031/JAVA_Expert_courses_Practice/tree/master/react-practices/2.Component/ex02/src/05)
+ css loader option : {module: true}
+ id와 class가 해싱됨
```txt
-----------------------------------------------
CSS in JS(style Component), Less & Styleable
-----------------------------------------------
```
### 06 예제 : Font Awesome : Working with UI I
### 07 예제 : React Modal : Working with UI II
### 08 예제 : 
### 09 예제 : 

1. config 파일 만들어서 package.json, webpack.config.js 옮기기
2. package.json
    ```js
    "scripts": {
        "debug": "npx webpack serve --config config/webpack.config.js --progress --mode development --env",
        "build": "npx webpack"
    },
    ```
3. webpack.config.js
    ```js
    ... [생략]...
    module:{
                rules:[
                    {
                        test:/\.js$/i,
                        exclude:/node_modules/,
                        loader :'babel-loader',
                        options:{
                            configFile:path.resolve('config/babel.config.json')
                        }
                    }
    ... [생략]...
    ```

4. 실행
    + webpack.config.js
        ```js
        ... [생략]...
        module:{
            rules:[
                ... [생략]...
                ,{
                    test:/\.(sa|sc|c)ss$/i,    //  어떤 파일이 나의 타겟인지 알려줘야함
                    use:[
                        'style-loader',
                        {
                            loader:'css-loader',
                            options:{
                                modules:env['css-modules'] !== 'false'
                            }
                        },
                        'sass-loader']
                },
        ... [생략]...
        ```
    + 실행
        ```bash
        $ npm run debug src={} css-modules=([true]|false)
        ```
        + 옵션 안 주면 true : css 안 나옴
        + false : css 나옴
