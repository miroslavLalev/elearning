import DatabaseClient from './abstract-client';

class CoursesClient extends DatabaseClient {
  getCourses() {
    return this.executeQuery(`SELECT * FROM ${this.getSchema()}.COURSES`);
  }
}

const coursesClient = new CoursesClient();
export { coursesClient };
