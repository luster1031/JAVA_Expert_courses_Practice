## React Pracractices - Integration(개발 환경 통합)

## emaillist
   - 개발 통합 설정(with Spring Boot Backend)
   - backend: Fully APIs
   - Frontend: React(SPA)
   - AJAX: fetch 기반

## Configuration
1. Application(Project) Structure
   ```bash
   /emaillist
    |--- /backend
    |       |--- /src
    |       |--- pom.xml
    |--- /frontend
    |       |--- /config
    |       |       |--- babel.config.json
    |       |       |--- [webpack.config.json]
    |       |--- /public
    |       |       |--- favicon.ico
    |       |       |--- index.html
    |       |--- /src
    |       |       |--- /assets
    |       |--- /node_modules
    |       |--- package.json
    |       |--- package-lock.json
   ```
2. webpack dev server
3. package.json
4. concurrently


### webpack.config.json
+ output 설정
    ```js
    output : {
        path : path.resolve('../backend/src/main/resources'),
        filename : 'static/js/main.js',
        assetModuleFilename: 'assets/images/[hash][ext]'
    },
    ```
    > index.html
    ```js
    <script src="static/js/main.js"></script>
    ```


    