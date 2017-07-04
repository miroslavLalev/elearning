import { hashHelper } from '../../helpers/hash-helper';

export default class User {
  constructor(plainUser) {
    this.email = plainUser.email;
    this.firstname = plainUser.firstname;
    this.lastname = plainUser.lastname;
    this.role = plainUser.role;
    if (plainUser.password) {
      this.password = hashHelper.hashPassword(plainUser.password);
    }
  };
};
