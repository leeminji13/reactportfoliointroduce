var express = require('express')
var app = express(); 

var postsend = require('./api/postsend')
var getsend = require('./api/getsend')
var sqlreqres = require('./api/introduce')


app.use('/postsend', postsend); 
app.use('/getsend', getsend);
app.use('/introduce', sqlreqres);

app.set('port',8080)
app.get('/', (req, res) =>{  res.send(' / 루트요청 있었음'); })
app.listen(app.get('port'), () =>{
    console.log('콘솔에서 시간으로 확인해보면 바로 알게됨');
})