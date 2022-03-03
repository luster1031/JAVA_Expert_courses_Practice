const connect = require("connect");
const serveStatic = require("serve-static");
const connectRoute = require("connect-route");

const port = 9090;
const app = connect();  //  함수 바로 import 

//  router정보를 전해줌
app.use(connectRoute(function(router){  
    router.get("/", function(req, resp){    //  "/"로 들어오면 이렇게 해라 
        resp.writeHead(200,{
            'Content-Type' : 'text/html'
        });
        resp.end("<h1>Main</h1>");
    });
    router.get("/user", function(req, resp){
        resp.writeHead(200,{
            'Content-Type' : 'text/html'
        });
        resp.end("<h1>User</h1>");
    });
    
}));   //  요청이 들어 왔을 때, 함수를 실행해줌 (함수를 등록해줌)
app.use(serveStatic(__dirname + "/public")); //  정적자원에 대한 요청을 serveStatic에 맡기겠다.
                                            //  url을 어디서 찾아야하는지는 알려줘야함

                                            
app.listen(port, function(){
    console.log("http server running on " + port);
});    //  9090에서 요청이 들어오면