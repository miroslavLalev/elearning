import express from 'express';
import passport from 'passport';

import User from '../db/entities/user';
import { usersClient } from '../db/db-client-registry';

const USERS_PATH = '/users';
const router = express.Router();

router.post('/', (req, res) => {
  const user = new User(req.body);
  usersClient.createUser(user).then(() => {
      res.send('created');
    }).catch((err) => {
      res.json(err);
    });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  usersClient.findUser(id).then((user) => {
    res.json(user);
  }).catch((err) => {
    res.json(err);
  });
});

router.put('/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const user = new User(req.body);
    usersClient.findById(req.params.id).then(user => {
      // merge users
      // update user
    });
});

export { router, USERS_PATH };
