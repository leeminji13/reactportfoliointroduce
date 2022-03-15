var express = require('express')
var app = express();
var time = new Date();
var requrljs = require('./api/swtool')

app.get('/', (req, res) =>{
    res.send(' / 루트요청 있었음');
})
app.use('/api/Swtool', requrljs);

app.listen('8080', () =>{
    console.log(time + '콘솔에서 시간으로 확인해보면 바로 알게됨');
})