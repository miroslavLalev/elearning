import { fetchHelper } from '../proxies/helpers/fetch-helper';

class TokenManager {
  constructor() {
    this._token = undefined;
  }

  initializeToken(credentials) {
    return this._retrieveToken(credentials)
      .then(token => {
        return (this._token = token);
      }).then();
  }

  getToken() {
    return this._token;
  }
}
