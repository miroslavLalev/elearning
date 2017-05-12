import React from 'react';
import { Navbar, Nav, NavItem, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import LoginDialog from './dialogs/LoginDialog';
import { showLoginDialog } from '../actions/static-actions';

const _navigation = ({ _, showLogin }) => {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>owLearn</Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem onClick={ () => { showLogin() } }>Log In</NavItem>
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
    showLogin: () => { dispatch(showLoginDialog()); }
  };
};

const Navigation = connect(navContext, events)(_navigation);
export default Navigation;
