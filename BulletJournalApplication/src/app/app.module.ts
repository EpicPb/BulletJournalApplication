import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { UnorganizedlistComponent } from './items/unorganizedlist/unorganizedlist.component';
import { FuturelogComponent } from './items/futurelog/futurelog.component';
import { MonthlylogComponent } from './items/monthlylog/monthlylog.component';
import { DailylogComponent } from './items/dailylog/dailylog.component';
import { HomeComponent } from './home/home.component';
import {ModalModule} from "ng2-modal";


import { environment } from '../environments/environment'

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AngularFireAuthModule } from 'angularfire2/auth';

// import { FormGroup, FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { ItemComponent } from './items/item/item.component';
import { MaterialModule } from './material.module';
import { LoginComponent } from './login/login.component';

// import { AfService } from './providers/af.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';

import { DragAndDropModule } from 'angular-draggable-droppable';

// import { CookieService } from 'ngx-cookie-service';
import { HttpModule } from '@angular/http';

// import { ItemsService } from './items/shared/items.service';
import { LoadingSpinnerComponent } from './ui/loading-spinner/loading-spinner.component';

// import { CalenderComponent } from './calender/calender.component';
// import { HeaderComponent } from './calender/header/header.component';
// import { ListComponent } from './calender/list/list.component';
// import { MonthviewComponent } from './calender/monthview/monthview.component';
// import { EmptydateComponent } from './calender/monthview/emptydate/emptydate.component';
// import { MonthdateComponent } from './calender/monthview/monthdate/monthdate.component';

// import { AuthService } from './auth.service';
// import {ListdataService } from './listdata.service';
// import {HttpService} from './http.service';

// import{ ClassroomService } from './providers/classroom.service';
import { CoreModule } from './core/core.module';



@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    UnorganizedlistComponent,
    FuturelogComponent,
    MonthlylogComponent,
    DailylogComponent,
    HomeComponent,
    ItemComponent,
    LoginComponent,
    LoadingSpinnerComponent,
    // CalenderComponent,
    // HeaderComponent,
    // ListComponent,
    // MonthviewComponent,
    // EmptydateComponent,
    // MonthdateComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    MaterialModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    // CalendarModule.forRoot(),
    DragAndDropModule.forRoot(),
    HttpModule,
    ModalModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CoreModule,




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
