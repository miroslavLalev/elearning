import bcrypt from 'bcryptjs';

class HashHelper {
  hashPassword(p) {
    // TODO: Use async
    return bcrypt.hashSync(p, bcrypt.genSaltSync(10));
  }

  compareHashes(h1, h2) {
    return bcrypt.compareSync(h1, h2);
  }
}

const hashHelper = new HashHelper();
export { hashHelper };
