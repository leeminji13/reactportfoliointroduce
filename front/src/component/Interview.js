import React, {useEffect, useState} from 'react';
import axios from 'axios';


const Interview = (props) => {

    const [interviewId, interviewIdUpdate ] = useState(0);  
    const [initData, setInitData] = useState([
        
    ])
    //initData의 데이터타입은 array, object를 값으로 하는 array == 데이터베이스와 연동한 mapping을 같음

    const interviewPublic = async () => {     
                                                                
                                    await axios.get(
                                        `/prointerview?botable=${props.botable}`
                                        ).then(
                                            (result) => {
                                                
                                               
                                                //실행이 되었었지만 get으로 데이터올때까지는 실행하지않고 대기한다.
                                               const _interviewObjs = result.data.map(
                                                   //새로운 변수로 sql데이터들을 차례대로 object 변수로 옮겨줌
                                                   // map( (arr기준변수) => ( )) map실행 프로토타입 
                                                   // _interviewtext은 테이터타입 array(object에 해당함)
                                                   (row) => ( 
                                                     interviewIdUpdate(row.no),
                                                        {
                                                                no : row.no,
                                                                subject: row.subject,
                                                                content: row.content,

                                                        }
                                                   )
                                               ) // map마침
                                               console.log(_interviewObjs)
                                               setInitData(_interviewObjs)
                                               console.log(initData)

                                            }
                                        ).catch ( (e) => {
                                            console.log(e +'이유로 통신이 불안전함')
                                             }
                                        )  
                              
    }
    
    
    useEffect( () => {           
        //클래스 컴포넌트 componentDidMount , componentDidUpdate, componentWillUnmont 모두를 수행하는 함수 
       
        interviewPublic(); 
        
     } , [initData]  )

    

     //출력
        
        return (           
        
            <div>
               { interviewId !== '번호' ?  interviewId : '비동기통신 연결아직 안됨'} 
             
              <p>{typeof initData}</p>
            </div>
        );
   
}

export default Interview;