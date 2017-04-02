import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from './Home';
import Test from './Test';

const router = (
  <Router>
    <div>
      <Route exact path='/' component={Home} />
      <Route exact path='/pesho' component={Test} />
    </div>
  </Router>
);

// Initial rendering
ReactDOM.render(router, document.getElementById('app'));
