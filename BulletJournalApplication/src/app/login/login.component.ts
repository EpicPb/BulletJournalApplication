import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AfService } from '../providers/af.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ AfService ]
})
export class LoginComponent implements OnInit {
  cookieValue = 'UNKNOWN';


  constructor(public AfService: AfService, private router: Router) {
    console.log('load login component');
    this.AfService.user.subscribe(authState => {
       if(authState) {
         this.router.navigateByUrl('/home');
       }
     });
  }

  ngOnInit() {
    console.log(this.AfService.user)
   }

  login(){
    this.AfService.loginWithGoogle();
  }


}
