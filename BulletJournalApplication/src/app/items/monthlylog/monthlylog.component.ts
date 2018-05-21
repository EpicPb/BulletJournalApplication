import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-monthlylog',
  templateUrl: './monthlylog.component.html',
  styleUrls: ['./monthlylog.component.scss']
})
export class MonthlylogComponent implements OnInit {

  today = Date.now();
  pipe = new DatePipe('en-US'); // Use your own locale
  // nums = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23"];

  constructor() { }

  ngOnInit() {
  }

}
