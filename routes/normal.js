//botalble에 대한 응답을 해줄수없는 경우 출력될 페이지임
var express = require('express')
var router = express.Router();

router.get('/', (req, res ) => {
    res.send("/prointerview?type=해당키워드가 없거나/ prointerview요청주소에 맞는 Get데이터가 없습니다.")
})
router.post('/', (req, res ) => {    
    res.send("/prointerview?type=해당키워드가 없거나/ prointerview요청주소에 맞는 post데이터가 없습니다.")
})

module.exports = router