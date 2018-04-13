import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AfService } from '../providers/af.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ AfService ]
})
export class LoginComponent implements OnInit {


  constructor(public AfService: AfService, private router: Router) {
    this.AfService.user.subscribe(authState => {
       if(authState) {
         this.router.navigateByUrl('/home');
       }
     });
  }

  ngOnInit() {
  }

  login(){
    this.AfService.loginWithGoogle();
  }


}
