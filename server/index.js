// Load environment
import _ from './env';

// Rest API
import express from 'express';
import passport from 'passport';
import bcrypt from 'bcryptjs';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { encode } from 'jwt-simple';
import bodyParser from 'body-parser';
import { authorizator } from './security/authorization-client';
import { coursesClient, usersClient } from './db/db-client-registry';
import User from './db/entities/user';
import { hashHelper } from './helpers/hash-helper';

const server = express();
server.use(bodyParser.json());
const params = {
  secretOrKey: 'verysecret',
  jwtFromRequest: ExtractJwt.fromAuthHeader()
};
passport.use(new Strategy(params, (payload, done) => {
  usersClient.findUser(payload.id).then(user => {
    if (user) {
      return done(null, { id: user.id });
    }

    return done(new Error('User not found'), null);
  }).catch(err => {
    return done(err);
  });
}));


passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

server.use(passport.initialize());

server.get('/courses',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    coursesClient.getCourses().then(courses => {
      res.json(courses);
    }).catch(err => {
      console.log(err);
      res.json(err);
    });
});

server.post('/token', (req, res) => {
  if (!req.body.username || !req.body.password) {
    res.sendStatus(401);
    return;
  }

  usersClient.findUser(req.body.username).then(user => {
    if (!user || !hashHelper.compareHashes(req.body.password, user.password)) {
      res.sendStatus(401);
      return;
    }

    const token = encode({ id: user.username }, params.secretOrKey);
    res.json({
      token: token
    });
  }).catch(err => {
    res.send(401);
  });
});

server.get('/token/refresh',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const token = encode({ id: user.username }, params.secretOrKey);
    res.json({
      token: token
    });
});

server.post('/register', (req, res) => {
  const user = new User(req.body);
  usersClient.createUser(user).then(() => {
      res.send('created');
    }).catch((err) => {
      console.log(err);
      res.json(err);
    });
});

var port = 9072;
server.listen(port, () => {
  console.log('Server listening on port ' + port);
});
