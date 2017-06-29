import DatabaseClient from './abstract-client';

class CoursesClient extends DatabaseClient {
  getCourses() {
    return this.executeQuery("SELECT * FROM ${schema~}.COURSES");
  };

  addCourse(course) {
    return this.executeQuery("INSERT INTO ${schema~}.COURSES(NAME, DESCRIPTION) " +
      "VALUES(${name}, ${description})", course);
  };

  addLecture(lecture, course) {
    return this.executeQuery("INSERT INTO ${schema~}.LECTURES(NAME, DESCRIPTION, COURSE) " +
      "VALUES(${name}, ${description}, ${course})", Object.assign(lecture, { course: course }));
  };
};

const coursesClient = new CoursesClient();
export { coursesClient };
