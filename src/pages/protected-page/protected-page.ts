import {NavController, NavParams} from 'ionic-angular';
import {Storage} from '@ionic/storage';

export class ProtectedPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  }

  ionViewCanEnter() {

    this.storage.get('id_token').then(token_id => {
      console.log("token_id", token_id)
      if (token_id === null) {
        this.navCtrl.setRoot('LoginPage');
        return false;
      }
    });

    return true;
  }

  public logout() {
    this.storage.remove('id_token').then(() =>
      this.navCtrl.setRoot('LoginPage')
    );
  }

}
