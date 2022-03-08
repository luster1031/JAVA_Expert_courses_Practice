# Core 라이브러리
1. package.json
    ```bash
    npm init -y
    ```
2. core  라이브러리 설치
    ```bash
    $ npm i -D @babel/core
    ```
3. index.js
    + 화살표 함수
        ```js
        const fn = function(){
            return 1;
        }
        ```
        ```js
        const fn = () => 1;
        ```
    + 함수만들기
        ```js
        const result = babel.transform('const fn = () => 1;',{});
        ```
        + 규칙 적용해서 변환시키기
        + 변환규칙이 없음 -> ```{}```
        