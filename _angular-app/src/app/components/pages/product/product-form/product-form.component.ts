import { ChangeDetectorRef, Component, OnInit, Input } from '@angular/core';
import { FormGroup } from "@angular/forms";
import fieldsOptions from './product-fields-options';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

/*  @Input()
  product: Product = {
    name: '',
    description: '',
    price: 0,
    active: true
  };*/

  @Input()
  form: FormGroup;

  constructor(private changeRef: ChangeDetectorRef) { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.changeRef.detectChanges();
  }

  get fieldsOptions(): any{
    return fieldsOptions;
  }

  get name(){
    return this.fieldsOptions.name
  }

  get description(){
    return this.fieldsOptions.description
  }

  get price(){
    return this.fieldsOptions.price
  }

}
