import { Component, OnInit } from '@angular/core';
import { AfService } from '../providers/af.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ AfService ]

})
export class HomeComponent implements OnInit {

  constructor(public AfService: AfService, private router: Router) {
    if(this.AfService.user == null){
      this.router.navigateByUrl('/login');
    }
   }

  ngOnInit() {
  }

}
