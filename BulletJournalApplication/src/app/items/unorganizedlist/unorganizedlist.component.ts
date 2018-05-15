import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../shared/items.service';
import { Item, Note, Evont, Task } from '../shared/item.model';
import { AngularFireList  } from 'angularfire2/database';
@Component({
  selector: 'app-unorganizedlist',
  templateUrl: './unorganizedlist.component.html',
  styleUrls: ['./unorganizedlist.component.scss']
})
export class UnorganizedlistComponent implements OnInit {

  itemList: Item[];
  x: AngularFireList<any>;
  showSpinner: boolean = true;

  constructor(private itemsService: ItemsService) {
    console.log('load unorganizedlist component');
 }

  ngOnInit() {
    // var x = this.itemsService.getData();
    setTimeout(() => {
      console.log('getdata');
      this.x = this.itemsService.getData();
      this.x.snapshotChanges().subscribe(i => {
        this.showSpinner = false;
        this.itemList = [];
        i.forEach(element => {
          var y = element.payload.toJSON();
          y["$key"] = element.key;
          // if(y.month == null){
            this.itemList.push(y as Item);
          // }
        });
      });
    },5000);
  }


  onEdit(it: Item){
    this.itemsService.selectedItem = Object.assign({},it);
  }

  onDelete(key: string){
    if(confirm('Are you sure you want to delete this note?' + key) == true){
      this.itemsService.deleteItem(key);
    }
  }
}
