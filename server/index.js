// Load environment
import _ from './env';

// Rest API
import express from 'express';
import bodyParser from 'body-parser';

import { passport } from './security/passport-configurator';
import { COURSES_PATH, router as coursesRouter } from './endpoints/courses';
import { USERS_PATH, router as usersRouter } from './endpoints/users';
import { TOKEN_PATH, router as tokenRouter } from './endpoints/token';

const server = express();
server.use(bodyParser.json());
server.use(passport.initialize());

// Routing
server.use(COURSES_PATH, coursesRouter);
server.use(USERS_PATH, usersRouter);
server.use(TOKEN_PATH, tokenRouter);

var port = 9072;
server.listen(port, () => {
  console.log('Server listening on port ' + port);
});
