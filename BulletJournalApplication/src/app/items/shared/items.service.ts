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

    // Note extends Item


    insertNote(note: Note){
      var d = new Date();
      this.itemList.push({
        title: note.title,
        description: note.description,
      });
    }

    updateNote(note: Note){
      this.itemList.update(item.$key,
      {
        title: note.title,
        description: note.description,
      });
    }

    deleteNote($key: string){
      this.itemList.remove($key);
    }

    // Event extends Note


    insertEvent(event: Evont){
      var d = new Date();
      this.itemList.push({
        title: event.title,
        day: event.day,
        description: event.description,
        month: event.month,
        week:event.week,
      });
    }

    updateEvent(event: Evont){
      console.log("did it make it to the update?");
      console.log(event);
      this.itemList.update(event.$key,
      {
        title: event.title,
        day: event.day,
        description: event.description,
        month: event.month,
        week:event.week,
      });
    }

    deleteEvent($key: string){
      this.itemList.remove($key);
    }
}
