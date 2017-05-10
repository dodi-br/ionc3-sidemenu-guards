import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ProtectedPage} from '../protected-page/protected-page';
import {TokenService} from '../../providers/token-service';

@IonicPage()
@Component({
  selector: 'page-orders-page',
  templateUrl: 'orders-page.html',
})
export class OrdersPage extends ProtectedPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public tokenService: TokenService) {
    super(navCtrl, navParams, tokenService)
  }

}
