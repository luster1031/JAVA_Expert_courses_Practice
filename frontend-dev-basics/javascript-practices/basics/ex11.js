/*  Array 메소드(Array.prototype)   */
var colors = ['black', 'white', 'yellow'];
var fruits = ['apple' ,'mango', 'banana'];

//  concat
var a1 = fruits.concat(colors);
console.log(a1);    //[결과] : [ 'apple', 'mango', 'banana', 'black', 'white', 'yellow' ]


//  pop, push 
var color = colors.pop();
console.log(color, colors); //[결과] : yellow [ 'black', 'white' ]
colors.push('red');
console.log(colors);    // 결과 : [ 'black', 'white', 'red' ]


//  join
var str = fruits.join(":");
console.log(str);   //  결과 : apple:mango:banana


//  reverse
console.log(fruits);    //  [ 'apple', 'mango', 'banana' ]
fruits.reverse();   
console.log(fruits);    //  [ 'banana', 'mango', 'apple' ]


//shift
var numbers = [1000, 2000, 3000, 4000, 5000];
var number = numbers.shift();
console.log(number, numbers);   //  1000 [ 2000, 3000, 4000, 5000 ]


//sort
numbers.sort();
console.log(numbers);   //  [ 2000, 3000, 4000, 5000 ]


//  slice
console.log(numbers);   //  [ 2000, 3000, 4000, 5000 ]
var numbers = numbers.slice(1,3);   //  인덱스부터, 3-1까지만
console.log(numbers);   //  [ 3000, 4000 ]


//  splice
//  index부터 count 개를 삭제한 후, 삭제된 요소를 반환
console.log(fruits);        //  [ 'banana', 'mango', 'apple' ]
var fruits2 = fruits.splice(0/*index*/, 2/*count*/);
console.log(fruits2);       //  [ 'banana', 'mango' ]

//  index부터 count 개를 삭제한 후, 세번째 파라미터로 대체, 삭제된 요소를 반환
var a1 = [0,1,2,3,4];
var a2 = a1.splice(1/*index*/, 3/*count*/, 10/*replce*/);
console.log(a2, a1);    //  [ 1, 2, 3 ] [ 0, 10, 4 ]

// a1.removeAt(1)
var a1 = [0,1,2,3,4];
var a2 = a1.splice(1,1);
console.log(a2, a1);    //  [ 1 ] [ 0, 2, 3, 4 ]

//  a1.insertAt(1, 10)
var a1 = [0,1,2,3,4];
var a2 = a1.splice(1, 0, 10);
console.log(a2, a1);    //  [] [ 0, 10, 1, 2, 3, 4 ]