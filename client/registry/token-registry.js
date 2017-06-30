class TokenRegistry {
  constructor() {
    this._token = undefined;
  };

  requestToken(credentials) {
    return window.tokenProxy.getToken(credentials).then(obj => {
      this._token = obj.token;
      return obj;
    });
  };

  getToken(credentials) {
    return this._token;
  };

  setToken(token) {
    this._token = token;
  };

  clearToken() {
    this._token = token;
  };
};

const tokenRegistry = new TokenRegistry();
export { tokenRegistry };
