import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {TokenService} from '../../providers/token-service';
import {AuthService} from '../../providers/auth-service';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';



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
    public authService: AuthService) {

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

    this.authService.login(this.loginData.value).map(rs => rs.json()).subscribe(
      data => {
        if (data && data.id) {
          this.tokenService.setToken('zxcvbnmlkjhgfdsa').then(() => {
            this.authService.setUser(data);

            this.navCtrl.setRoot('HomePage');
            this.menuCtrl.enable(true);

          });
        }
      },
      err => {
        console.log("err", err)
      }
    );


    //use this.loginData.value to authenticate the user

    //    this.tokenService.setToken('zxcvbnmlkjhgfdsa').then(() => {
    //      this.navCtrl.setRoot('HomePage');
    //      this.menuCtrl.enable(true);
    //    });

  }
}
