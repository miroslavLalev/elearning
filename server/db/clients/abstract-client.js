import pgp from 'pg-promise';

const promise = pgp({});
const dbClient = promise(process.env.DATABASE_URL);

export default class DatabaseClient {
  getSchema() {
    return process.env.SCHEMA;
  }

  getClient() {
    return dbClient;
  }

  executeQuery(query, success, error) {
    return this.getClient().query(query);
  }
};
