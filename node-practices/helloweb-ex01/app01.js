const http = require("http");

const port = 9090;
const server = http.createServer(function(req, resp){    //  요청 핸들러
    console.log("request received");
    resp.writeHead(200,{
        'Content-Type' : 'text/html'
    });
    
    resp.end('<h1>Hello World</h1>');  //  body

});


server.listen(port, function(){
    console.log("http server running on" + port);
});    //  9090에서 요청이 들어오면