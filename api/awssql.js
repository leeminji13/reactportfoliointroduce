var express = require('express')
var mysql = require('mysql')
var mybatisMapper = require('mybatis-mapper')
var dbconfig = require('../db/cafe24.js')


var router = express.Router();
var pool = mysql.createPool(dbconfig); 

router.use(express.json())

//node의 main을 기준으로 경로 계산해야됨!!! 
mybatisMapper.createMapper(['./mapper/introduceSql.xml'])
var format = { language : 'sql', indent : '  '}


router.post('/', (req, res ) =>{ 
    var params = req.body; //json
    var query = mybatisMapper.getStatement(
    params.mapper, params.mapper_id, params, format );
    //sql문 추출해서 query에 담기 


    pool.getConnection(function(err, connection) {

        if(err) console.log(" DB접속불가 db정보 확인할것 config.js오류: "+err);

        connection.query(
            query, // 여기는 반드시 sql문이 들어와야 에러가 안남
            (error, result) => {
                if(error) throw error; // result를 받지 못하는 상황

                if(req.body.crud == 'select'){
                    res.send(result); // react한테 res.data를 주라.
                    //sql전송결과 보냄
                }else{
                    res.send("succ"); // react한테 succ라는 문자를 주라.
                }
            })       
        connection.release(); 
    }) 
})

module.exports = router