import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ProtectedPage} from '../protected-page/protected-page';
import {Storage} from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-home-page',
  templateUrl: 'home-page.html',
})
export class HomePage extends ProtectedPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    super(navCtrl, navParams, storage)
  }

}
