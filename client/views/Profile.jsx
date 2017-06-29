import React from 'react';
import { connect } from 'react-redux';
import { Image, Col, FieldGroup, Input, Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

import Navigation from './Navigation';
import { showLoginDialog, showRegisterDialog } from '../actions/static-actions';

const _profile = ({ email, firstName, lastName, password, showLogin, showRegister }) => {
    return (
            <div>
              <Navigation/>
              <h1 className='edit-profile-heading'>My Profile</h1>
              <div className='profile-info'>
                <Image src='../../public/resources/171x180.png' circle />
                <br></br>
                <br></br>
                <Form horizontal>
                  <FormGroup>
                  <Col componentClass={ControlLabel} sm={4} >First Name</Col>
                  <Col sm={4}>
                    <FormControl
                      type="text"
                      placeholder={firstName} />
                  </Col>
                  </FormGroup>
                  <FormGroup>
                  <Col componentClass={ControlLabel} sm={4}>Last Name</Col>
                  <Col sm={4}>
                    <FormControl
                      type="text"
                      placeholder={lastName} />
                  </Col>
                  </FormGroup>
                  <FormGroup>
                  <Col componentClass={ControlLabel} sm={4}>Email</Col>
                  <Col sm={4}>
                    <FormControl
                      type="email"
                      placeholder={email} />
                  </Col>
                  </FormGroup>
                  <FormGroup>
                  <Col componentClass={ControlLabel} sm={4}>Old password</Col>
                  <Col sm={4}>
                    <FormControl
                      type="password" />
                  </Col>
                  </FormGroup>
                  <FormGroup>
                  <Col componentClass={ControlLabel} sm={4}>New password</Col>
                  <Col sm={4}>
                    <FormControl
                      type="password" />
                  </Col>
                  </FormGroup>
                  <FormGroup>
                  <Col componentClass={ControlLabel} sm={4}>Repeat new password</Col>
                  <Col sm={4}>
                    <FormControl
                      type="password" />
                  </Col>
                  </FormGroup>
                </Form>
                <Button bsStyle='warning'>Update profile</Button>
              </div>
            </div>
        );
};

const profileContext = (state) => {
  return {
    email: state.userContext.selectedUser.email,
    firstName: state.userContext.selectedUser.firstName,
    lastName: state.userContext.selectedUser.lastName,
    password: state.userContext.selectedUser.password };
};

const events = (dispatch) => {
  return {
    showLogin: () => { dispatch(showLoginDialog()); },
    showRegister: () => { dispatch(showRegisterDialog()); }
  };
};

const Profile = connect(profileContext, events)(_profile);
export default Profile;
