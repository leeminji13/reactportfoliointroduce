var express = require('express')
var mysql = require('mysql')
var dbconfig = require('./db/config.js')
var connection = mysql.createConnection(dbconfig)

var postsend = require('./api/postsend')
var getsend = require('./api/getsend')

var app = express(); 

app.get('/introduce', (req, res) =>{
    connection.query(
        'select * from introduce_react_node.prev_interview', 
        (error, result) => {
            if(error) throw error;
            res.send(result)
        })
})
app.use('/postsend', postsend); app.use('/getsend', getsend);

app.set('port',8080)
app.get('/', (req, res) =>{  res.send(' / 루트요청 있었음'); })
app.listen(app.get('port'), () =>{
    console.log('콘솔에서 시간으로 확인해보면 바로 알게됨');
})