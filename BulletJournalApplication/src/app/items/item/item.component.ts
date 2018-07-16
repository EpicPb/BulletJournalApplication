import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../shared/items.service';
import { NgForm } from '@angular/forms';

import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {ElementRef, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatChipInputEvent} from '@angular/material';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';



@Component({
  selector: 'app-item',
  templateUrl: './itemUI.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  constructor(private itemsService: ItemsService) {
    this.filteredtags = this.tagCtrl.valueChanges.pipe(
        startWith(null),
        map((tag: string | null) => tag ? this.filter(tag) : this.alltags.slice()));
  }
  checked = false;
  inputdate: any;
  showtag: boolean;

  inputModel:string;

// start instantiation of variables for tags block
  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = false;

  separatorKeysCodes = [ENTER, COMMA];

  tagCtrl = new FormControl();

  filteredtags: Observable<any[]>;

  tags = [

  ];

  alltags = [
    'School',
    'Personal',
    'DATACOMM',
    'THESIS',
    'Grocery List'
  ];
//end block

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(itemForm: NgForm){
    console.log("onsubmit");
    // console.log(this.inputdate);
    console.log(this.tags);
    itemForm.value.tags = this.tags;

    if(itemForm.value.$key == null){
      console.log(itemForm.value);
      this.itemsService.insertTask(itemForm.value);
      console.log("insert");
    }
    else{
      this.itemsService.updateTask(itemForm.value);
      console.log("update");
    }
    this.resetForm(itemForm);
    this.tags = [];
  }

  resetForm(itemForm?: NgForm){
    if(itemForm != null)
      itemForm.reset();

    this.itemsService.selectedItem = {
      $key: null,
      title: '',
      day: '',
      note: '',
      year: '',
      month: '',
      priority: '',
      tags: []
    }
  }

  toggletag(){
    if(this.showtag == true){
      this.showtag = false;
    }else{
      this.showtag = true;
    }
  }
  // toggleDatePicker(){
  //   if(this.panelOpenState == true){
  //     this.panelOpenState = false;
  //   }else{
  //     this.panelOpenState = true;
  //   }
  // }
  @ViewChild('tagInput') tagInput: ElementRef;

    add(event: MatChipInputEvent): void {
      const input = event.input;
      const value = event.value;

      // Add our tag
      if ((value || '').trim()) {
        this.tags.push(value.trim());
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.tagCtrl.setValue(null);
    }

    remove(tag: any): void {
      const index = this.tags.indexOf(tag);

      if (index >= 0) {
        this.tags.splice(index, 1);
      }
    }

    filter(name: string) {
      return this.alltags.filter(tag =>
          tag.toLowerCase().indexOf(name.toLowerCase()) === 0);
    }

    selected(event: MatAutocompleteSelectedEvent): void {
      this.tags.push(event.option.viewValue);
      this.tagInput.nativeElement.value = '';
      this.tagCtrl.setValue(null);
    }


}
