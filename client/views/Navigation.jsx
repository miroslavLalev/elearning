import React from 'react';
import { Navbar, Nav, NavItem, Button, Image } from 'react-bootstrap';
import { connect } from 'react-redux';

import { showLoginDialog, showRegisterDialog } from '../actions/static-actions';

const _navigation = ({ _, showLogin, showRegister }) => {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand><span style={{color: '#FF7F00'}}>ow<span style={{color: '#333'}}>L</span>earn</span></Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav >
          <NavItem onClick={ () => { showLogin() } }>Sign In</NavItem>
          <NavItem onClick={ () => { showRegister() } }>Sign Up</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

const navContext = (state) => {
  return {};
};

const events = (dispatch) => {
  return {
    showLogin: () => { dispatch(showLoginDialog()); },
    showRegister: () => { dispatch(showRegisterDialog()); }
  };
};

const Navigation = connect(navContext, events)(_navigation);
export default Navigation;
