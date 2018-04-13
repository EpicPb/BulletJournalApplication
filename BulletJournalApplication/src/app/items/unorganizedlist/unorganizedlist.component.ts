import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../shared/items.service';
import { Item, Note, Event, Task } from '../shared/item.model';


@Component({
  selector: 'app-unorganizedlist',
  templateUrl: './unorganizedlist.component.html',
  styleUrls: ['./unorganizedlist.component.scss']
})
export class UnorganizedlistComponent implements OnInit {

  itemList: Item[];
  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    var x = this.itemsService.getData();
    x.snapshotChanges().subscribe(i => {
      this.itemList = [];
      i.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        if(y.month == null){
          this.itemList.push(y as Item);
        }
      });
    });
  }

  onEdit(it: Item){
    this.itemsService.selectedItem = Object.assign({},it);
  }

  onDelete(key: string){
    if(confirm('Are you sure you want to delete this note?') == true){
      this.itemsService.deleteItem(key);
    }
  }
}
