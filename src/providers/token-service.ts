import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';

@Injectable()
export class TokenService {

  constructor(public storage: Storage) {}

  setToken(token_id: string) {
    return this.storage.ready().then(() =>
      this.storage.set('token_id', token_id)
    );
  }

  getToken() {
    return this.storage.ready().then(() =>
      this.storage.get('token_id')
    );
  }

  deleteToken() {
    return this.storage.ready().then(() =>
      this.storage.remove('token_id')
    );
  }

}
