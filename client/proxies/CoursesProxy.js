import Proxy from './Proxy';
import { tokenRegistry } from '../registry/token-registry';

class CoursesProxy extends Proxy {
  constructor() {
    super();
    this._baseUrl += '/courses';
  };

  getCourses() {
    return this.doGet();
  };

  addCourse(course) {
    if (!tokenRegistry.getToken()) {
      console.log('Please authorize before adding course');
    }

    return this.doPost(_, new Headers({
      'Authorization': 'JWT ' + tokenRegistry.getToken()
    }), course);
  };
};
