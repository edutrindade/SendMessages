import { ChangeDetectorRef, ElementRef, Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormGroup } from "@angular/forms";
import fieldsOptions from './category-fields-options';
import { CategoryIdFieldService } from './category-id-field.service';
import { Select2Component } from "ng2-select2";

@Component({
  selector: 'category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {

  @Input()
  form: FormGroup;

  @ViewChild(Select2Component, {read: ElementRef})
  select2Element: ElementRef;

  constructor(private changeRef: ChangeDetectorRef,
              public categoryIdField: CategoryIdFieldService) { 
  }

  ngOnInit() {
    this.categoryIdField.make(this.select2Element, this.form.get('category_id'));
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

}
