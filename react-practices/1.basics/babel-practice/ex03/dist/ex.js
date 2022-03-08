//  블록 스코프 변수 - es6에 있는 것
//  const(함수), let(변수)
var users = [{
  no: 1,
  name: '마이콜',
  email: 'michol@gmail.com'
}, {
  no: 2,
  name: '둘리',
  email: 'dooly@gmail.com'
}]; //================================================
//  객체 분해(es6에 있는 문법)
//function print({no, name}}){    -> 들어오는 변수 중에 no, name만 분해하겠다.

var {
  no
} = user[0];
console.log(no);

function print(o) {
  //console.log("1, 둘리, dooly@gmail.com");
  console.log(o.no + ", " + o.name + ", " + o.email); //   템플릿 문자열

  console.log("".concat(o.no, ",").concat(o.name, ",").concat(o.email));
} //  for..of(es6)
//  자바의 for(user : users)와 똑같


for (var _i = 0, _users = users; _i < _users.length; _i++) {
  var _user = _users[_i];
  print(_user);
}
