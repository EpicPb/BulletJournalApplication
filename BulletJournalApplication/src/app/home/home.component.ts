import { Component, OnInit } from '@angular/core';
import { AfService } from '../providers/af.service';
import { Router, ActivatedRoute } from '@angular/router';
// import { CookieService } from 'ngx-cookie-service';
// import { ItemsService } from '../items/shared/items.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ClassroomService } from '../providers/classroom.service';

@Component({
  selector: 'app-home',
  templateUrl: './homeUI.component.html',
  styleUrls: ['./home.component.scss'],
  // providers: [ AfService ]

})
export class HomeComponent implements OnInit {
  photoURL: string;
  options: FormGroup;
  // classroom: ClassroomService;


  constructor(public AfService: AfService, private router: Router, private route: ActivatedRoute,
              private fb: FormBuilder, private classroom:ClassroomService ) {
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

      console.log(this.AfService.user);

      // this.classroom = new ClassroomService();
      // console.log("classroom service");
      // console.log(this.classroomService.getData());
      // this.classroom.getCourseList();
      // this.listCourses();
   }
  ngOnInit() {
  }

  showNotes(){
    this.router.navigate([''], {relativeTo: this.route});
  }
  showCalendar(){
    this.router.navigate(['calendar'], {relativeTo: this.route});
  }

  // listCourses() {
  //       gapi.client.classroom.courses.list({
  //         pageSize: 10
  //       }).then(function(response) {
  //         var courses = response.result.courses;
  //         console.log('Courses:');
  //
  //         if (courses.length > 0) {
  //           for (i = 0; i < courses.length; i++) {
  //             var course = courses[i];
  //             console.log(course.name)
  //           }
  //         } else {
  //           console.log('No courses found.');
  //         }
  //       });
  //     }
}
