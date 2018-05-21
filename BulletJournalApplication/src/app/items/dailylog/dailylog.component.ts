import { Component, OnInit, Inject } from '@angular/core';
import { ItemsService } from '../shared/items.service';
import { Item, Note, Evont, Task } from '../shared/item.model';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-dailylog',
  templateUrl: './dailylog.component.html',
  styleUrls: ['./dailylog.component.scss'],
  providers: [ ]

})
export class DailylogComponent implements OnInit {

    itemList: Item[];
    itemList2: Task[];
    constructor(private itemsService: ItemsService) { }

    ngOnInit() {
      setTimeout(() => {
        console.log('getdata');
      var x = this.itemsService.getData();
      x.snapshotChanges().subscribe(i => {
        this.itemList = [];
        i.forEach(element => {
          var y = element.payload.toJSON();
          y["$key"] = element.key;
          console.log('object: ');
          console.log(y);
          // if(y.month != null && y.day != null){
            this.itemList.push(y as Task);
          // }

        });
      });
    },4000);
    }

    onEdit(it: Task){
      this.itemsService.selectedItem = Object.assign({},it);
    }

    onDelete(key: string){
      if(confirm('Are you sure you want to delete this note?') == true){
        this.itemsService.deleteItem(key);
      }
    }
  //
  //   openDialog(): void {
  //   let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
  //     width: '250px',
  //     data: { }
  //   });
  //
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //
  //   });
  // }
}

// @Component({
//   selector: 'dialog-overview-example-dialog',
//   templateUrl: 'dailylogdialog.html',
// })
// export class DialogOverviewExampleDialog {
//
//   constructor(
//     public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
//     @Inject(MAT_DIALOG_DATA) public data: any) { }
//
//   onNoClick(): void {
//     this.dialogRef.close();
//   }
//
// }
