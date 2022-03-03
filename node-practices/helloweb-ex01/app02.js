const http = require("http");
const fs = require('fs');

const port = 9090;
const server = http.createServer(function(req, resp){    //  요청 핸들러
    console.log(req.url);

    if(req.url === '/'){            //  바꿔버리기
        req.url = '/index.html';
    }

    //data = fs.readFileSync('')    //  동기식
    //  비동기
    fs.readFile(__dirname + '/public' + req.url, function(error, data){ 
        //  __dirname : 현재 실행중인 경로
        resp.writeHead(200,{
            'Content-Type' : 'text/html'
        });
        resp.end(data);  //  body
    });
    //  fetch('')   //  제어 못하는 서버?

    
  

});


server.listen(port, function(){
    console.log("http server running on" + port);
});    //  9090에서 요청이 들어오면