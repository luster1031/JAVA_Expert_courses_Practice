## 이미지 모듈 번들링 하기
1. 초기 설정
    ```bash
    npm i
    ```
    + webpack에서 image loder 지원해준다.
2. images 파일 추가, svg 파일 추가
3. module 추가
    ```js
    output : {
        .
        [생략]
        .
        assetModuleFilename: 'assets/images/[hash][ext]'
    },
     module:{
        rules:[{
                .
                [생략]
                .
                //  이미지와 관련된 rule
                test : /\.(png|gif|jpe?g|svg|ico|tiff?|bmp)$/i,
                type : 'asset/resource'
            }]
    ```
4. 실행 
    ```bash
    npm start
    ```