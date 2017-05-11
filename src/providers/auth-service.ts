import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {AuthHttp} from 'angular2-jwt';
import {TokenService} from './token-service';
import 'rxjs/add/operator/toPromise';



@Injectable()
export class AuthService {

  user: {email?: string};
  idToken: string;

  constructor(
    private tokenService: TokenService,
    private http: Http,
    private authHttp: AuthHttp) {

  }

  login() {

    return this.http.get('https://jsonplaceholder.typicode.com/users/1')
      .toPromise()
      .then(data => {
        this.user = data.json();
        this.tokenService.setToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ");
        return true;
      });

  }

  logout() {
    this.authHttp
      .delete('https://jsonplaceholder.typicode.com/users/1')
      .subscribe(() => this.tokenService.deleteToken());
  }


}
