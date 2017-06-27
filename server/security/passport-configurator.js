import passport from 'passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { usersClient } from '../db/db-client-registry';

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

export { passport };
