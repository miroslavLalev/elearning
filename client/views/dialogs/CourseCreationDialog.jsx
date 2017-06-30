import React from 'react';
import { connect } from 'react-redux';
import { Modal } from 'react-bootstrap';

import  CourseCreationForm from '../forms/CourseCreationForm';
import { hideCourseCreationDialog } from '../../actions/static-actions';

const _courseCreationDialog = ({ visible,  courseData, closeCourseCreation}) => {
  return(
  <Modal show={visible} onHide={ () => { closeCourseCreation() } }>
    <Modal.Header closeButton>
      <Modal.Title>Create course</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <CourseCreationForm

      />
    </Modal.Body>
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

  }
}

const CourseCreationDialog = connect(dialogContext, events)(_courseCreationDialog);
export default CourseCreationDialog;
