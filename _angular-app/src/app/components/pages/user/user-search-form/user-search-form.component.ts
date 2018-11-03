import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'user-search-form',
  templateUrl: './user-search-form.component.html',
  styleUrls: ['./user-search-form.component.css']
})
export class UserSearchFormComponent implements OnInit {

  search = "";

  @Output()
  onSearch: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  submit(){
    this.onSearch.emit(this.search);
    return false;
  }

}
