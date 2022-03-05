1. 초기 설정
    ```bash
    npm i
    ```
2. images 파일 추가, svg 파일 추가
3. module 추가
    ```js
    {
                //  이미지와 관련된 rule
                test : /\.(png|gif|jpe?g|svg|ico|tiff?|bmp)$/i,
                type : 'asset/resource'
            }]
    ```
4. 실행 
    ```bash
    npm start
    ```