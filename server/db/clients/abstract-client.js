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

  singleResult(query, context) {
    return this.getClient().one(query, Object.assign({schema: this.getSchema()}, context));
  }

  executeQuery(query, context) {
    return this.getClient().query(query, Object.assign({schema: this.getSchema()}, context));
  }
};
