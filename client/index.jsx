import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import createHashHistory from 'history/createHashHistory';
import { Provider } from 'react-redux';

import ProxiesRegistry from './proxies/ProxiesRegistry';
new ProxiesRegistry().registerProxies();

import Home from './views/Home';
import Courses from './views/Courses';
import Course from './views/Course';
import Profile from './views/Profile';
import LoginDialog from './views/dialogs/LoginDialog';
import RegisterDialog from './views/dialogs/RegisterDialog';

import { store } from './store';

const history = createHashHistory();
window.h = history;

const provider = (
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/courses' component={Courses} />
          <Route path='/courses/:id' component={Course} />
          <Route path='/users/:id/profile' component={Profile} />
        </Switch>
        <LoginDialog />
        <RegisterDialog />
      </div>
    </Router>
  </Provider>
);

// Initial rendering
ReactDOM.render(provider, document.getElementById('app'));
