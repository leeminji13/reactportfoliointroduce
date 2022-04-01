import React, {useEffect, useState} from 'react'; 
import axios from 'axios';


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
                               
            </div>
        );   
}
export default Interview;