import React from 'react';
import { Table, Checkbox, Image, Col, Nav, NavItem, NavDropdown, MenuItem, Button, Navbar } from 'react-bootstrap';
import Navigation from './Navigation';
import { LinkContainer } from 'react-router-bootstrap';
import { connect } from 'react-redux';

import { showCourseCreationDialog } from '../actions/static-actions';
import { getCourses } from '../actions/courses-actions';
import CourseCreationDialog from './dialogs/CourseCreationDialog';

class _courses extends React.Component {
  componentWillMount() {
    this.props.getCourses();
  };

  render() {
    const courses = this.props.courses;
    const showCourseCreation = this.props.showCourseCreation;
    return (
      <div>
        <Navigation/>
        <CourseCreationDialog/>
        <Col sm={2}>
          <Navbar fluid className='filter-sidebar'>
          <Navbar.Collapse>
            <Nav bsStyle="pills" stacked>
              <NavDropdown title='Topic' className='criteria' id='topic'>
                <MenuItem eventKey='1'>Data Science</MenuItem>
                <MenuItem eventKey='2'>Probability</MenuItem>
                <MenuItem eventKey='3'>Languages</MenuItem>
              </NavDropdown>
              <NavDropdown title='Popularity' className='criteria' id='popularity'>
                <MenuItem eventKey='1'>Increasing</MenuItem>
                <MenuItem eventKey='2'>Decreasing</MenuItem>
              </NavDropdown>
              <NavDropdown title='Date' className='criteria' id='date'>
                <MenuItem eventKey='1'>Newest</MenuItem>
                <MenuItem eventKey='2'>Oldest</MenuItem>
              </NavDropdown>
            </Nav>
            </Navbar.Collapse>
            </Navbar>
        </Col>

        {courses.map(function(course) {
          return (
            <Col sm = {10} className='course' key={course.id}>
              <Col sm = {3} className='image-placeholder'></Col>
              <Col sm = {8} className='course-description'>
                <h3 className='course-name'>{course.name}</h3>
                <p>{course.description}</p>
                 <LinkContainer to={'/courses/' + course.id}>
                   <Button bsStyle='warning' className='butt'>Learn more</Button>
                 </LinkContainer>
                   <Button bsStyle='warning' className='butt'>Subscribe</Button>
              </Col>
            </Col>
          )
        })}
        <Col smOffset={10}>
          <Button bsStyle='warning' className='courses-create-butt' onClick={ () => { showCourseCreation() } }>Create course</Button>
        </Col>
      </div>
    );
  };
};

const coursesContext = (state) => {
  return {
    courses: state.coursesContext.courses
  };
};

const events = (dispatch) => {
  return {
    showCourseCreation: () => { dispatch(showCourseCreationDialog()); },
    getCourses: () => { dispatch(getCourses()); }
  };
};

const Courses = connect(coursesContext, events)(_courses);
export default Courses;
