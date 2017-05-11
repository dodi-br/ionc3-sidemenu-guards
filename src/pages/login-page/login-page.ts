import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {TokenService} from '../../providers/token-service';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';

import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-login-page',
  templateUrl: 'login-page.html',
})
export class LoginPage {

  private loginData: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public tokenService: TokenService,
    private formBuilder: FormBuilder,
    private http: Http) {

    this.loginData = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
    });

  }

  ionViewDidLoad() {
    //hide menu when on the login page, regardless of the screen resolution
    this.menuCtrl.enable(false);
  }

  login() {

    this.http
      .get('http://localhost:3000/users?email=' + this.loginData.value.username + '&password=' + this.loginData.value.password)
      .map(res => res.json()).subscribe(data => {
        if (data && data[0] && data[0].id) {
          this.tokenService.setToken('zxcvbnmlkjhgfdsa').then(() => {
            this.navCtrl.setRoot('HomePage');
            this.menuCtrl.enable(true);
          });
        }
      });


    //use this.loginData.value to authenticate the user

    //    this.tokenService.setToken('zxcvbnmlkjhgfdsa').then(() => {
    //      this.navCtrl.setRoot('HomePage');
    //      this.menuCtrl.enable(true);
    //    });

  }
}
