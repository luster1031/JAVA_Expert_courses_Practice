const express = require('express');

const router = express.Router();   //  라우터 객체 리턴해줌

router.route('/01').get(function(req, res){
    res.writeHead(200,{
        'Content-Type' : 'text/html'
    });
    res.end("<h1>/hello/</h1>");
});


module.exports = router;    //  좋은 방법이 아님