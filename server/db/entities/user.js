import { hashHelper } from '../../helpers/hash-helper';

export default class User {
  constructor(plainUser) {
    this.email = plainUser.email;
    this.firstName = plainUser.firstName;
    this.lastName = plainUser.lastName;
    this.password = hashHelper.hashPassword(plainUser.password);
    this.role = plainUser.role;
  };
};
