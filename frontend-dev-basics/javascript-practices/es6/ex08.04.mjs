/**
 * named export 2
 * 
 * export(require.js)와 유사
 * 이 모듈을 import 할 때에는 destructing이 가능하다.
 */

const add = function(a,b){
    return a + b;
}

const subtract = function(a,b){
    return a - b;
}

//  객체를 단축화 시켜주는거 지원함
//o = {
export {
    add,
    subtract
}