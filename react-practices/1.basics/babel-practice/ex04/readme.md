# Env Preset
```bash
$ npm init -y
```
1. 여러 플러그인의 변환 규칙을 한 번에 적용하기 위해 미리 관련 플러그인들을 모아 놓은 것
2. ECMAScript 년도별(버젼별)로 모아 놓은 것
    + stage(0, 1, 2, 3) 레벨별로 모아 둔 것도 있다. 
    + 3rd party(typescript, react) 등 종류가 다양함
3. Env Preset은 stage 3레벨 이상의 문법들을 변환하는 플러그인이다. 
4. Env Preset뿐만 아니라 다양한 플러그인들은 babel 설정을 통해서ㅓ 적용할 수 있다.(babel.config.json)

<br>

1. Env Preset 설치(babel 설치)
    ```bash
    $ npm i -D @babel/core @babel/cli @babel/preset-env 
    ```
2. Env Preset의 플러그인 확인 하기
    ```bash
    $ npm list --depth=1
    ```
3. Env Preset 설정(브라우저 타겟 설정)
    + 브라우저별 es6 호환성 테이블 참고 
        + https://kangax.github.io/compat-table/es6/
    > babel.config.json
    ```json
    {
        "presets": [
            ["@babel/preset-env"/*이름*/, {
                "targets":{
                    "ie":"11",
                    "edge":"89",
                    "firefox":"92",
                    "chrome":"90",
                    "opera":"76",
                    "safari":"15"
                } 
            }/*옵션*/]
        ],
        "plugins": [
        ]
    }
    ```
4. 변환하기
    ```bash
    $ npx babel src/ex.js -o dist/ex.js
    ```