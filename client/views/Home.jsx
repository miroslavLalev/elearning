import React from 'react';
import { Link } from 'react-router';
import { Image, Jumbotron, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';

import Navigation from './Navigation';
import Footer from './Footer.jsx'
import { showLoginDialog, showRegisterDialog } from '../actions/static-actions';

const _home = ({ _, showLogin, showRegister }) => {
  return (
      <div>
        <div className='img-cont'></div>
        <Jumbotron className='welcome-jumbo'>
          <Image className='welcome-owl' src='resources/owl.png' />
          <h1>Welcome to <span style={{color: '#FF7F00'}}>ow<span style={{color: '#333'}}>L</span>earn</span>!</h1>
          <p>This is the online learning resource you always needed. Feel free to start exploring the platform or sign up/sign in for immediate learning.</p>
          <div className='welcome-buttons'>
            <Button bsStyle='warning' bsSize='large' className='butt' onClick={ () => { showLogin(); } }>Sign in</Button>
            <Button bsStyle='warning' bsSize='large' className='butt' onClick={ () => { showRegister(); } }>Sign up</Button>
            <LinkContainer to="/courses">
              <Button bsStyle='warning' bsSize='large' className='butt'>Explore</Button>
            </LinkContainer>
          </div>
        </Jumbotron>
      </div>
  );
};

const homeContext = (state) => {
  return {};
};

const events = (dispatch) => {
  return {
    showLogin: () => { dispatch(showLoginDialog()); },
    showRegister: () => { dispatch(showRegisterDialog()); }
  };
};

const Home = connect(homeContext, events)(_home);
export default Home;
