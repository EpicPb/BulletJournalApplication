import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { AfService } from './af.service';
import { AngularFireAuth } from 'angularfire2/auth';


@Injectable()
export class ClassroomService {
  private apiURL = "https://classroom.googleapis.com/v1/courses"
  data: any = {}
  token: string;


  constructor(private http: Http, private afAuth: AngularFireAuth, private AfService: AfService) {
    console.log("classroom");
    console.log(AfService["GoogleAccessToken"]);
    console.log(JSON.parse(JSON.stringify(this.afAuth.auth.currentUser)));
    console.log("token: " + JSON.parse(JSON.stringify(this.afAuth.auth.currentUser)).stsTokenManager.accessToken);
    this.token = JSON.parse(JSON.stringify(this.afAuth.auth.currentUser)).stsTokenManager.accessToken;

    console.log("con token: " + this.token);
    // console.log(this.AfService.GoogleAccessToken);
    //
    //
    // console.log(this.getData());
    this.getCourseList();

  }

  getData(){
    let headers = new Headers();
    // this.token = JSON.parse(JSON.stringify(this.afAuth.auth.currentUser)).stsTokenManager.accessToken;
    console.log("get token");
    //
    console.log(this.token);
    //
    // console.log(this.AfService.GoogleAccessToken);

    headers.append('Authorization', "Bearer " + this.token);
    let opts = new RequestOptions();
    opts.headers = headers;
    console.log("opts");
    console.log(opts);

    // let req = new HttpRequest();
    // req.

    return this.http.get(this.apiURL, opts).map((res:Response) => res.json())
  }

  getCourseList(){
    this.getData().subscribe(data => {
      console.log(data);
      this.data = data;
    })
  }
}
