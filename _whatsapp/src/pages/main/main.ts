import { SuperTabsModule } from 'ionic2-super-tabs';
import { ChatGroupListComponent } from './../../components/chat-group-list/chat-group-list';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})

export class MainPage {

  chatGroupList = ChatGroupListComponent;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

}
