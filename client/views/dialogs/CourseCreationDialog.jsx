import React from 'react';
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';

import  CourseCreationForm from '../forms/CourseCreationForm';
import { hideCourseCreationDialog } from '../../actions/static-actions';
import { createCourse } from '../../actions/courses-actions'

let c = {
  name: '',
  description: ''
}

const _courseCreationDialog = ({ visible, closeCourseCreation, createCourse }) => {
  return(
  <Modal show={visible} onHide={ () => { closeCourseCreation() } }>
    <Modal.Header closeButton>
      <Modal.Title>Create course</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <CourseCreationForm
        saveCourseName = { n => { c.name = n } }
        saveCourseDescription = { d => {c.description = d} }
      />
    </Modal.Body>
    <Modal.Footer>
      <Button onClick = { () => { createCourse(c); } }>Create</Button>
      <Button onClick = { () => { closeCourseCreation(); } }>Close</Button>
    </Modal.Footer>
  </Modal>
);
};

const dialogContext = (state) => {
  return {
    visible: state.courseCreationContext.toggleCourseCreation
  };

}

const events = (dispatch) => {
  return {
    closeCourseCreation: () => { dispatch(hideCourseCreationDialog()); },
    createCourse: (data) => { dispatch(createCourse(data)); }
  };
};

const CourseCreationDialog = connect(dialogContext, events)(_courseCreationDialog);
export default CourseCreationDialog;
