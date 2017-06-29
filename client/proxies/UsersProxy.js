import Proxy from './Proxy';

class UsersProxy extends Proxy {
  constructor() {
    super();
    this._baseUrl += '/users';
  };

  register(user) {
    return this.doPost(_, _, user);
  };
};

const usersProxy = new UsersProxy();
export { usersProxy };
