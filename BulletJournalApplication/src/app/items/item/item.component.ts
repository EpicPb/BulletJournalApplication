import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../shared/items.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(itemForm: NgForm){
    if(itemForm.value.$key == null){
      this.itemsService.insertItem(itemForm.value);
      console.log("insert");
    }
    else{
      this.itemsService.updateItem(itemForm.value);
      console.log("update");
    }
    this.resetForm(itemForm);
  }

  resetForm(itemForm?: NgForm){
    if(itemForm != null)
      itemForm.reset();

    this.itemsService.selectedItem = {
      $key: null,
      title: '',
      datetime: '',
      // day: '',
      // description: '',
      // week: '',
      // month: ''
    }
  }
}
