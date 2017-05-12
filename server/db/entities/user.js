import { hashHelper } from '../../helpers/hash-helper';

export default class User {
  constructor(plainUser) {
    this.username = plainUser.username;
    this.email = plainUser.email;
    this.firstName = plainUser.firstName;
    this.lastName = plainUser.lastName;
    this.password = hashHelper.hashPassword(plainUser.password);
  }
}
