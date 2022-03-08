const babel = require('@babel/core');

//  함수 만들기
//  규칙 적용해서 변환시키기
const result = babel.transform('const fn = () => 1;',{});
console.log(result);