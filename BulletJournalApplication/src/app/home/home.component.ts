import { Component, OnInit } from '@angular/core';
import { AfService } from '../providers/af.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ItemsService } from '../items/shared/items.service';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './homeUI.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ AfService ]

})
export class HomeComponent implements OnInit {
  photoURL: string;
  options: FormGroup;


  constructor(public AfService: AfService, private router: Router, private route: ActivatedRoute, private cookieService: CookieService, private fb: FormBuilder) {
    this.options = fb.group({
      'fixed': false,
      'top': 0,
      'bottom': 0,
    });

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

  showNotes(){
    this.router.navigate([''], {relativeTo: this.route});
  }
  showCalendar(){
    this.router.navigate(['calendar'], {relativeTo: this.route});
  }
}
