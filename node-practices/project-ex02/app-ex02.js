/**
 * posco-ict-math 파일 모듈 테스트
 * (모듈 패키지 : 로컬 배포)
 * 
 * 로컬 패키지 설치
 * ${project-ex02} npm i ../posco-ict-math (이름 전세계에 유일해야함)
 */

var poscoMath = require("../posco-ict-math/posco-ict-math");

console.log(poscoMath.sum(10,20,30,40,50));
console.log(poscoMath.max(10,20,30,40,50));
console.log(poscoMath.min(10,20,30,40,50));
