import { Injectable } from '@angular/core';

import { Item, Note, Evont, Task } from './item.model';

import { AngularFireAuth } from 'angularfire2/auth';

import { AngularFireDatabase, AngularFireList  } from 'angularfire2/database';

import { AfService } from '../../providers/af.service';
import { DatePipe } from '@angular/common';

@Injectable()
export class ItemsService {
  itemList: AngularFireList<any>;
  // itemList: FirebaseListObservable<any[]> = null;
  list: Item[];
  selectedItem: Item = new Item();
  userId: string;



  constructor(private AfService: AfService , private firebase: AngularFireDatabase, private afAuth: AngularFireAuth) {
    // console.log('initialize item service1: ' + this.userId);

    this.AfService.user.subscribe(user => {
          if(user) this.userId = user.uid;
          // console.log('initialize item service2: ' + this.userId);


        })



    // this.afAuth.user.subscribe(res => {
    //   responseAfterSuccess => {
    //     if(user) this.userId = user.uid;
    //     console.log('initialize item service: ' + this.userId);
    //   }
    //   responseAfterError => {
    //     console.log('error');
    //   }
    //
    // })
   }
   getData2() {
     if (!this.userId) return;
         this.itemList = this.firebase.list('items/' +  this.userId + '/');
         this.itemList.snapshotChanges().subscribe(i => {
           this.list = [];
           i.forEach(element => {
             var y = element.payload.toJSON();
             y["$key"] = element.key;
               this.list.push(y as Item);
               console.log(y);
           });
         });
   }

    getData() {
      if (!this.userId) return;
          console.log("getData " + this.userId);
          this.itemList = this.firebase.list('items/' +  this.userId + '/');
          return this.itemList;
    }
    insertItem(item: Item){
      var d = Date.now();
      this.itemList.push({
        title: item.title,
        datetime: d
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
      this.itemList.update(note.$key,
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
