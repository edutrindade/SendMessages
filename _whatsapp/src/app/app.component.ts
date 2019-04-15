import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { MainPage } from './../pages/main/main';
/*import { CustomerCreatePage } from './../pages/customer-create/customer-create';
import { ResetPhoneNumberPage } from './../pages/reset-phone-number/reset-phone-number';
import { LoginPhoneNumberPage } from './../pages/login-phone-number/login-phone-number';
import { LoginOptionsPage } from './../pages/login-options/login-options';*/

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = MainPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      /*{ title: 'Login', component: LoginOptionsPage },
      { title: 'LoginPhone', component: LoginPhoneNumberPage},
      { title: 'ResetPhone', component: ResetPhoneNumberPage},
      { title: 'CustomerCreate', component: CustomerCreatePage}*/
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}
