# Babel PlugIn(변환 규칙) 
```bash
$ npm init -y
```
1. 라이브러리 설치
    ```bash
    $ npm i -D @babel/core @babel/cli
    ```

2. 플러그인 적용
    1. 블록 스코프 변수 플러그인(@babel/plugin-transform-block-scoping)
        ```bash
        $ npm i -D @babel/plugin-transform-block-scoping
        $ npx babel src/ex.js -o dist/ex.js --plugins @babel/plugin-transform-block-scoping
        ```
        + const가 var로 변했음
    2. 객체분해 - 파라미터 플러그인(@babel/plugin-transform-parameters)
    3. 템플릿 문자열 변환 플러그인(@babel/plugin-transform-template-literals)
    4. for..of 변환 플러그인(@babel/plugin-transform-for-of)
    5. 모두 적용해보기
        ```bash
        $ npm i -D @babel/plugin-transform-block-scoping @babel/plugin-transform-parameters @babel/plugin-transform-template-literals @babel/plugin-transform-for-of
        
        $ npx babel src/ex.js -o dist/ex.js --plugins @babel/plugin-transform-block-scoping --plugins @babel/plugin-transform-parameters --plugins @babel/plugin-transform-template-literals --plugins @babel/plugin-transform-for-of (적용)
        ```
    + 바뀐 점
        ```js
        //   템플릿 문자열
        console.log(`${o.no },${o.name},${o.email}`)
        

        for(let user of users){
            print(user);
        }
        ```
        이
        ```js
        console.log("".concat(o.no, ",").concat(o.name, ",").concat(o.email));


        for (var _i = 0, _users = users; _i < _users.length; _i++) {
            var _user = _users[_i];
            print(_user);
        }
        ```
        으로 바뀜