var express = require('express');
var router = express.Router();

router.get('/', (req, res) =>{
    res.send('/api/swtool')

})

module.exports = router;