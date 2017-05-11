import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ProtectedPage} from '../protected-page/protected-page';
import {Storage} from '@ionic/storage';
import {AuthService} from '../../providers/auth-service';
import {AuthHttp} from 'angular2-jwt';

@IonicPage()
@Component({
  selector: 'page-profile-page',
  templateUrl: 'profile-page.html',
})
export class ProfilePage extends ProtectedPage {

  public profile: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public storage: Storage,
    public authHttp: AuthHttp,
    public authService: AuthService) {
    
    super(navCtrl, navParams, storage)
    
    this.profile = this.authService.user;
    
  }

  getUsers() {
    this.authHttp.get('https://jsonplaceholder.typicode.com/users')
    .subscribe(
      data => console.log(data)
    );
  }
  
  
    
  
}
