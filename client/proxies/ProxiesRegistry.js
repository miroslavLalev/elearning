import { tokenProxy } from './TokenProxy';
import { usersProxy } from './UsersProxy';

export default class ProxiesRegistry {
  registerProxies() {
    window.tokenProxy = tokenProxy;
    window.usersProxy = usersProxy;
  };
};
