import { tokenProxy } from './TokenProxy';
import { usersProxy } from './UsersProxy';
import { coursesProxy } from './CoursesProxy';

export default class ProxiesRegistry {
  registerProxies() {
    window.tokenProxy = tokenProxy;
    window.usersProxy = usersProxy;
    window.coursesProxy = coursesProxy;
  };
};
