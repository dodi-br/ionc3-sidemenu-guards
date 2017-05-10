import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ProtectedPage} from '../protected-page/protected-page';
import {TokenService} from '../../providers/token-service';

@IonicPage()
@Component({
  selector: 'page-profile-page',
  templateUrl: 'profile-page.html',
})
export class ProfilePage extends ProtectedPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public tokenService: TokenService) {
    super(navCtrl, navParams, tokenService)
  }

  
}
