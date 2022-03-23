const fetch = function (param, callback) { //  파라미터 요청하고 맨 끝에 callback넣음
    //  
    //  비동기 코드 : 파일 시스템 접근, 네트워크통신, SQL to DB, setTimeout
    //  

    //  $.ajax({}) 함수가 같음
    setTimeout(function () {
        if(param == 'param-data'){
            callback(null, 'ok');
        }else{
            callback(new Error('fail'), null);
        }
    }, 2000);
    //  wait먼저 출력되고, settimeout내용 출력됨
}

//  test 01 : success
// ex01("http://192.168.0.1/api");
fetch('param-data', function (error, res) { //  callback의 규칙 : 첫번째 자리에 error넣고, 두번째 자리에 res
    if (error) {
        console.error(error);
    } else {
        //  데이터(결과) 처리하는 함수
        console.log(res);
    }

})


//  test 02 : fail
fetch('param-error', function (error, res) { 
    if (error) {
        console.error(error);
    } else {
        console.log(res);
    }

})


console.log("wait...");
