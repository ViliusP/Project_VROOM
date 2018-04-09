import React from 'react';
import { FormattedMessage } from 'react-intl';


import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import messages from './messages';
import NavBrand from './NavBrand';
import NavBurger from './NavBurger';
import Logo from './Car-icon.png';
import NavBarLeft from './NavBarLeft';
import NavBarRight from './NavBarRight';
import NavDropdown from './NavDropdown';
import NavMenu from './NavMenu';
import NavDivider from './NavDivider';
import {NavItem, NavItemDropDown} from './NavItem';
import Container from '../Container';
function Header() { 
  let menuID = 'menu';
   {
    return (
      <NavBar>
        <Container>
        <NavBrand>
          <HeaderLink to="/">
              <img src = {Logo} alt={"Logo"}/>
            </HeaderLink>
            <NavBurger>
              <span></span>
              <span></span>
              <span></span>
            </NavBurger>
        </NavBrand>

        <NavMenu>
          <NavBarLeft>
          <HeaderLink to="/">
            <FormattedMessage {...messages.home} />
          </HeaderLink>
          <HeaderLink to="/trips/search">
            <FormattedMessage {...messages.manage} />
          </HeaderLink>
          </NavBarLeft>

          <NavBarRight>

            <NavItemDropDown>
              <NavItem>
                Profile
              </NavItem>
              <NavDropdown> 
                <NavItem>
                  Hello
                </NavItem>
                <NavItem>
                  asd
                </NavItem>
                <NavDivider/>
                <NavItem>
                  Logout
                </NavItem>
              </NavDropdown>
            </NavItemDropDown>
          </NavBarRight>
        </NavMenu>

      </Container>
      </NavBar>
    );
  }
}

export default Header;
