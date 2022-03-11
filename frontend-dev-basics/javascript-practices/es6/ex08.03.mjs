/**
 * named export 1
 * 
 * export(require.js)와 유사
 * 이 모듈을 import 할 때에는 destructing이 가능하다.
 */

export const add = function(a,b){
    return a + b;
}

export const subtract = function(a,b){
    return a - b;
}