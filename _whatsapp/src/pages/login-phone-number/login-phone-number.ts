import { MainPage } from './../main/main';
import { AuthProvider } from './../../providers/auth/auth';
import { FirebaseAuthProvider } from './../../providers/auth/firebase-auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
//import * as firebaseui from 'firebaseui';
(<any>window).firebase = firebase;

@IonicPage()
@Component({
  selector: 'page-login-phone-number',
  templateUrl: 'login-phone-number.html',
})
export class LoginPhoneNumberPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private firebaseAuth: FirebaseAuthProvider,
              private authService: AuthProvider) {
  }

  ionViewDidLoad() {
    const unsubscribed = this.firebaseAuth.firebase.auth().onAuthStateChanged( (user) => {
      if(user){
        this.authService
        .login()
        .subscribe( (token) => {
          this.redirectToMainPage();
        }, (responseError) => {
          // redirecionar para a criação de conta do cliente
        });
        unsubscribed();
      }
    });
    
    this.firebaseAuth.makePhoneNumberForm('#firebase-ui');
  }

  redirectToMainPage(){
    this.navCtrl.setRoot(MainPage);
  }

  redirectToCustomerCreatePage(){
    //this.navCtrl.setRoot(CustomerCreatePage);
  }

}
