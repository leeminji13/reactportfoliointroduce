//botalble에 대한 응답을 해줄수없는 경우 출력될 페이지임
var express = require('express')
var router = express.Router();

router.get('/', (req, res ) => {
    res.send("localhost:3000/prointerview로 get으로 전송")
})
router.post('/', (req, res ) => {    
    res.send("localhost:3000/prointerview post로 요청전송")
})

module.exports = router