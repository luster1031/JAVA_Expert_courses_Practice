# Babel CLI 사용하기

1. 라이브러리 설치
    ```bash
    $ npm i -D  @babel/core 
    $ npm i -D  @babel/cli
    ```
2. 변환하기
    ```bash
    $ npx babel src -d dist
    ```
    + src에 있는 모든 파일을 dist에 변환하기
        + 변환이 안 되어 있음 -> 규칙을 안 줘서
        + core는 규칙이 없음
            + 플러그인을 사용해서 변환해야함
3. ./src/ex.js
