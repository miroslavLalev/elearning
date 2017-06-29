import Proxy from './Proxy';

class UsersProxy extends Proxy {
  constructor() {
    super();
    this._baseUrl = this._baseUrl + '/users';
  };

  register(user) {
    return this.doPost(undefined, undefined, user);
  };
};

const usersProxy = new UsersProxy();
export { usersProxy };
