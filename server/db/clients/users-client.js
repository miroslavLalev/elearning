import DatabaseClient from './abstract-client';

class UsersClient extends DatabaseClient {

  findById(id) {
    return this.singleResult("SELECT * FROM ${schema~}.USERS WHERE ID = ${id}", {
      id: id
    });
  }

  findUser(username) {
    return this.singleResult("SELECT * FROM ${schema~}.USERS WHERE EMAIL = ${email}", {
      email: email
    });
  }

  createUser(user) {
    return this.executeQuery("INSERT INTO ${schema~}.USERS " +
      "(EMAIL, FIRSTNAME, LASTNAME, PASSWORD) " +
      "VALUES (${email}, ${firstName}, ${lastName}, ${password})", user);
  }
}

const usersClient = new UsersClient();
export { usersClient };
