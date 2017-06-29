import Proxy from './Proxy';

class TokenProxy extends Proxy {
  constructor() {
    super();
    this._baseUrl = this._baseUrl + '/token';
  }

  getToken(credentials) {
    return this.doPost(undefined, undefined, credentials);
  }
};

const tokenProxy = new TokenProxy();
export { tokenProxy };
