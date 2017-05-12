import { usersClient } from '../db/db-client-registry';
import { hashHelper } from '../helpers/hash-helper';

class AuthorizationClient {
  authorize(username, password) {
    return usersClient.findUser(username)
      .then((user) => {
        if (!user) {
          return false;
        }

        return hashHelper.compareHashes(password, user.password);
      }).catch((error) => {
        throw new Error('Failed to authorize');
      });
  }
}

const authorizator = new AuthorizationClient();
export { authorizator };
