import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../shared/items.service';
import { Item, Note, Event, Task } from '../shared/item.model';


@Component({
  selector: 'app-dailylog',
  templateUrl: './dailylog.component.html',
  styleUrls: ['./dailylog.component.scss']
})
export class DailylogComponent implements OnInit {

    itemList: Item[];
    itemList2: Task[];
    constructor(private itemsService: ItemsService) { }

    ngOnInit() {
      var x = this.itemsService.getData();
      x.snapshotChanges().subscribe(i => {
        this.itemList = [];
        i.forEach(element => {
          var y = element.payload.toJSON();
          y["$key"] = element.key;

          if(y.month != null && y.day != null){
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
