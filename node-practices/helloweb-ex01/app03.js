const connect = require("connect");
const serveStatic = require("serve-static");

const port = 9090;
const app = connect();  //  함수 바로 import 

app.use(serveStatic(__dirname + "/public")) //  정적자원에 대한 요청을 serveStatic에 맡기겠다.
                                            //  url을 어디서 찾아야하는지는 알려줘야함

                                            
app.listen(port, function(){
    console.log("http server running on " + port);
});    //  9090에서 요청이 들어오면