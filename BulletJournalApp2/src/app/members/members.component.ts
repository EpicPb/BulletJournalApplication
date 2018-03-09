import { Component, OnInit } from '@angular/core';
import { AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Router } from '@angular/router';
import { moveIn, fallIn, moveInLeft } from '../router.animations';
@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: {'[moveIn()]':''}
})
export class MembersComponent implements OnInit {


  name: any;
  state: string = '';

  constructor(public af:AngularFireAuth, private router: Router) {
    this.af.authState.subscribe(authState => {
      if(authState){
        this.name = authState;
      }
    })
  }

  logout(){
    this.af.auth.signOut();
    console.log('logged out');
    this.router.navigateByUrl('/login');
  }

  ngOnInit() {
  }

}
