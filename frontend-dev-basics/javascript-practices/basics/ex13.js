/*  String 객체 메소드 (String.prototype)   */

s = "hello";
s.substring();  //  new String (s).substring();으로 바꿔서 한번 실행되고 끝남

//  배열처럼 접근이 가능하다. 
var str1 = 'Hello World';
for(var i = 0; i<str1.length; i++){
    console.log(str1[i]);
}

//  문자열 합치기
var str2 = 'Hello';
var str3 = 'World';
var str4 = str2 + ' ' + str3;
console.log(str4);  //  Hello World
//  String str4 = new StringBuffer(str2).append(' ').append(str3).toString();


/*
String s = "";
for(int i = 0; i<10000000 ; i++){
    s = s + "hello";
    // -> s = new String(s).append("hello");
    //  계속 new해서 CPU가 계속 메모리 접근해서 안 끝남
}
*/

/*
StringBuffer s = new StringBuffer("");
for(int i = 0; i<10000000 ; i++){
    s.append("hello");
    // 메소드 호출이기 때문에 엄청나게 빠름
}
*/



//  캐스팅
var str5 = 5 + "5";
console.log(str5);

var str6 = "boolean:" + true;
console.log(str6);


//  메소드
var str7 = "string1 string2 string3";
var index = str7.indexOf('string2');
console.log(index);

var index = str7.indexOf('string4');
console.log(index);

str7.substring(10, 3/*count */);


var str8 = str7.substring(10, 13/*last index -1 */);
console.log(str8);

var a = str7.split(" ");
console.log(a);

var str11 = "abcdef";
var a = str11.split(":");   //  없어서 원래 문자열 나옴
console.log(a);             //  [ 'abcdef' ]
