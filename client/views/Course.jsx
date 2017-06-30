import React from 'react';
import { Col, Row, MenuItem, Button, ListGroup, ListGroupItem, Media, Image } from 'react-bootstrap';
import { connect } from 'react-redux';

import LectureDialog from './dialogs/LectureDialog';
import Navigation from './Navigation';
import { showLectureDialog } from '../actions/static-actions';
import { getCourse } from '../actions/courses-actions';

class _course extends React.Component {
  componentWillMount() {
    this.props.getCourse(this.props.match.params.id);
  };

  render() {
    const course = this.props.course;
    const showLecture = this.props.showLecture;
    return (
      <div>
        <LectureDialog />
        <Navigation/>
        <Row>
          <Col sm={3} smOffset={1}>
            <Image src='resources/course-image.png'></Image>
          </Col>
          <Col sm={7} className='course-info'>
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
          <Col sm={3} smOffset={1} >
            <h2>Requirements</h2>
            <ul>
              { course.requirements.map( (requirement, index) =>
                  <li key={index}>{requirement}</li>
              ) }
            </ul>
          </Col>
          <Col sm={8}>
            { course.lectures.map( (lecture) =>
                <Row key={lecture.id} >
                  <Col sm={1}>
                    <Image className='course-video-position' width={64} height={64} src='resources/171x180.png' rounded/>
                  </Col>
                  <Col sm={7} smOffset={1}>
                    <h2>{lecture.name}</h2>
                    <p>{lecture.about}</p>
                  </Col>
                  <Button  bsStyle='warning' className='course-button-position'  onClick={ () => { showLecture() } }>
                    Learn more
                  </Button>
                </Row>
              ) }
          </Col>
        </Row>
      </div>
    );
  };
};

const courseContext = (state) => {
  return {
    course: state.courseContext.course
  };
};

const events = (dispatch) => {
  return {
    showLecture: () => { dispatch(showLectureDialog()) },
    getCourse: (id) => { dispatch(getCourse(id)) }
  };
};

const Course = connect(courseContext, events)(_course);
export default Course;
