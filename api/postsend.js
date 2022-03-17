var express = require('express')
var router = express.Router();

router.post('/', (req, res, next ) => {
    res.send({
        'postdbtitle':'Post전송방식은 좀 이렇게 xml혹은 json과 같은 구조가 단순하지않음',
        'postdbtitle2' :'좀더 내용을 넣어보는데 key와 value가 구분되는 json포멧으로',
        'key' :'value'
    })
})

module.exports = router