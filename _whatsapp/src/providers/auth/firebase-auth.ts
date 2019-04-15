import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import firebaseConfig from './../../app/firebase-config';
import scriptjs from 'scriptjs';
declare const firebaseui;
(<any>window).firebase = firebase;

@Injectable()
export class FirebaseAuthProvider {

  private ui;

  constructor() {
    firebase.initializeApp(firebaseConfig);
  }

  get firebase(){
    return firebase;
  }

  async makePhoneNumberForm(selectorElement: string): Promise<any>{
    await this.getFirebaseUI();
    return new Promise( (resolve) => {
      const uiConfig = {
        signInOptions: [
          firebase.auth.PhoneAuthProvider.PROVIDER_ID,
          //firebase.auth.EmailAuthProvider.PROVIDER_ID,
          //firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          //firebase.auth.GoogleAuthProvider
        ],
        /*recaptchaParameters: {
        //type: 'image', // 'audio'
        //size: 'normal', // 'invisible' or 'compact'
        //badge: 'bottomleft' //' bottomright' or 'inline' applies to invisible.
      },*/
      defaultCountry: 'BR',
      defaultNationalNumber: '+55',
      //whitelistedCountries: ['BR', '+55'],
      callbacks: {
        signInSuccessWithAuthResult: (authResult, redirectUrl) => {
          resolve(true);
          return false;
        }
      }
    };
    this.makeFormFirebaseUI(selectorElement, uiConfig);
    })
  }

  private makeFormFirebaseUI(selectorElement, uiConfig){
    if (!this.ui){
        this.ui = new firebaseui.auth.AuthUI(firebase.auth());
        this.ui.start(selectorElement, uiConfig);
    } else {
        this.ui.delete().then(() => {
            this.ui = new firebaseui.auth.AuthUI(firebase.auth());
            this.ui.start(selectorElement, uiConfig);
        });
    }
  }

  private async getFirebaseUI(): Promise<any> {
    return new Promise( (resolve,reject) => {
      if (window.hasOwnProperty('firebaseui')) {
          resolve(firebaseui);
          return;
      }
      scriptjs('https://www.gstatic.com/firebasejs/ui/3.1.1/firebase-ui-auth__pt.js', () => {
      resolve(firebaseui)
      });
    });  
  }

  async getToken(): Promise <string> {
    try {
      const user = await this.getUser();
      if (!user) {
        throw new Error('Usuário não encontrado');
      }
      const token = await user.getIdTokenResult();
      return token.token;
    }catch(e){
      return Promise.reject(e);
    }
  }

  getUser(): Promise <firebase.User | null> {
    const currentUser = this.getCurrentUser();
    if (currentUser) {
      return Promise.resolve(currentUser);
    }
    return new Promise((resolve, reject) => {
      const unsubscribed = this.firebase
          .auth()
          .onAuthStateChanged( (user) => {
            resolve(user);
            unsubscribed();
          },
          (error) => {
            reject(error);
            unsubscribed();
          });
    });
  }

  private getCurrentUser(): firebase.User | null {
    return this.firebase.auth().currentUser;
  }
  

}