import React from 'react';
import { Navbar, Nav, NavItem, Button, Glyphicon, NavDropdown, MenuItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';

import { viewsHelper } from './util/views-helper';
import { showLoginDialog, showRegisterDialog } from '../actions/static-actions';

const _navigation = ({ id, firstname, showLogin, showRegister }) => {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand >
          <a href='#'>
            <span style={{color: '#f0ad4e'}}>ow<span style={{color: '#333'}}>L</span>earn</span>
          </a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav
          className={ viewsHelper.determineClass('logged-user-menu', function() { return !!firstname; }) }>
          <NavItem onClick={ () => { showLogin() } }>Sign In</NavItem>
          <NavItem onClick={ () => { showRegister() } }>Sign Up</NavItem>
        </Nav>
        {/*TODO:Add full check for logged user*/}
        <Nav pullRight
          className={ viewsHelper.determineClass('logged-user-menu', function() { return !firstname }) }>
          <NavDropdown title={firstname} id='nav-dropdown'>

            <LinkContainer to="/users/{id}/profile"><MenuItem><Glyphicon glyph='user' /> Profile</MenuItem></LinkContainer>
            <MenuItem divider />
            <MenuItem><Glyphicon glyph='log-out' /> Sign out</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

const navContext = (state) => {
  console.log(state);
   return {
     id: state.userContext.user.id,
     firstname: state.userContext.user.firstname
   };
};

const events = (dispatch) => {
  return {
    showLogin: () => { dispatch(showLoginDialog()); },
    showRegister: () => { dispatch(showRegisterDialog()); }
  };
};

const Navigation = connect(navContext, events)(_navigation);
export default Navigation;
