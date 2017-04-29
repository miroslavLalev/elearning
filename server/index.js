// Load environment
import _ from './env';

import { coursesClient } from './db/db-client-registry';

// Rest API
import express from 'express';
import SessionManager from './session/session-manager';
import { authenticator } from './security/authentication-client';

const server = express();
new SessionManager().attachSessionHandler(server);

server.get('/courses', (req, res) => {
  if (!authenticator.isRequestPermitted(req)) {
    res.status(401);
    res.send('You are not allowed to view this page');
    return;
  }

  coursesClient.getCourses().then(function(courses) {
    res.json(courses);
  }).catch(function(err) {
    console.log(err);
    res.json(err);
  });
});

var port = 9072;
server.listen(port, () => {
  console.log('Server listening on port ' + port);
});
