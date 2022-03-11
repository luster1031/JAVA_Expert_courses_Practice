/*
    ex03 : Template Literal
*/

let no = 10;
let name = '둘리';
let email = 'dooly@gmail.com';

//ex01
console.log('no : 10, name : 둘리, email: dooloy@gmail.com');
console.log('no : ' + no + ', name : ' + name + ', email : ' + email);
console.log(`no : ${no}, name : ${name}, email : ${email}`);

//  ex02
console.log('no : ' + no + '\nname : ' + name + '\nemail : ' + email);
    //리터럴은 개행을 지원해줌
console.log(`no : ${no}
name : ${name}
email : ${email}`);
