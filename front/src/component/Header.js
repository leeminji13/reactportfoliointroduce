import React, { Component } from 'react'
import styled, {keyframes} from 'styled-components';
import jQuery from 'jquery';
import $ from 'jquery';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
 } from 'reactstrap';

export default class Header1 extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

      componentDidMount(){
        $(document).ready( function(){

          var didScroll; 
          var lastScrollTop = 0; 
          var delta = 5; 
          var navbarHeight = $('#hd').outerHeight(); 
    
          $(window).scroll(function(event){ 
                  didScroll = true; 
          }); 
          setInterval(function() { 
              if (didScroll) { 
                  hasScrolled(); 
                  didScroll = false; 
              } }, 250); 
    
          function hasScrolled() { 
              var st = $(window).scrollTop(); 
                  if(Math.abs(lastScrollTop - st) <= delta) return; 
              
                  if (st > lastScrollTop && st > navbarHeight){ 
                      // Scroll Down 
                      $('#hd').addClass('up'); 
                  } 
                  else {  
                      // Scroll Up  
                      $('#hd').removeClass('up');
                  } 
              lastScrollTop = st; 
              }            
      })
      }

  render() {
    
    return (
      

      <div id="hd" className='border-b position-fixed'>
         <Navbar light expand="md" className="pl-mj pr-mj">
             <h1>
                <NavbarBrand className="logo" href="#none">
                  <img className="smallicon" src='/logo/logo_smallicon.svg'/>
                  {/* <img src={process.env.PUBLIC_URL + '/logo/logo_line.svg'} /> */}
                </NavbarBrand>
             </h1>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar className="menu">
            <Nav className="ml-auto" navbar>
            <NavItem>
                <NavLink href="/portfolio/">포트폴리오</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/aboutme/">나의소개</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contact/">면접제안</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}
