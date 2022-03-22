var express = require('express')
var mysql = require('mysql')
var dbconfig = require('../db/config.js')

var pool = mysql.createPool(dbconfig); 

var router = express.Router();
router.use(express.urlencoded({ extended : true }))

router.get('/', (req, res, next) =>{
   

   var botable = req.query.botable;
   var crud = 'select'

   switch(botable){ //워크벤치의 스키마.테이블
    case "bby_preinterview.conent_interview" : 
         crud = 'select';         
         break;
    default:
         botable = 'none' ;
         crud = '';
         break;
    }
  
    if(botable !== 'none'){
        pool.getConnection(function(err, connection) {
            connection.query(
                crud +' * from '+ botable, 
                (error, result) => {
                    if(error) throw error;
                    res.send(result)
                })       
            connection.release(); //연결한것을 이제 풀어라
        })
   }
   else{ //botable이 없는 경우 
      var accident = require('../routes/normal')
      router.use('/', accident ) //라우팅생성
      // next에 res를 출력하게 페이지분배
      next('route')
   }
})

module.exports = router;