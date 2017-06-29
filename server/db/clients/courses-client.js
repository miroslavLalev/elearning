import DatabaseClient from './abstract-client';

class CoursesClient extends DatabaseClient {
  getCourses() {
    return this.executeQuery("SELECT * FROM ${schema~}.COURSES");
  };

  addCourse(course, user) {
    return this.executeQuery("INSERT INTO ${schema~}.COURSES(NAME, DESCRIPTION, AUTHOR) " +
      "VALUES(${name}, ${description}, ${user})", Object.assign(lecture, { user }));
  };

  getCourse(id) {
    return this.executeQuery("SELECT * FROM ${schema~}.COURSES WHERE ID=${id}", { id });
  };

  getLectures(courseId) {
    return this.executeQuery("SELECT * FROM ${schema~}.LECTURES " +
      "WHERE COURSE=${courseId}", { courseId });
  };

  addLecture(lecture, course) {
    return this.executeQuery("INSERT INTO ${schema~}.LECTURES(NAME, DESCRIPTION, TYPE, CONTENT, COURSE) " +
      "VALUES(${name}, ${description}, ${type}, ${content}, ${course})",
      Object.assign(lecture, { course }));
  };

  getLecture(courseId, lectureId) {
    return this.executeQuery("SELECT * FROM ${schema~}.LECTURES " +
      "WHERE ID=${lectureId} AND COURSE=${courseId}", { lectureId, courseId });
  };
};

const coursesClient = new CoursesClient();
export { coursesClient };
