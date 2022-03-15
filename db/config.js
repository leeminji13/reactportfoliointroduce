var express = require('express');
var router = express.Router();
const mysql = require('mysql');
const reqbodyparser = require('body-parser');

router.use(reqbodyparser.json());
//이전라이터가 전달한 req.body을 json으로 처리실행
const connection = mysql.createConnection({
    host : "myreactdb-1.cnplyybrklko.ap-northeast-2.rds.amazonaws.com",
    port : "3306",
    database : "",
    user : "admin",
    password : "Bang0820!!",
})

router.post('/', (req,res) =>{
    connection.query( query, (error, results) => {
        if(error) {
            console.log(error)
        }
        string = JSON.stringify(results)
        var json = JSON.parse(string)
        res.send({json});
    })
})




module.exports = router;