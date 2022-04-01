import React, {useEffect, useState} from 'react'; 
import axios from 'axios';
import $ from 'jquery';


const Interview = (props) => {   
   
    let [ interviewId, interviewIdUpdate ] = useState([]);  
    const [typeData, insertDB ] = useState(0); 
   
    const interviewDataSetting = async () => {                      
        axios(                                
                { 
                     url :`/prointerview?type=${props.botable}`,
                     method : 'POST',
                }
             )
        .then(
               (result) => {                            
                            try{  
                                console.log(result)
                                interviewIdUpdate([...result.data]); 
                                insertDB(result.data[ result.data.length - 1 ].no);                                                 
                            }
                            catch(err){ console.log("result 타입확인할것 : "+err.message + " / "+ typeof result) }
                        }
        )
        .catch ( e => { console.log(e +'이유로 통신이 불안전함') }
        ) 
    }   
  
    useEffect( () => {  
        interviewDataSetting();
       
     } , [typeData]  ) 
   
    

    const submitClick = async (type, e) => {

        const  fnValidate = (e) =>{
            //여기서 유효성검사
            // 필드에 값이 맞지않거나   
              return true;
          }
          if(fnValidate()){

           
            var  jsonstr = decodeURIComponent($("[name='interviewwrite']").serialize()); //컴퓨터가 편하게 다루는 유니코드로 표현되는 값을 한글로 컨버트
            alert("1."+jsonstr);
            var json_form = JSON.stringify(jsonstr).replace(/\&/g, '\",\"') // 네임=값","네임=값
            alert("2."+json_form);
            json_form = "{\""+ json_form.replace(/=/gi, '\":\"') + "\"}" // { "네임":"값","네임":"값" }
            alert("3.데이터를 한번에  json문법화됨 serialize() 안쓰면 일일이 담아야 함 "+json_form);

            e.preventDefault(); //react에서는 폼태그 전송 막기 위해서는 return false 가 아니다.
        }        
   

    }

        return (  
            
            <div> 
                 <h2>{ interviewId.length > 0 ? props.titlenm : "데이터전송중..." }</h2>
             {
                 interviewId.map(( contant, i ) => {
                     return(
                         <li key={contant.no}>
                             <h3>{i+1} {contant.subject}</h3><div>{contant.content}</div>
                         </li>
                     )
                 })
             }
                 <h2>인터뷰글 올리기</h2>
                 <form  action='' onSubmit={ e => { submitClick("interviewwrite", e); }}  method='post' name="interviewwrite">
                    <div className='formStyle'>
                        <dl>
                            <dt>인터뷰제목</dt>
                            <dd>
                                <input type='text' name='wr_subject' />
                            </dd>
                        </dl>
                        <dl>
                            <dt>인터뷰내용</dt>
                            <dd>
                                <textarea rows={5} name="wr_content">

                                </textarea>
                            </dd>
                        </dl>
                        <button className='btn'> 인터뷰올리기 </button>
                    </div>
                 </form>                
            </div>
        );   
}
export default Interview;