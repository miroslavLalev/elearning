import { fetchHelper } from './helpers/fetch-helper';

export default class Proxy {
  constructor() {
    this._baseUrl = process.env.SERVICE_URL;
  };

  doGet(uri, headers) {
    return fetchHelper.getJson(this._baseUrl + (uri || ''), headers);
  };

  doPost(uri, headers, body) {
    return fetchHelper.postJson(this._baseUrl + (uri || ''), headers, body)
      .catch(err => {
        console.log(err);
      });
  };
};
