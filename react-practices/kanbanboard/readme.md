1. 설치 
    ```bash
    $ npm i
    ```
2. 설정 
    + babel.config.json
    + webpack.config.js
3. 스크립트 추가하기
    ```json
        "scripts": {
            "start": "npx webpack serve --progress --mode development ",
            "build": "npx webpack"
        },
    ```
4. 실행
    ```bash
    $ npm start
    ```


## 필터
+ false
    ```js
    const result = [0,1,2,3,4].filter(function(e){
        return false;   //  false로 하면 해당하는 얘는 안 넣음
    })
    console.log(result);
    ```
+ true;
    ```js
    const result = [0,1,2,3,4].filter(function(e){
        return true;   //  다 나옴
    })
    console.log(result);
    ```