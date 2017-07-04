import Proxy from './Proxy';

class TokenProxy extends Proxy {
  constructor() {
    super();
    this._baseUrl += '/token';
  };

  getTokenFromCache() {
    return this.doGet(undefined, new Headers({
      'Authorization': 'Basic ' + window.localStorage.getItem('auth'),
      'Content-Type': 'application/json'
    }));
  };

  getToken(credentials) {
    const b64s = btoa(credentials.email + ':' + credentials.password);
    window.localStorage.setItem('auth', b64s);
    return this.doGet(undefined, new Headers({
      'Authorization': 'Basic ' + b64s,
      'Content-Type': 'application/json'
    }));
  };
};

const tokenProxy = new TokenProxy();
export { tokenProxy };
