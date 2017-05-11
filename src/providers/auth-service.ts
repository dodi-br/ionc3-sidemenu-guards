import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

import {TokenService} from './token-service';

@Injectable()
export class AuthService {

  private user: any;

  constructor(
    private http: Http,
    private tokenService: TokenService) {}

  login(userData) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/1');
  }

  logout() {
    this.tokenService.deleteToken().then(() => this.user = null);
  }

  setUser(user: any) {
    this.user = user;
  }

  getUser(): any {
    return this.user;
  }
}
