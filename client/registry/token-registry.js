class TokenRegistry {
  constructor() {
    this._token = undefined;
  };

  requestToken(credentials) {
    return window.tokenProxy.getToken(credentials).then(token => {
      this._token = token;
      return token;
    });
  };

  getToken(credentials) {
    return this._token;
  };

  setToken(token) {
    this._token = token;
  };
};

const tokenRegistry = new TokenRegistry();
export { tokenRegistry };
