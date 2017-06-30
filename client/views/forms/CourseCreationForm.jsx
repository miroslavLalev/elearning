import React from 'react';
import { Form, FormControl, FormGroup, Col, ControlLabel } from 'react-bootstrap';

export default class CourseCreationForm extends React.Component{
  render(){
    return(
      <Form horizontal className='course-creation'>
        <FormGroup controlId='nameOfCourse'>
          <Col componentClass={ControlLabel} sm={4}>Course name</Col>
          <Col sm={6}>
            <FormControl type='text' placeholder='Enter name of course'>

            </FormControl>
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={4}>Course description</Col>
          <Col sm={6}>
            <FormControl componentClass='textarea' placeholder='Enter description'>

            </FormControl>
          </Col>
        </FormGroup>
      </Form>
    )
  }
}
