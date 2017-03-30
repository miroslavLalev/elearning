import React from 'react';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Link to='/pesho'>Pesho</Link>
      </div>
    );
  }
};
