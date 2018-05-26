import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
// import { CookieService } from 'ngx-cookie-service';
// import { JwtHelperService } from '@auth0/angular-jwt'
// import { CanActivate, Router } from '@angular/router';


// import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn:'root'
})
export class AfService {
  static user: Observable<firebase.User>;
  static GoogleAccessToken: string;
  // static AfService:AfService;

  constructor(public afAuth: AngularFireAuth, private router: Router) {
    this.user = afAuth.authState;
    // this.user = afAuth.authState;
    console.log('Afservice initialized');
    console.log(this.user);
    console.log(afAuth);

    // this.GoogleAccessToken = this.user.credential.accessToken;
    // console.log(this.GoogleAccessToken);


  }

  loginWithGoogle(){
    const provider = new firebase.auth.GoogleAuthProvider();
      provider.setCustomParameters({
      'login_hint': '@iacademy.edu.ph',
       'prompt': 'select_account'
    });
      // this.afAuth.auth.signInWithPopup(provider);
      this.afAuth.auth.signInWithPopup(provider).then(function(result){
        this.GoogleAccessToken = result.credential.accessToken;
      });


  }
  logout(){
    this.afAuth.auth.signOut();
    console.log("logged out");
    this.router.navigateByUrl('/');


  }



}
