var express = require('express')
var mysql = require('mysql')
var dbconfig = require('../db/config.js')

var pool = mysql.createPool(dbconfig); 

var router = express.Router();
router.use(express.urlencoded({ extended : true }))

router.get('/', (req, res, next) =>{
   

   var botable = req.query.botable;
    //~~~~?botable=conent_interview    
  
    if(botable == 'conent_interview'){
        pool.getConnection(function(err, connection) {
            connection.query(
                'select * from bby_preinterview.'+botable, 
                (error, result) => {
                    if(error) throw error;
                    res.send(result)
                })       
            connection.release(); //추가구절
        })
   }else{ //botable이 없는 경우 
      var accident = require('../routes/normal')
      router.use('/', accident ) //라우팅생성
      // next에 res를 출력하게 페이지분배
      next('route')
   }
})

module.exports = router;