import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { CalendarModule } from 'angular-calendar';
import { ItemsService } from '../shared/items.service';
import { Item, Note, Evont, Task } from '../shared/item.model';
import { AngularFireList  } from 'angularfire2/database';


@Component({
  selector: 'app-futurelog',
  templateUrl: './futurelog.component.html',
  styleUrls: ['./futurelog.component.scss']
})
export class FuturelogComponent implements OnInit {

  daysofweek = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  // months = ['01', '02','03','04','05','06','07','08','09','10','11','12'];
  months = ['January', 'February','March','April','May','June','July','August','September','October','November','December'];
  //
  //
  today = Date.now();
  pipe = new DatePipe('en-US'); // Use your own locale
  //
  month = this.pipe.transform(this.today, 'MMMM');
  monthindex = this.months.indexOf(this.month);

  months2 = this.months.slice(this.monthindex);


  itemList: Task[];

  x: AngularFireList<any>;

  constructor(private itemsService: ItemsService) {

  }

  ngOnInit() {
    var x = this.itemsService.getData();
    setTimeout(() => {
      // console.log('getdata');
      this.x = this.itemsService.getData();
      this.x.snapshotChanges().subscribe(i => {
        this.itemList = [];
        i.forEach(element => {
          var y = element.payload.toJSON();
          y["$key"] = element.key;
          // console.log(y);
          // console.log(y["month"]);
          if(y["month"] != "0"){
            this.itemList.push(y as Task);
            // console.log("taskdfkskfaksdf");
          }
        });
      });
    },5000);
  }

  dropOverActive: boolean = false;

  months1 = { 'January' : false,
             'February' : false,
             'March' : false,
             'April' : false,
             'May' : false,
             'June' : false,
             'July' : false,
             'August' : false,
             'September' : false,
             'October' : false,
             'November' : false,
             'December' : false
           };

 droppedData: string = '';
 splitData: string [];
 task: Task;

 onDrop({dropData}: {dropData: any}, mon: any): void {
   this.dropOverActive = false;
   this.months1[mon] = false;
   // console.log(dropData);
   this.droppedData =  dropData.toString();
   this.splitData = this.droppedData.split(",");

   console.log(dropData);


   this.task = { '$key': this.splitData[0],
             'title': this.splitData[1],
             // 'datetime': this.splitData[2],
             'day': '',
             'note': '',
             'month': mon,
             'year': '',
             'priority': 'high',
             'tags': []
           };


   this.itemsService.updateTask(this.task);

   // console.log(mon);
   // console.log(this.droppedData);
   // setTimeout(() => {
     this.droppedData = '';
   // }, 100);
 }

 onEnter({ dropData }: { dropData: any}, mon: any): void {
   this.months1[mon] = true;
   // console.log(mon);

   // console.log(dropData.length);
   // this.dropOverActive = true;

   // console.log(this.months1[mon])
 }

 onLeave({ dropData }: { dropData: any}, mon: any): void {
   this.months1[mon] = false;
   // this.dropOverActive = false;

   // console.log(this.months1[mon])
 }

}


// $variable = mktime(0,0,1,$month,1,2017);
//   $unixdate = unixtojd($variable);
//   $today1 = cal_from_jd($unixdate, CAL_GREGORIAN);
//   // foreach ($today1 as $key => $value) {
//   //   echo "$key => $value <br>";
//   // }
//   $daysofweek = array ('Sun','Mon','Tue','Wed','Thu','Fri','Sat');
//   $daysinmonth1 = cal_days_in_month(CAL_GREGORIAN, $today1['month'],$today1['year']);
//
//   echo "<table>";
//   echo "<tr><th class='heading'colspan='7'>" .$today1['monthname']. "-". $today1['year'] ."</th></tr>";
//   echo "<tr>";
//   foreach ($daysofweek as $value) {
//     echo "<th>$value</th>";
//   }
//   echo "</tr>";
//   $j = $today1['day'];
//     while($j-7 > 0){
//       $j-=7;
//       echo $j;
//     }
//   $k = $today1['dow']+1-$j;
//   echo "<tr>";
//   for ($i=1 - $k; $i <= $daysinmonth1 ; $i++) {
//     if($i<=0){
//       echo "<td></td>";
//       continue;
//     }  echo "<td>$i</td>";
//       if($k!=0){
//         if((7-$k) == ($i+7)%7){
//           echo "</tr>";
//         }
//       }else{
//         if($i%7==0){
//           echo "</tr>";
//         }
//       }
//
//   }
// }
