// Import Swiper React components
import React, { Component } from 'react'
import '../App.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay,Pagination } from "swiper";



export default function Mainpf(){
  return (
      <div id="mainport" className='pl-mj pr-mj np'>
        <div className="position-relative">
        <div class="line-box pc-ver1">
          <span class="border-l"></span>
          <span class="border-r"></span>
        </div>
          <Swiper
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          // autoplay={{
          //   delay: 4000,
          //   disableOnInteraction: false,
          // }}
          loop={true}
          modules={[Autoplay,Pagination]}
          className="mySwiper"
            >
               
                <SwiperSlide className="position-relative port1">
                    <img className="pc-ver1" src='/img/ann1780.jpg'/>
                    <img className="mb-ver1" src='/img/ann767.jpg'/>

                    <div  className="maintext position-absolute">
                        <p className="blackline pb-5">
                            <span className="num blackline">01</span>
                            Leeminji : portfolio
                        </p>
                        <p className="pb-5"><span>부트스트랩5</span>로 구현한<span>'앤베리'</span></p>
                        <p className="c-black pb-2">부트스트랩 5버전을 이용하여 그리드시스템을 이용한 빠른제작이 특징</p>
                        <p className="c-black pb-5">잼,청과는 다른 콩포트라는 프랑스식 레시피로 만든 제품을 소개하는 페이지 입니다.</p>
                        <p className="c-black pb-5"> #딸기 #딸기청no #딸기콩포트 #프랑스식디저트</p>
                        <p className="c-black pb-5">벤치마킹 정보 : </p>
                    </div>
                    
                </SwiperSlide>
                <SwiperSlide className="position-relative port2">
                      <img className="pc-ver1" src='/img/bowbanner1780.jpg'/>
                      <img className="mb-ver1" src='/img/bow767.jpg'/>

                      <div  className="maintext position-absolute">
                          <p className="blackline pb-5">
                              <span className="num blackline">01</span>
                              Leeminji : portfolio
                          </p>
                          <p className="pb-5"><span>부트스트랩5</span>로 구현한<span>'앤베리'</span></p>
                          <p className="c-black pb-2">부트스트랩 5버전을 이용하여 그리드시스템을 이용한 빠른제작이 특징</p>
                          <p className="c-black pb-5">잼,청과는 다른 콩포트라는 프랑스식 레시피로 만든 제품을 소개하는 페이지 입니다.</p>
                          <p className="c-black pb-5"> #딸기 #딸기청no #딸기콩포트 #프랑스식디저트</p>
                          <p className="c-black pb-5">벤치마킹 정보 : </p>
                      </div>
                </SwiperSlide>
                
                <SwiperSlide className="position-relative port3">
                      <img className="pc-ver1" src='/img/bas1780.jpg'/>
                      <img className="mb-ver1" src='/img/bas767.jpg'/>

                      <div  className="maintext position-absolute">
                          <p className="blackline pb-5">
                              <span className="num blackline">01</span>
                              Leeminji : portfolio
                          </p>
                          <p className="pb-5"><span>부트스트랩5</span>로 구현한<span>'앤베리'</span></p>
                          <p className="c-black pb-2">부트스트랩 5버전을 이용하여 그리드시스템을 이용한 빠른제작이 특징</p>
                          <p className="c-black pb-5">잼,청과는 다른 콩포트라는 프랑스식 레시피로 만든 제품을 소개하는 페이지 입니다.</p>
                          <p className="c-black pb-5"> #딸기 #딸기청no #딸기콩포트 #프랑스식디저트</p>
                          <p className="c-black pb-5">벤치마킹 정보 : </p>
                      </div>
                </SwiperSlide>
          </Swiper>
          <div className="link pc-ver1 d-flex align-items-center justify-content-center">
            <a href="https://dlalswl9413.cafe24.com/boot5ann/"><img src="/img/go-btn.svg"></img></a>
          </div>
          <div className="report pc-ver1 d-flex align-items-center justify-content-center">
            <a href="https://dlalswl9413.cafe24.com/boot5ann/">제작보고서</a>
          </div>
          
        </div>

          
          {/* <div className="infoimg position-relative">
            <img className="ogimg position-absolute top-100" src='/img/ann_ogimg2.jpg'/>
            <img src='/img/'/>
            <img src='/img/'/>
          </div> */}
          
         
          
      </div>
    
  );
};

