import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Storage} from '@ionic/storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'LoginPage';

  pages: Array<{title: string, component: any, method?: any}>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public storage: Storage) {

    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      {title: 'Home', component: 'HomePage'},
      {title: 'Orders', component: 'OrdersPage'},
      {title: 'Profile', component: 'ProfilePage'},
      {title: 'Logout', method: 'logout', component: 'LoginPage'}
    ];

  }
  
  ngOnInit() {
    this.storage.remove('id_token');
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {

    if (page.method && page.method == 'logout') {
      this.storage.remove('id_token');
    }

    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario    
    this.nav.setRoot(page.component);

  }
}
