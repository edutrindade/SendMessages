import { Component, OnInit, EventEmitter, Output, ChangeDetectorRef, Input, ViewChild, ElementRef } from '@angular/core';
import fieldsOptions from '../category-form/category-fields-options';
import { CategoryIdFieldService } from '../category-form/category-id-field.service';
import { Select2Component } from "ng2-select2";
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'category-search-form',
  templateUrl: './category-search-form.component.html',
  styleUrls: ['./category-search-form.component.css']
})
export class CategorySearchFormComponent implements OnInit {

  search = "";

  @Input()
  form: FormGroup;

  @ViewChild(Select2Component, {read: ElementRef})
  select2Element: ElementRef;

  @Output()
  onSearch: EventEmitter<string> = new EventEmitter<string>();

  constructor(private changeRef: ChangeDetectorRef,
    public categoryIdField: CategoryIdFieldService) { 
  }

  ngOnInit() {
    this.categoryIdField.make(this.select2Element, this.form.get('category_id'));
  }

  submit(){
    this.onSearch.emit(this.search);
    return false;
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
