var app = require('express')(); 


var preinterview = require('./api/preinterview')

app.use('/prointerview', preinterview);

app.set('port',8080)
app.post('/', (req, res) =>{  res.send(' / 루트요청 있었음'); })
app.listen(app.get('port'), () =>{
    console.log('콘솔에서 시간으로 확인해보면 바로 알게됨');
})

// 노드의 역활은 서버 / 즉 데이터와 연동하지않을 테이터는 리액트컴포넌트로 표현
// 나머지 불필요한 라우터삭제