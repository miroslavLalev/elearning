import session from 'express-session';
import pg from 'pg';
import pgSession from 'connect-pg-simple';

const wrapper = pgSession(session);

export default class SessionManager {
  attachSessionHandler(server) {
    server.set('trust proxy', 1);
    server.use(session({
      store: new wrapper({
        pg: pg,
        conString: `${process.env.DATABASE_URL}`,
        schemaName: `${process.env.SCHEMA}`
      }),
      secret: `${process.env.SECRET_KEY}` || 'muchsecret',
      saveUninitialized: false,
      resave: false,
      cookie: {
        httpOnly: true,
        maxAge: 60000,
      }
    }));
  }
}
