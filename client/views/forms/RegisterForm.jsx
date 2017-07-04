import React from 'react';
import { Form, FormGroup, FormControl, Col, ControlLabel , Label } from 'react-bootstrap';
import { STUDENT, TEACHER } from '../../entities/user-type';

export default class RegisterForm extends React.Component {
  render () {
    return (
      <Form horizontal>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={4}>Email</Col>
          <Col sm={6}>
            <FormControl
              type="email"
              placeholder="Enter Your Email"
              onChange={ (e) => { this.handleEmailChange(e.target.value) }} />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={4}>Name</Col>
          <Col sm={6}>
            <FormControl
              type="text"
              placeholder="Enter Your Name"
              onChange={ (e) => { this.handleFirstNameChange(e.target.value) }} />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={4}>Last Name</Col>
          <Col sm={6}>
            <FormControl
              type="text"
              placeholder="Enter Your Last Name"
              onChange={ (e) => { this.handleLastNameChange(e.target.value) }} />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={4}>Password</Col>
          <Col sm={6}>
            <FormControl
              type="password"
              placeholder="Enter Password"
              onChange={ (e) => { this.handlePasswordChange(e.target.value) }} />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={4}>Repeat password</Col>
          <Col sm={6}>
            <FormControl
              type="password"
              placeholder="Repeat Password"
              onChange={ (e) => { this.handleRepeatedPasswordChange(e.target.value) }} />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={4}>I'm a:</Col>
          <Col sm={6}>
          </Col>
          <Col sm={6}>
            <FormControl
              componentClass='select'
              placeholder='student'
              onChange={ (e) => { this.handleUserRoleChange(e.target.value) }} >
                <option value='STUDENT'>Student</option>
                <option value='TEACHER'>Teacher</option>
            </FormControl>
          </Col>
        </FormGroup>
      </Form>
    )
  }

  handleFirstNameChange(firstname) {
    this.props.saveFirstName(firstname);
  }

  handleLastNameChange(lastname) {
    this.props.saveLastName(lastname);
  }

  handleEmailChange(email) {
    this.props.saveEmail(email);
  }

  handlePasswordChange(password) {
    this.props.savePassword(password);
  }

  handleRepeatedPasswordChange(password) {
    this.props.saveRepeatedPassword(password);
  }

  handleUserRoleChange(role) {
    this.props.saveUserRole(role);
  }
}
