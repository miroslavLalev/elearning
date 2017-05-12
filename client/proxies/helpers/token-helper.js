import { fetchHelper } from './fetch-helper';

class TokenHelper {
  getToken(credentials) {
    return fetchHelper.postJson('https://localhost/token', undefined, credentials)
      .then(tokenJson => {
        return tokenJson.token;
      });
  }
}

const tokenHelper = new TokenHelper();
export { tokenHelper };
