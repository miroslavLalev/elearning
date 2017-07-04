import Proxy from './Proxy';

class TokenProxy extends Proxy {
  constructor() {
    super();
    this._baseUrl += '/token';
  };

  getToken(credentials) {
    if (!credentials) {
      return this.doGet(undefined, undefined).catch(err => { return { token: "", user: {}} });
    }

    const b64s = btoa(credentials.email + ':' + credentials.password);
    return this.doGet(undefined, new Headers({
      'Authorization': 'Basic ' + b64s,
      'Content-Type': 'application/json'
    }));
  };
};

const tokenProxy = new TokenProxy();
export { tokenProxy };
