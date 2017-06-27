import express from 'express';
import passport from 'passport';

import User from '../db/entities/user';
import { usersClient } from '../db/db-client-registry';

const USERS_PATH = '/users';
const router = express.Router();

router.post('/register', (req, res) => {
  const user = new User(req.body);
  usersClient.createUser(user).then(() => {
      res.send('created');
    }).catch((err) => {
      res.json(err);
    });
});

export { router, USERS_PATH };
