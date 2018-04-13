import { Injectable } from '@angular/core';

import { Item, Note, Event, Task } from './item.model';

import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';

@Injectable()
export class ItemsService {
  itemList: AngularFireList<any>;
  selectedItem: Item = new Item();



  constructor(private firebase: AngularFireDatabase) { }

    getData(){
      this.itemList = this.firebase.list('items');
      return this.itemList;
    }
    insertItem(item: Item){
      var d = new Date();
      this.itemList.push({
        title: item.title
      });
    }

    updateItem(item: Item){
      this.itemList.update(item.$key,
      {
        title: item.title
      });
    }

    deleteItem($key: string){
      this.itemList.remove($key);
    }
}
