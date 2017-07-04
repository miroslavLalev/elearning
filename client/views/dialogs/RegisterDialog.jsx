import React from 'react';
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';

import { hideRegisterDialog } from '../../actions/static-actions';
import { register } from '../../actions/user-actions';
import RegisterForm from '../forms/RegisterForm';


let c = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  repeated: '',
  role: 'STUDENT'
}

const _registerDialog = ({ visible, closeRegister, register }) => {
  return (
    <Modal show={visible} onHide={ () => { closeRegister() } }>
      <Modal.Header closeButton>
        <Modal.Title>Sign up</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <RegisterForm
          saveFirstName= { n => { c.firstname = n } }
          saveLastName = { l => { c.lastname = l } }
          saveEmail = { e => { c.email = e } }
          savePassword = { p => { c.password = p } }
          saveRepeatedPassword = { r => { c.repeated = r } }
          saveUserRole = { t => { c.role = t } }
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={ () => { register(c); } }>Register</Button>
        <Button onClick={ () => { closeRegister(); } }>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

const dialogContext = (state) => {
  return {visible: state.localContext.toggleRegister };
};

const events = (dispatch) => {
  return {
    closeRegister: () => { dispatch(hideRegisterDialog()); },
    register: (data) => { console.log(data); dispatch(register(data)); }
  };
};

const RegisterDialog = connect(dialogContext, events)(_registerDialog);
export default RegisterDialog;
