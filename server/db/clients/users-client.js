import DatabaseClient from './abstract-client';

class UsersClient extends DatabaseClient {

  findById(id) {
    return this.singleResult("SELECT * FROM ${schema~}.USERS WHERE ID = ${id}", {
      id: id
    });
  }

  findUser(username) {
    return this.singleResult("SELECT * FROM ${schema~}.USERS WHERE USERNAME = ${username}", {
      username: username
    });
  }

  createUser(user) {
    return this.executeQuery("INSERT INTO ${schema~}.USERS " +
      "(USERNAME, EMAIL, FIRSTNAME, LASTNAME, PASSWORD) " +
      "VALUES (${username}, ${email}, ${firstName}, ${lastName}, ${password})", user);
  }
}

const usersClient = new UsersClient();
export { usersClient };
