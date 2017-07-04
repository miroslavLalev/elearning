import passport from 'passport';
import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt';

import { usersClient } from '../db/db-client-registry';

export const JWT_SECRET = 'verysecret';

const params = {
  secretOrKey: JWT_SECRET,
  jwtFromRequest: ExtractJwt.fromAuthHeader()
};

passport.use(new JwtStrategy(params, (payload, done) => {
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
