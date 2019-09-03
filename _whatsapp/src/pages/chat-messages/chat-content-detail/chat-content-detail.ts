import { ChatMessage } from "./../../../app/model";
import { Component, Input } from "@angular/core";

@Component({
  selector: "chat-content-detail",
  templateUrl: "chat-content-detail.html"
})
export class ChatContentDetailComponent {
  @Input()
  message: ChatMessage;

  constructor() {}
}
