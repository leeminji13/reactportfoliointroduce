import React, { Component } from 'react'


export default class Footer1 extends Component {
  render() {
    return (
      <footer id="ft" className='border-t'>
        <div className="d-flex justify-content-center align-items-center">
          <div className="menu d-block">
            <ul className="d-flex">
              <li><a href="/portfolio/">포트폴리오</a></li>
              <li><a href="/aboutme/">나의소개</a></li>
              <li><a href="/contact/">면접제안</a></li>
              <li><a href="preinterview">사전면접</a></li>
            </ul>
            <div className="icon container d-flex justify-content-center align-items-center">
              <a href=""><img className="call" src='/img/ftcall.svg'/></a>
              <a href=""><img src='/img/fttalk.svg'/></a>
              <a href=""><img src='/img/ftbigsns.svg'/></a>
            </div>
          </div>
        </div>
        <div className="copy text-center">
          <p>Copyright © PWA | 이민지의 포토폴리오</p>
          <p>All rights reserved</p>
        </div>
        
      </footer>
    
    )
  }
}
