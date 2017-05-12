class AuthenticationClient {
  isRequestPermitted(req) {
    return !!(req.headers[process.env.HTTP_HEADER]);
  }
}

const authenticator = new AuthenticationClient();
export { authenticator };
