import { usersClient } from '../db/db-client-registry';
import { hashHelper } from '../helpers/hash-helper';

class AuthorizationClient {
  authorize(email, password) {
    return usersClient.findUser(email)
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
