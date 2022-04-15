import React, { Component } from 'react'
import '../App.css';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

export default class Portfolio extends Component {
  render() {
    return (
        <div id="cardport" className='pl-mj pr-mj pb-mj np'>
            <div>
                <p className="blackline2 pb-5">
                    <span className="num2 blackline">01</span>
                    Leeminji : portfolio
                </p>
            </div>
            <Card className='row align-items-center flex-row'>
                <div className='col-md-6'>
                    <CardImg  width="100%" src="/img/colbow.jpg" alt="Card image cap"/>
                </div>
                <CardBody className='text-center col-md-6'>
                    <CardTitle className='pb-4'>
                        <div className="logoimg d-flex justify-content-center align-items-center">
                            <img src="/logo/gnu.svg"></img>
                            <img src="/logo/gnusir.svg"></img>
                            <p className="">바우라움</p>
                        </div>
                    </CardTitle>
                    <CardSubtitle className='pb-3'>단독작업/제작기간 : </CardSubtitle>
                    <CardText className='pb-4'>
                        <p className='pb-2'>-그누보드 수동설치에서 PhpMyAdmin 세팅까지</p>
                        <p className='pb-2'>-테마설정 및 메뉴설정</p>
                        <p className='pb-3'>-컨텐츠 85%이상 게시판과 내용관리로 관리</p>
                        <span className='pb-2'>#강아지 #반려견 #반려견유치원 #반려견호텔</span>
                    </CardText>
                    <div className='webbtn'>
                        <a href="#none" className="btn position-relative ">웹사이트
                            <button className="blackbtn position-absolute">
                                <a href="#none" className="d-flex align-items-center justify-content-center"><img src="/img/more-btn.png"></img></a>
                            </button>
                        </a>
                    </div>
                </CardBody>
            </Card>

            <Card className='row align-items-center flex-row'>
                <div className="col-md-6 order-md-2">
                    <CardImg top width="100%" src="/img/colbas.jpg" alt="Card image cap" />
                </div>
                <CardBody className='text-center col-md-6 order-md-1'>
                    <CardTitle className='pb-4'>
                        <div className="logoimg d-flex justify-content-center align-items-center">
                            <img src="/logo/cafe24.svg"></img>
                            <p>바스켓</p>
                        </div>
                    </CardTitle>
                    <CardSubtitle className='pb-3'>단독작업/제작기간 : </CardSubtitle>
                    <CardText className='pb-4'>
                        <p className='pb-2'>-기획에 맞는 배너와 프로모션 페이지를 디자인</p>
                        <p className='pb-2'>-기획 페이지 특징상 빠른 업데이트를 위하여 하드코딩 지양</p>
                        <p className='pb-3'>-컨텐츠 85%이상 관리자페이지로 관리</p>
                        <span className='pb-2'>#커피 #홈카페 #원두 #캡슐커피 #로스팅</span>
                    </CardText>
                    <div className='webbtn'>
                        <a href="#none" className="btn position-relative">웹사이트
                            <button className="blackbtn position-absolute">
                                <a href="#none" className="d-flex align-items-center justify-content-center"><img src="/img/more-btn.png"></img></a>
                            </button>
                        </a>
                    </div>
                </CardBody>
            </Card>

            <Card className='row align-items-center flex-row'>
                <div className="col-md-6">
                    <CardImg top width="100%" src="/img/colmy.jpg" alt="Card image cap" />
                </div>
                <CardBody className='text-center col-md-6'>
                    <CardTitle className='pb-4'>
                        <div className="logoimg d-flex justify-content-center align-items-center">
                            <img src="/logo/react.svg"></img>
                            <p>자기소개 페이지</p>
                        </div>
                    </CardTitle>
                    <CardSubtitle className='pb-3'>단독작업/제작기간 : </CardSubtitle>
                    <CardText className='pb-4'>
                        <p className='pb-2'>-axios모듈로 노드와 비동기 통신</p>
                        <p className='pb-2'>-부트스트랩 그리드시스템을 이용하여 빠르고 유연한 반응형으로 제작</p>
                        <span className='pb-2'>#강아지 #반려견 #반려견유치원 #반려견호텔</span>
                    </CardText>
                    <div className='webbtn'>
                        <a href="https://www.gowoonsesang.com/" className="btn position-relative">제작보고서
                            <button className="blackbtn position-absolute">
                                <a href="https://www.daum.net" className="d-flex align-items-center justify-content-center"><img src="/img/more-btn.png"></img></a>
                            </button>
                        </a>
                    </div>
                </CardBody>
            </Card>
        </div>
        );
    }
}