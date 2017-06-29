import React from 'react';
import { Col, Row } from 'react-bootstrap';

export default class Lecture extends React.Component {
  render(){
    return(
      <div>{this.props.lecture.text}</div>
    )
  }
}
