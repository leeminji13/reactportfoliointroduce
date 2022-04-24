import React from 'react';
import '../App.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';
import $ from 'jquery';

export default function interviewform(props) {

    const submitClick = async (type, e) => { 
        //이 안에 비동기식 있겠구나,첫번째 인자(parameter): xml까지 -> sql선택의 key
        //두번째 인자는 마우스 피드백(이벤트/클릭같은)
        //이벤트리스너 -> 함수저장 -> 객체의 이벤트에 저장됨(버튼은 이벤트 리스너를 저장)

        //button.onClick = function() ->button에 onClick을 연결 onClick이 이벤트 리스너 function을 저장
        // function ccc (){

       //}
       //button.onCilck = ccc
      
       //button.onClick = function(e){ ccc('값')}
       //<button onClick={ ccc() }> ->실행하다(클릭을 하지 않아도 실행됨)
       //<button onClick = { e => {ccc()} }> -> 이벤트가 들어오면 실행해라

        const  fnValidate = (e) =>{//유효성검사
                if(!$('#agreeTerm').is(':checked')){   
                    alert("동의하시게나");
                    $('label[for="agreeTerm"]').addClass('notice'); 
                    // 'notice'는 css로 색을 강조하거나 밑줄 등등 추가하기                
                    return false;
                }
                // if(){
                //     return false;
                // }
                return true; //제일 아래에 있어야 한다. 여러가지 if문이 걸리지 않으면 true
                
              }
          var time = new Date(); 
         
          if(fnValidate()){ // fnValidate()==fnValidate를 실행했을때 /동의했기때문에 데이터 모아서 이제 비동기로 노드한테 보내야겟다
            
            // 폼필드에 내가 원하는대로 사용자가 데이터를 삽입했음
            var  jsonstr = decodeURIComponent($("[name='"+props.botable+"']").serialize());           
            var  json_form = JSON.stringify(jsonstr).replace(/\&/g, '\",\"') //stringify==텍스트화
            json_form = "{\""+ json_form.replace(/=/gi, '\":\"') + "\"}" //넘어갈때 가공되지 않도록 딱딱하게 만든다.
            // json화시킴 -> 노드
           
           
            //노드 -> xml -> sql
            try{
                axios({
                    url:`/prointerview?type=${props.botable}`, //요청 req.body ->응답 res.send
                    header:{
                        "Content-Type" : 'appication/json',
                    },
                    method:"POST",
                    body : json_form //내용
                })
                .then(//응답받으면..
                    (result) => {                            
                        try{  
                            console.log(result);  
                            
                            if(!$('#wr_content').is(':checked')){
                                alert("인터뷰가 등록되었습니다.")
                            }                                    
                            
                        }
                        catch(err){ console.log("result 타입확인할것 : "+err.message + " / "+ typeof result) }
                    }
                )

            }
            catch(err){
                console.log("서버통신 문제가 있습니다. 다시 시도해 주세요:"+err)
            }//만일의 상황을 대비해서(통신이 안됬을때)/axios가 안됐을때
            

          }
          //e.preventDefault(); 
}
  return (
        <div id="contact" className="pl-mj pr-mj">
             <div>
                <p className="blackline2 pb-5">
                    <span className="num2 blackline">03</span>
                    Leeminji : contact me
                </p>
            </div>
            {/* <h2 className="d-flex justify-content-center">{ props.titlenm }</h2> */}
            <Form action="https://www.naver.com" onsubmit="return forminspector(this)" method="post" name="contactform" id="contactform">
                <FormGroup className="company">
                    <Label for="company">회사명</Label>
                    <Input type="text" name="company" required/>
                </FormGroup>

                <FormGroup className="date w-100">
                    <Label for="interviewDT">면접 날짜와 시간</Label>
                    <Input type="date" name="date" id="exampleDate" placeholder="date placeholder" />
                    <Input type="time" name="time" id="exampleTime" placeholder="time placeholder" />
                </FormGroup>
                
                <FormGroup className="position">
                    <div class="title d-flex align-items-center w-100">
                        <h3>포지션</h3>
                        <span>*하나만 선택해주세요</span>
                    </div>
                    <ul className="d-flex align-items-center mb-3">
                        <li className="d-flex align-items-center">
                            <Input type="radio" name="jobposition" value="t" id="rc1" required></Input>{' '}
                            <Label for="rc1" className="ms-2">마케팅과 기획</Label>
                        </li>
                        <li className="d-flex align-items-center">
                            <Input type="radio" name="jobposition" value="m" id="rc2" required></Input>{' '}
                            <Label for="rc2" className="ms-2">퍼블리셔</Label>
                        </li>
                        <li className="d-flex align-items-center">
                            <Input type="radio" name="jobposition" value="p" id="rc3" required></Input>{' '}
                            <Label for="rc3" className="ms-2">디자인</Label>
                        </li>
                        <li className="d-flex align-items-center">
                            <Input type="radio" name="jobposition" value="c" id="rc4" required></Input>{' '}
                            <Label for="rc4" className="ms-2">영업</Label>
                        </li>
                    </ul>
                </FormGroup>
               
                <FormGroup className="publisher">
                <div className="title d-flex align-items-center w-100">
                    <h3>희망업무 능력 순위</h3>
                    <span>*포지션이 퍼블리셔일 경우에만 해당됩니다.</span>
                </div>
                    <ul className="d-flex">
                        <li className="d-flex align-items-center">
                            <Label for="ab1">html/css</Label>
                            <Input className="border ms-2" type="text" maxlength="1" size="1" name="abillity[0]" id="ab1" required></Input>
                        </li>
                        <li className="d-flex align-items-center">
                            <Label for="ab2">jquery</Label>
                            <Input className="border ms-2" type="text" maxlength="1" size="1" name="abillity[1]" id="ab2" required></Input>
                        </li>
                        <li className="d-flex align-items-center">
                            <Label for="ab3">node & mysql</Label>
                            <Input className="border ms-2" type="text" maxlength="1" size="1" name="abillity[2]" id="ab3" required></Input>
                        </li>
                        <li className="d-flex align-items-center">
                            <Label for="ab4">react</Label>
                            <Input className="border ms-2" type="text" maxlength="1" size="1" name="abillity[3]" id="ab4" required></Input>
                        </li>
                    </ul>
                </FormGroup>
                <FormGroup className="pnum">
                    <Label for="phone">담당자연락처</Label>
                    <div className="d-flex align-items-center ms-2">
                        <Input type="select" id="number">
                            <option>010</option>
                            <option>011</option>
                            <option>017</option>
                        </Input>
                        <Input type="text" name="phone" placeholder="0000" required></Input>
                        <Input type="text" name="phone" placeholder="0000" required></Input>
                    </div>
                   
                </FormGroup>
                <FormGroup check className="agree pb-5">
                    <Label check className="d-flex justify-content-center align-items-center">
                        <Input type="checkbox" />
                        개인정보정책동의
                    </Label>
                </FormGroup>
                <Button><img src="/img/ftsubmit.svg"></img></Button>
            </Form>
            {/* <form  action=''  method='post' name={props.botable}>
               <div className='formStyle'>
                   <dl>
                       <dt><label htmlFor='wr_subject'>인터뷰제목</label></dt>
                       <dd>
                           <input type='text' name='wr_subject' id="wr_subject" required />
                       </dd>
                   </dl>
                   <dl>
                       <dt><label htmlFor="wr_content">인터뷰내용</label></dt>
                       <dd>
                           <textarea rows={5} name="wr_content" id="wr_content"  required >

                           </textarea>
                       </dd>
                   </dl>
                   <div className="agree">
                       <input type="checkbox" id="agreeTerm" />
                       <label htmlFor="agreeTerm"><span>개인정보정책동의</span></label>
                   </div>
                   <a href="#none" onClick={e => { submitClick(props.botable, e) }}  className='btn' > 인터뷰올리기 </a>
               </div>
            </form>  */}
        </div>
  )
}
