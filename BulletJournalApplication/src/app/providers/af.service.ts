import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';


@Injectable()
export class AfService {
  user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth, private router: Router) { this.user = afAuth.authState; }

  loginWithGoogle(){
    const provider = new firebase.auth.GoogleAuthProvider();
      provider.setCustomParameters({
      'login_hint': '@iacademy.edu.ph'
    });
    this.afAuth.auth.signInWithPopup(provider);
  }
  logout(){
    this.afAuth.auth.signOut();
    console.log("logged out");
    this.router.navigateByUrl('/');

  }

}
