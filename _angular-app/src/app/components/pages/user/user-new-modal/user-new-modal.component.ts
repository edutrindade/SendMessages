import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ModalComponent } from '../../../bootstrap/modal/modal.component';
import { HttpErrorResponse } from '@angular/common/http';
import { UserHttpService } from '../../../../services/http/user-http.service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import fieldsOptions from '../user-form/user-fields-options';

@Component({
  selector: 'user-new-modal',
  templateUrl: './user-new-modal.component.html',
  styleUrls: ['./user-new-modal.component.css']
})
export class UserNewModalComponent implements OnInit {

  form: FormGroup;
  errors = {}

  @ViewChild(ModalComponent) modal: ModalComponent;
  
  @Output() onSuccess: EventEmitter<any> = new EventEmitter<any>();
  @Output() onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>();

  constructor(public userHttp: UserHttpService, private formBuilder: FormBuilder) {
    const maxLengthName = fieldsOptions.name.validationMessage.maxlength;
    const maxLengthEmail = fieldsOptions.email.validationMessage.maxlength;
    const maxLengthPassword = fieldsOptions.password.validationMessage.maxlength;
    //const minLengthPassword = fieldsOptions.password.validationMessage.minlength;
      this.form = this.formBuilder.group({
        name: ['', [Validators.required, Validators.maxLength(maxLengthName)]],
        email: ['', [Validators.required, Validators.maxLength(maxLengthEmail)]],
        password: ['', [Validators.required, Validators.maxLength(maxLengthPassword)]]
      });
   }

  ngOnInit() {
  }

  submit(){
    this.userHttp
      .create(this.form.value)
      .subscribe((user) => {
        this.form.reset({
          name: '',
          email: '',
          password: ''
        });
      this.onSuccess.emit(user);
      this.modal.hide();
    }, responseError => {
      if(responseError.status === 422){
        this.errors = responseError.error.errors
      }
      this.onError.emit(responseError)
    });
  }

  showModal(){
    this.modal.show();
  }

  showErrors(){
    return Object.keys(this.errors).length != 0;
  }

  hideModal($event){
    console.log($event);
  }

}
