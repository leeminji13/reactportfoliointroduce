import React, { Component } from 'react'
import '../App.css';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Progress } from 'reactstrap';
import { Link } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion'



export default class Aboutme extends Component{
    render(){
        return(
            <div id="aboutme" className='pl-mj pr-mj np'>
                <div>
                    <p className="blackline2 pb-5">
                        <span className="num2 blackline">02</span>
                        Leeminji : about me
                    </p>
                </div>
                <Card className='row align-items-center d-block d-md-flex flex-row position-relative'>
                    <CardBody className='text-center col-md-6 order-md-2'>
                        <CardTitle className='pb-4'>
                            <div className="logoimg d-flex flex-column justify-content-center align-items-center">
                                <img src="/img/dot.png" className='d-block'/>
                                <span>우공이산</span>
                                <img src="/img/dot2.png"/>
                            </div>
                        </CardTitle>
                        <CardSubtitle className='pb-3'><p>이제는 기획력 있는 개발자로</p></CardSubtitle>
                        <CardText className='pb-4'>
                            <p className='pb-2'>愚: 어리석을 우 公: 귀 공 移: 옮길 이 山: 뫼 산</p>
                            <p className='pb-2'>우공이 산을 옮긴다는 말로,</p>
                            <p className='pb-2'>남이 보기에 어리석은 일처럼 보여도</p>
                            <p className='pb-5'>끝까지 밀고 나가면 언젠가는 목적을 달성할 수 있다는 뜻입니다.</p>
                            <p className='pb-2'>전공, 지금까지 하던 직업과 다른 분야인 PWA훈련과정을 거쳐</p>
                            <p className='pb-2'>도전과 성장, 소통과 협력이 가능한 개발자로 성장하였습니다</p>
                        </CardText>

                    </CardBody>
                    <div className='abouttext col-md-6 order-md-1 position-relative'>
                        <CardImg  width="100%" src="/img/aboutme.jpg" alt="Card image cap"/>
                        <div className="info position-absolute mb-ver1">
                            <h1>나의소개</h1>
                            <p>1994.11.08</p>
                            <p>010.3740.2207</p>
                            <p>minjis2s2s2@gmail.com</p>
                        </div>
                        <div className="licences position-absolute mb-ver1">
                            <h1>자격증</h1>
                            <p>GTQ그래픽기술자격 1급</p>
                            <p>웹디자인 기능사</p>
                            <p>구글애널리틱스</p>
                            <p>2종 운전면허증</p>
                        </div>
                    </div>
                    <div className="link2 pc-ver1 d-flex align-items-center justify-content-center position-absolute">
                        <a href="https://www.naver.com/"><img src="/img/go-btn.svg"></img></a>
                    </div>
                </Card>
                <div className="row justify-content-evenly align-items-center pb-5">
                    <div className='abouttext col-md-5'>
                        <div className="info pc-ver1 pb-5">
                            <h1 className="pb-3">나의소개</h1>
                            <p>1994.11.08</p>
                            <p>010.3740.2207</p>
                            <p>minjis2s2s2@gmail.com</p>
                        </div>
                        <div className="licences pc-ver1">
                            <h1 className="pb-3">자격증</h1>
                            <p>GTQ그래픽기술자격 1급</p>
                            <p>웹디자인 기능사</p>
                            <p>구글애널리틱스</p>
                            <p>2종 운전면허증</p>
                        </div>
                    </div>
                    <div className='col-md-5 align-items-center'>
                        <div className='col-12 '>
                            <div className='pb-5'>
                                <Progress value="80" className="text-end">html/css
                                    <p className="text-start">80%</p>
                                </Progress>
                            </div>
                            <div className='pb-5'>
                                <Progress value="70" className="text-en">photoshop
                                    <p className="text-start">70%</p>
                                </Progress>
                            </div>
                            <div className='pb-5'>
                                <Progress value="80" className="text-en">figma
                                    <p className="text-start">80%</p>
                                </Progress>
                            </div>
                            <div className='pb-5'>
                                <Progress value="70" className="text-en">jquery
                                    <p className="text-start">70%</p>
                                </Progress>
                            </div>
                            <div className='pb-5'>
                                <Progress value="70" className="text-en">javascript
                                    <p className="text-start">70%</p>
                                </Progress>
                            </div>
                        </div>
                    </div>
                </div>
                <Accordion className='pl-mj pr-mj'>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><p className="text-center w-100">전공과 다른 프론트앤드개발을 하게 된 계기가 무엇인가요?</p></Accordion.Header>
                        <Accordion.Body>
                            <span className="text-center w-100">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.
                            </span>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header><p className="text-center w-100">만약 귀사에 입사하게 되면 앞으로의 포부는?</p></Accordion.Header>
                        <Accordion.Body>
                            <span className="text-center w-100">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.
                            </span>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>            
            </div>
        );
    }
}