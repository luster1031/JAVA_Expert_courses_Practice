/*      global object    */

//  var, let, const 쓰면 이 모듈 안에서만 쓸 수 있는 것
//  밖에서는 못 씀
var n1 = '둘리';
console.log(n1, global.n1);   //  둘리 undefined

global.n2 = '둘리2';
console.log(n2, global.n2);   //  둘리2 둘리2

//  cf
n3 = '둘리3';
console.log(n3, global.n3); //  둘리3 둘리3

global.name = '둘리';
email = 'dooly@gamil.com';
console.log(name, global.name, email, global.email);



console.log("======== function의 객체 메소드 apply ========");
var f1 = function(){
    console.log(this);  //  <ref *1> Object [global]
}
f1();


console.log("======== this 바꾸기 ========");
//  this 바꾸기
var o = {
    name : '마이콜'
};
f1.apply(o);       //   { name: '마이콜' }



console.log("======== function의 객체 메소드 call ========");
var f2 = function(s1, s2){
    console.log(s1 + " " + s2 + " " +  this.name);   //  this는 global이다.
};
f2('hi','');            //  hi 둘리
f2.call(o, 'hi');       //  hi undefined 마이콜
f2.call(o, 'hi', 'again');      //  hi again 마이콜
f2.apply(o, ['hi', 'again']);   //  hi again 마이콜