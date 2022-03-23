1. ex01 : callback별로 안 좋음
2. ex02 : promise 리턴 : 비동기함수
    + 비동기 함수를 사용하는 방식이 달라짐
    + 기존의 callback기간의 비동기함수들은 callback를 써야하는데, promise를 return하는 것 : promisfy 
    + es6에서는 await 사용할 수 있음
3. ex03 : await 사용
    + 코드가 전역범위에 있어서 실행되는 것 해결 
        + 함수만 import 가져와야하기 때문에 

        ```js
        //  실행 시 단독으로 실행 (node ex02 했을 때 실행되는 것)
        if (require.main == module) { 
        
        }
        else{ //  import, require 당했을 때
            //  함수만 import 가져와야함

        }
        ```
    + await : 암시적으로 Promise를 사용하여 결과를 반환함
    