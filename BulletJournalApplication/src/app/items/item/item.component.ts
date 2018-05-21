import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../shared/items.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-item',
  templateUrl: './itemUI.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  constructor(private itemsService: ItemsService) { }
  checked = false;
  inputdate: any;
  // panelOpenState = false;

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(itemForm: NgForm){
    console.log("onsubmit");
    console.log(this.inputdate);
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
      priority: ''
    }
  }
  // toggleDatePicker(){
  //   if(this.panelOpenState == true){
  //     this.panelOpenState = false;
  //   }else{
  //     this.panelOpenState = true;
  //   }
  // }

}
