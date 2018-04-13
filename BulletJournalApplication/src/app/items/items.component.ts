import { Component, OnInit } from '@angular/core';
import { ItemsService } from './shared/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
  providers: [ItemsService]
})
export class ItemsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
