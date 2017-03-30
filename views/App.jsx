import React from 'react';
import { Route, HashRouter } from 'react-router-dom';

import SimpleButton from './SimpleButton';
import Home from './Home';
import Pesho from './Pesho';

export default class App extends React.Component {
  render() {
    return (
      <HashRouter>
          <Route path='/' component={Home} />
          <Route path='/pesho' component={Pesho} />
      </HashRouter>
    );
  }
};
