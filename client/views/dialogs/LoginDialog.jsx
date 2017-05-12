import React from 'react';
import { connect } from 'react-redux';
import { Modal, Button, FormControl, FormGroup, ControlLabel } from 'react-bootstrap';

import { hideLoginDialog } from '../../actions/static-actions';
import { login } from '../../actions/user-actions';
import LoginForm from '../forms/LoginForm';

let c = {
  username: '',
  password: ''
}

const _loginDialog = ({ visible, closeLogin, login }) => {
  return (
    <Modal show={visible} onHide={ () => { closeLogin() } }>
      <Modal.Header closeButton>
        <Modal.Title>Log In</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <LoginForm
          saveUsername={ u => { c.username = u } }
          savePassword={ p => { c.password = p } }
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={ () => { login(c); /* TODO: clean up 'c' */ } }>Log In</Button>
        <Button onClick={ () => { closeLogin(); } }>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

const dialogContext = (state) => {
  return { visible: state.localContext.toggleLogin };
};

const events = (dispatch) => {
  return {
    closeLogin: () => { dispatch(hideLoginDialog()); },
    login: (credentials) => { dispatch(login(credentials)); }
  };
};

const LoginDialog = connect(dialogContext, events)(_loginDialog);
export default LoginDialog;
