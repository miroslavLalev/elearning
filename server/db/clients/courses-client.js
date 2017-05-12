import DatabaseClient from './abstract-client';

class CoursesClient extends DatabaseClient {
  getCourses() {
    return this.executeQuery("SELECT * FROM ${schema~}.COURSES");
  }
}

const coursesClient = new CoursesClient();
export { coursesClient };
