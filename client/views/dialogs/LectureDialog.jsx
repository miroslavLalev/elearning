import React from 'react';
import { connect } from 'react-redux';
import { Modal } from 'react-bootstrap';

import Lecture from '../Lecture';
import { hideLectureDialog } from '../../actions/static-actions';

const _lectureDialog = ({ visible, lecture, closeLecture }) => {
    return(
      <Modal show={visible} onHide={ () => { closeLecture() } }>
        <Modal.Header closeButton>{lecture.name}</Modal.Header>
        <Modal.Body>
          <Lecture
            lecture={lecture}
          />
        </Modal.Body>
      </Modal>
    );
};

const dialogContext = (state) => {
  return {
    visible: state.lectureContext.toggleLecture,
    lecture: state.lectureContext.lecture
  };
};

const events = (dispatch) => {
  return {
    closeLecture: () => { dispatch(hideLectureDialog()); }
  };
};

const LectureDialog = connect(dialogContext, events)(_lectureDialog);
export default LectureDialog;
