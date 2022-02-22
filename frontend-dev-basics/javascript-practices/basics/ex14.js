/*      URL 다루기      */

var url1 = "http://www.mysite.com/user?name=둘리&no=10";
var url = "http://www.mysite.com/user";
// location.href=url1; //  브라우저 주소창이 바뀜


//  1. escape : URL 전부 encoding, 사용X, deprecated
var url2 = escape(url1);
console.log(url2);      //  http%3A//www.mysite.com/user%3Fname%3D%uB458%uB9AC%26no%3D10



//  2. encodeURI : parameter만 encoding, 사용(O)
var url3 = encodeURI(url1);
console.log(url3);      //  http://www.mysite.com/user?name=%EB%91%98%EB%A6%AC&no=10


//  3. encodeURIComponent : 값만 엔코팅 해야하는 경우, 사용(O)
var url4 = encodeURIComponent(url1);    //  잘못 사용한 경우
console.log(url4);      //  http%3A%2F%2Fwww.mysite.com%2Fuser%3Fname%3D%EB%91%98%EB%A6%AC%26no%3D10
//  location = 



//  4. 
//  만들어야 할 URI가
//  http://www.mysite.com/user?no=10&name=둘리&email=dooly@gamil.com
//  인 경우에
var params = {
    name : '둘리',
    email : 'dooly@gmail.com',
    no : 10
};


/*
var toQueryString = function(o){
    var qs = "";
    for(prop in o){
        console.log(prop);
        // qs += (prop + "=" + o[prop]+"&");   //  name=둘리&email=dooly@gmail.com&no=10&
        qs += (prop + "=" + encodeURIComponent(o[prop]) + "&");     //  name=%EB%91%98%EB%A6%AC&email=dooly%40gmail.com&no=10&
    }

    return qs;
}
*/

var toQueryString = function(o){
    var qs = [];
    for(prop in o){
       qs.push(prop + "=" + encodeURIComponent(o[prop]));
    }

    return qs.join("&");
}
var url5 = url  + "?" + toQueryString(params);
console.log(url5);      //  http://www.mysite.com/user?name=%EB%91%98%EB%A6%AC&email=dooly%40gmail.com&no=10


/* 
    jQuery = function(){...}
    $ = jQuery;
    $object = $("")


    $.ajax({
        url: url,
        tpye: 'post',
        data : toQueryString(o) 
    })
*/