const http = require('http');
const path = require('path');
const express = require('express');
const port = 9090;


const helloRouter = require('./routes/hello')   //  router가 import됨


//  Application SetUp
const application = express()
    //  1. static resources
    .use(express.static(path.join(__dirname , "assets")))
    //  2. request body parser
    .use(express.urlencoded({extended:true}))    //  application/x-www-form-urlencoded
    .use(express.json())                    //  apllication/json
    //  3. view engine
    //  4. request router
    .all('*',function(req, res, next){
        res.locals.req = req;
        res.locals.res = res;
        next();         //  다음 라우터가 실행 될 수 있도록
    })
    .use('/hello',helloRouter);


//  Server SetUp
http
    .createServer(application)
    .on('listening', function(){
        console.log("http server runs on " + port);
    })
    .on('error', function(error){
        console.error(error);
    })
    .listen(port);      // server에 바로 listen사용 가능