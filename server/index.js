// Load environment
import _ from './env';

import { coursesClient } from './db/db-client-registry';

// Rest API
import express from 'express';
const server = express();

server.get('/courses', (req, res) => {
  coursesClient.getCourses().then(function(courses) {
    res.json(courses);
  });
});

var port = 8081;
server.listen(port, () => {
  console.log('Server listening on port ' + port);
});
