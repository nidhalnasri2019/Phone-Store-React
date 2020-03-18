import React, { Component } from 'react';

import {Link} from 'react-router-dom';
import logo from '../logo.png';
import styled from 'styled-components';
import {ButtonContainer} from './Button';
class Navbar extends Component {
    render() {
        return (
            <div>
                <NavWrapper className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
                  {/** https://cdn3.iconfinder.com/data/icons/web-line-circle/614/270_-_Call-128.png */}
                  <Link to= '/' >
                      <img src={logo} alt="store"   width="70"  height="70" className="navbar-brand"/>
                  </Link>
                  <ul className="navbar-nav align-items-center">
                      <li className="nav-item ml-5">
                          <Link to="/" className="nav-link">
                              products
                          </Link>
                      </li>
                 </ul>
                 <Link to="/cart" className='ml-auto'>
                     <ButtonContainer>
                         <span className="mr-2">
                         <i className="fa fa-cart-plus" />
                         </span>
                    
                         my carts
                     </ButtonContainer>
                 </Link>
                </NavWrapper>
            </div>
        );
    }
}
const NavWrapper= styled.nav`
background: var(--mainBlue)!important;
.nav-link{
    color : var(--mainWhite)!important;
    font-size:1.3rem;
    text-transform:capitalize;
    
}
`;
export default Navbar;