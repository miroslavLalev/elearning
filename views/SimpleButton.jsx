import React from 'react';
import { Link } from 'react-router-dom';

export default class SimpleButton extends React.Component {

  constructor() {
    super();
    this.counter = 0;
  }

  buttonClicked() {
    console.log(this.counter);
    ++this.counter;
  }

  render() {
    return (
        <button>
          <Link to={this.props.to} onClick={ e => { this.buttonClicked() } }>{this.props.text}</Link>
        </button>
    );
  }
}
