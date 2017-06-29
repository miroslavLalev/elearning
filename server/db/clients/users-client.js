import DatabaseClient from './abstract-client';

class UsersClient extends DatabaseClient {

  findById(id) {
    return this.singleResult("SELECT * FROM ${schema~}.USERS WHERE ID = ${id}", {
      id: id
    });
  }

  findUser(email) {
    return this.singleResult("SELECT * FROM ${schema~}.USERS WHERE EMAIL = ${email}", {
      email: email
    });
  }

  createUser(user) {
    return this.executeQuery("INSERT INTO ${schema~}.USERS " +
      "(EMAIL, FIRSTNAME, LASTNAME, PASSWORD, ROLE) " +
      "VALUES (${email}, ${firstname}, ${lastname}, ${password}, ${role})", user);
  }
}

const usersClient = new UsersClient();
export { usersClient };
