var express = require('express');
var router = express.Router();

const reqbodyparser = require('body-parser');
//req.body의 담긴 정보를 해석할 준비한다.
router.use(reqbodyparser.urlencoded({ extended : true }))
//use는 라우터요청주소 설정 및 관리 메서드
//주소를 데이터화

router.get('/', (req, res, next) => {
  var type = req.query.type; 
  //6번에 의해 라우터기능이 확장 주소의 담긴 키값분리가능
  if(type == 'list'){
      try{
        var dbcontactnsend = require('../db/config')
        
        req.body.mapper = 'Dbfilenm';
        req.body.crud ='select';
        req.body.mapper_id = 'selectsql';

        router.use('/',dbcontactnsend)
        next('route')

      }catch(error){
          console.log(error);
      }
  }else{
      res.send('주소창에 심플')
  }

})

module.exports = router;