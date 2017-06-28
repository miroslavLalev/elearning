import React from 'react';
import {
  Col,
  Row,
  MenuItem,
  Button,
  ListGroup,
  ListGroupItem,
  Media

} from 'react-bootstrap';
import { connect } from 'react-redux'
import Navigation from './Navigation';

const _course = ({ course }) => {
  return (

    <div>
      <Navigation/>
      <Row>
        <Col sm={3} smOffset={1} className='course-image'></Col>
        <Col sm={8} className='course-info'>
          <h2>{course.name}</h2>
          <p>{course.description}</p>
          <h2>What will you learn</h2>
          <ListGroup>
          {
            course.topics.map( (topic, index) =>
              <ListGroupItem key={index} bsStyle='warning'>{topic}</ListGroupItem>
            )
          }
        </ListGroup>
        <Row>
          <Col smOffset={10}>
          <Button bsStyle='warning' bsSize='large'>Subscribe</Button>
          </Col>
        </Row>
        </Col>
      </Row>
      <Row>
        <Col sm={3} smOffset={1} className='col-requirements'>
          <h2>Requirements</h2>
          <ul>
          {
            course.requirements.map( (requirement, index) =>
              <li key={index}>{requirement}</li>
          )
          }
        </ul>
        </Col>
        <Col sm={6} smOffset={1} className='col-videos'>
          <Row>
            <Media>
              <Media.Left>
                <img width={64} height={64} src="../public/resources/171x180.png"/>
              </Media.Left>
              <Media.Body>
                <Media.Heading>Video Heading</Media.Heading>
                <p>About video</p>
              </Media.Body>
            </Media>
          </Row>
          <Row>
            <Media>
              <Media.Left>
                <img width={64} height={64} src="../public/resources/171x180.png"/>
              </Media.Left>
              <Media.Body>
                <Media.Heading>Video Heading</Media.Heading>
                <p>About video</p>
              </Media.Body>
            </Media>
          </Row>
        </Col>
      </Row>

    </div>
  );
};

const courseContext = (state) => {
  return {
    course: state.courseContext.selectedCourse
  };
};

const events = (dispatch) => {
  return {};
};

const Course = connect(courseContext, events)(_course);
export default Course;
