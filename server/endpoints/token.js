import express from 'express';
import passport from 'passport';
import { encode } from 'jwt-simple';

import { usersClient } from '../db/db-client-registry';
import { hashHelper } from '../helpers/hash-helper';

const TOKEN_PATH = '/token';
const router = express.Router();

const params = {
  secretOrKey: 'verysecret'
};

router.post('/', (req, res) => {
  if (!req.body.email || !req.body.password) {
    res.sendStatus(401);
    return;
  }

  usersClient.findUser(req.body.email).then(user => {
    if (!user || !hashHelper.compareHashes(req.body.password, user.password)) {
      res.sendStatus(401);
      return;
    }

    const token = encode({ id: user.email }, params.secretOrKey);
    res.json({
      token: token
    });
  }).catch(err => {
    console.log(err);
    res.send(401);
  });
});

router.get('/token/refresh',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const token = encode({ id: user.email }, params.secretOrKey);
    res.json({
      token: token
    });
});

export { router, TOKEN_PATH };
