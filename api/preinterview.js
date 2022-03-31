var express = require('express')
var router = express.Router();

var normalpage = require('../routes/normal')
var awssql = require('./awssql')

router.use(express.urlencoded({ extended : true }))

router.post('/', (req, res, next) =>{   
   var type = req.query.type;
   req.body.mapper = "introduceSql";     
  
   if( type ){  
      switch(type){
         //사전인터뷰 글보기, 글쓰기, 글수정
         case 'interviewlist' : req.body.crud = "select"; 
                       req.body.mapper_id = "interview";
                       break;
         case 'interviewwrite': req.body.crud = "insert"; 
                       req.body.mapper_id = "interviewInsert";
                       break;
         case 'interviewmodify': req.body.crud = "update"; 
                       req.body.mapper_id = "interviewModify";
                       break; 
         //면접제안 글보기, 글쓰기
         case 'meetinglist': req.body.crud = "select"; 
                       req.body.mapper_id = "meetingArrange";
                       break;
         case 'meetingwrite': req.body.crud = "insert"; 
                       req.body.mapper_id = "meetingArrangeInsert";
                       break;         
         default      : req.body.crud = "delete"; 
                        req.body.mapper_id = "interviewDrop";
                        break; 
      }  
          router.use('/', awssql )
          next('route')
   }
   else{           
          router.use('/', normalpage )
          next('route')
   }   
})

module.exports = router;