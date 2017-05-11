import {NavController, NavParams} from 'ionic-angular';
import {TokenService} from '../../providers/token-service';

export class ProtectedPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public tokenService: TokenService) {
  }

  ionViewCanEnter() {

    this.tokenService.getToken().then(token_id => {
      console.log("token_id", token_id)
      if (token_id === null) {
        this.navCtrl.setRoot('LoginPage');
        return false;
      }
    });

    return true;
  }

  public logout() {
    this.tokenService.deleteToken().then(() =>
      this.navCtrl.setRoot('LoginPage')
    );
  }

}
