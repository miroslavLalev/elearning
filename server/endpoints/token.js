import express from 'express';
import passport from 'passport';
import { encode } from 'jwt-simple';

import { usersClient } from '../db/db-client-registry';
import { hashHelper } from '../helpers/hash-helper';
import { JWT_SECRET } from '../security/passport-configurator';

const TOKEN_PATH = '/token';
const router = express.Router();

router.get('/', (req, res) => {
  const auth = req.get('authorization');
  if (!auth) {
    res.set('WWW-Authenticate', 'x-Basic realm="Access token"');
    res.status(401);
    res.send();
    return;
  }

  const credentials = new Buffer(auth.substring('Basic'.length).trim(), 'base64').toString().split(':');
  if (credentials.length !== 2) {
    res.set('WWW-Authenticate', 'x-Basic realm="Access token"');
    res.status(401);
    res.send();
    return;
  }

  const email = credentials[0];
  const password = credentials[1];
  usersClient.findUser(email).then(user => {
    if (!user || !hashHelper.compareHashes(password, user.password)) {
      res.set('WWW-Authenticate', 'x-Basic realm="Access token"');
      res.status(401);
      res.send();
      return;
    }

    const token = encode({ n: user.id, id: user.email }, JWT_SECRET);
    res.json({ user, token });
  }).catch(err => {
    console.log(err);
    res.set('WWW-Authenticate', 'x-Basic realm="Access token"');
    res.status(401);
    res.send();
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
