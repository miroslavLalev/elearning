import React from 'react';
import { Form, FormControl, FormGroup, Col, ControlLabel } from 'react-bootstrap';

export default class LoginForm extends React.Component {
  render() {
    return (
      <Form horizontal>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={4}>Email</Col>
          <Col sm={6}>
            <FormControl
              type="text"
              placeholder="Enter Email"
              onChange={ (e) => { this.handleEmailChange(e.target.value) }} />
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
      </Form>
    )
  }

  handleEmailChange(email) {
    this.props.saveEmail(email);
  }

  handlePasswordChange(password) {
    this.props.savePassword(password);
  }
}
