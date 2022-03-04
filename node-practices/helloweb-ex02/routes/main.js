const express = require('express');

const router = express.Router();   //  라우터 객체 리턴해줌

router.route('').get(function(req, res){
    res.render('main/index');
});


module.exports = router;    //  좋은 방법이 아님