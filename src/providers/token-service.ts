import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';

@Injectable()
export class TokenService {

  constructor(public storage: Storage) {}

  setToken(token_id: string) {
    return this.storage.ready().then(() =>
      this.storage.set('id_token', token_id)
    );
  }

  getToken() {
    return this.storage.ready().then(() =>
      this.storage.get('id_token')
    );
  }

  deleteToken() {
    return this.storage.ready().then(() =>
      this.storage.remove('id_token')
    );
  }

}
