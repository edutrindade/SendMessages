import { ResetPhoneNumberPage } from './../reset-phone-number/reset-phone-number';
import { LoginPhoneNumberPage } from './../login-phone-number/login-phone-number';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';

/**
 * Generated class for the LoginOptionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login-options',
  templateUrl: 'login-options.html',
})
export class LoginOptionsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private actionSheetCtrl: ActionSheetController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginOptionsPage');
  }

  openLoginOptions() {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Já possui telefone cadastrado?',
      buttons: [
        {
          text: 'Sim, quero entrar.',
          handler: () => {
            this.navCtrl.push(LoginPhoneNumberPage);
          }
        },
        {
          text: 'Sim, mas quero trocar.',
          handler: () => {
            this.navCtrl.push(ResetPhoneNumberPage);
          }
        },
        {
          text: 'Não, quero cadastrar.',
          handler: () => {
            this.navCtrl.push(LoginPhoneNumberPage);
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }

}
