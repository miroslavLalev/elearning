import Proxy from './Proxy';

class TokenProxy extends Proxy {
  constructor() {
    super();
    this._baseUrl += '/token';
  }

  getToken(credentials) {
    return this.doPost(_, _, credentials);
  }
};

const tokenProxy = new TokenProxy();
export { tokenProxy };
