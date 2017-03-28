import React from 'react';

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
    return <button onClick={ (e) => this.buttonClicked(e) }>Click</button>;
  }
}
