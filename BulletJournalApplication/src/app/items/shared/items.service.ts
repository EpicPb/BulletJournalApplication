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
  list: Task[];
  selectedItem: Task = new Task();
  userId: string;



  constructor(private AfService: AfService , private firebase: AngularFireDatabase, private afAuth: AngularFireAuth) {
    // console.log('initialize item service1: ' + this.userId);

    this.AfService.user.subscribe(user => {
          if(user) this.userId = user.uid;
          // console.log('initialize item service2: ' + this.userId);


        })

   }
   getData2() {
     if (!this.userId) return;
         // this.itemList = this.firebase.list('items/' +  this.userId + '/');
        this.itemList = this.firebase.list('Notes/' +  this.userId + '/');

         this.itemList.snapshotChanges().subscribe(i => {
           this.list = [];
           i.forEach(element => {
             var y = element.payload.toJSON();
             y["$key"] = element.key;
               this.list.push(y as Task);
               console.log(y);
           });
         });
   }

    getData() {
      if (!this.userId) return;
          // console.log("getData " + this.userId);
          // this.itemList = this.firebase.list('items/' +  this.userId + '/');
          this.itemList = this.firebase.list('Notes/' +  this.userId + '/');

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
        note: note.note,
      });
    }

    updateNote(note: Note){
      this.itemList.update(note.$key,
      {
        title: note.title,
        note: note.note,
      });
    }

    deleteNote($key: string){
      this.itemList.remove($key);
    }

    // Event extends Note


    // insertEvent(event: Evont){
    //   var d = new Date();
    //   this.itemList.push({
    //     title: event.title,
    //     day: event.day,
    //     description: event.description,
    //     month: event.month,
    //     year:event.year,
    //   });
    // }
    //
    // updateEvent(event: Evont){
    //   console.log("did it make it to the update?");
    //   console.log(event);
    //   this.itemList.update(event.$key,
    //   {
    //     title: event.title,
    //     day: event.day,
    //     description: event.description,
    //     month: event.month,
    //     year:event.year,
    //   });
    // }
    //
    // deleteEvent($key: string){
    //   this.itemList.remove($key);
    // }

    insertTask(task: Task){
      // var d = new Date();
      console.log('insert task');
      this.itemList.push({
        title: task.title,
        day: '0',
        note: task.note,
        month: '0',
        year: '0',
        priority: 'High'
      });
    }

    updateTask(task: Task){
      console.log("did it make it to the update?");
      console.log(task);
      this.itemList.update(task.$key,
      {
        title: task.title,
        day: '0',
        note: '0',
        month: task.month,
        year: '0',
        priority: 'High'
      });
    }
}
