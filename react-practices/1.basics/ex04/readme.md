# ex04 : (합칠때)애플리케이션 번들링()
```bash
pro
    |-- src
    |    |-- assets 
    |    |    |-- css
    |    |    |-- images
    |    |-- a.js
    |    |-- b.js
    |    |-- index.js
    |-- webpack.config.js
    |-- 모카설정
```
1. webpack이 읽어서, 의존성 트리를 만듦
2. transpile
3. **lint 작업 (필수작업)** 
4. document 문서 작업 (따로 설정 필요)
5. test 작업 (따로 설정 필요)
6. **압축작업(uglyfy) (필수작업)**
7. 번들링 작업

+ 1~7 모든 작업을 loader를 통해서 한다. (css loader, image loader... )
    + loader가 js로 만들어줌
+ JSX로 짜여 있으면 linting 작업이 없음

<br>

-------

```bash
/ex04
    |-- src
        |-- index.js (entry)
        |-- App.js
```
1. webpack 설치
2. webpack 실행
    + 의존성 분석함
    ```bash
    ${ex04} npx webpack ./src/index.js
    ```
    + 오류남 : App.css가 없어서 (의존성 분석해서)
        + ```import './App.css';```주석 처리
    + ./dist/main.js가 생김 -> 삭제
3. main.js 만들기
    ```bash
    ${ex04} npx webpack ./src/index.js -o ./public
    ```
    > ./public/index.html
    ```html
     <script src="main.js"></script>
    ```
    + main.js로 바꾸기
    + package.json 빌드 추가
        ```json
         "scripts": {
            "start": "node dev-server.mjs",
            "build":"npx webpack ./src/index.js -o ./public"
        },
        ```
    + 실행
        ```bash
        ${ex04} npx run build
        ${ex04} npx start
        ```