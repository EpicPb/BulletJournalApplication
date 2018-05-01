import { Component, OnInit } from '@angular/core';
import { AfService } from '../providers/af.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ItemsService } from '../items/shared/items.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ AfService ]

})
export class HomeComponent implements OnInit {
  photoURL: string;

  constructor(public AfService: AfService, private router: Router, private cookieService: CookieService) {
    console.log('load home component');

      this.AfService.user.subscribe(res => {
        if (res && res.uid) {
          console.log(res);
          this.photoURL = res.photoURL;
          console.log('user is logged in');
        } else {
          console.log('user not logged in');
          this.router.navigateByUrl('/');
        }
      });

   }
  ngOnInit() {
  }

}
