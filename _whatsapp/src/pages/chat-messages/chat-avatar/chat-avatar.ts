import { Component, Input } from '@angular/core';

const DEFAULT_PHOTO_URL = 'https://www.gravatar.com/avatar/nouse.jpg';

@Component({
  selector: 'chat-avatar',
  templateUrl: 'chat-avatar.html'
})
export class ChatAvatarComponent {

  private _photo: string = DEFAULT_PHOTO_URL;
  @Input()
  position: string;

  constructor() {
  }
  
  @Input()
  set photo(value){
    if(!value){
      this._photo = DEFAULT_PHOTO_URL;
    }
    this._photo = value;
  }

  get photo(){
    return this._photo;
  }

}
