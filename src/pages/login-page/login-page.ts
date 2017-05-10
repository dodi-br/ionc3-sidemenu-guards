import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {TokenService} from '../../providers/token-service';

@IonicPage()
@Component({
  selector: 'page-login-page',
  templateUrl: 'login-page.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController, public tokenService: TokenService) {
  }

  ionViewDidLoad() {
    //hide menu when on the login page, regardless of the screen resolution
    this.menuCtrl.enable(false);
  }

  login() {
    this.tokenService.setToken('zxcvbnmlkjhgfdsa').then(() => {
      this.navCtrl.setRoot('HomePage');
      this.menuCtrl.enable(true);
    });

  }
}
