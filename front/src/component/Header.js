import React, { Component } from 'react'
import styled, {keyframes} from 'styled-components';

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

  render() {
    return (

      <div id="hd" className='border-b'>
        <div class="line-box pc-ver1">
          <span class="border-l"></span>
          <span class="border-r"></span>
        </div>
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
