import { LoginOptionsPage } from './../login-options/login-options';
import { CustomerHttpProvider } from './../../providers/http/customer-http';
import { FirebaseAuthProvider } from './../../providers/auth/firebase-auth';
import { Validators, FormControl } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-reset-phone-number',
  templateUrl: 'reset-phone-number.html',
})
export class ResetPhoneNumberPage {

  email = new FormControl('', [Validators.required, Validators.email]);
  canShowFirebaseUi = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private firebaseAuth: FirebaseAuthProvider,
              private customerHttp: CustomerHttpProvider,
              private alertCtrl: AlertController,
              private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetPhoneNumberPage');
  }

  showFirebaseUI(){
    this.canShowFirebaseUi = true;
    this.handleUpdate();
  }

  handleUpdate(){
    this.firebaseAuth
        .makePhoneNumberForm('#firebase-ui')
        .then( () => {
            const email = this.email.value;
            this.customerHttp
                .requestUpdatePhoneNumber(email)
                .subscribe( () => {
                    const alert = this.alertCtrl.create({
                        subTitle: 'Um e-mail com a validação da mudança do telefone foi enviado. Valide-o para logar com o novo telefone.',
                        buttons: [
                          {
                            text: 'OK',
                            handler: () => {
                              this.navCtrl.setRoot(LoginOptionsPage);
                            }
                          }
                        ]
                  });
                  alert.present();
                }, () => {
                  const toast = this.toastCtrl.create({
                    message: 'Não foi possível requisitar a alteração do telefone.',
                    duration: 3000
                  });
                    toast.present();
                    this.handleUpdate();
                })
        });
  }
}
