class AuthenticationClient {
  isRequestPermitted(req) {
    return !!(req.headers['x-nginx-proxy']);
  }
}

const authenticator = new AuthenticationClient();
export { authenticator };
