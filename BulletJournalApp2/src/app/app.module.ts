import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ItemsComponent } from './items/items.component';
import { FuturelogComponent } from './items/futurelog/futurelog.component';
import { MonthlylogComponent } from './items/monthlylog/monthlylog.component';
import { DailylogComponent } from './items/dailylog/dailylog.component';
import { UnorganizedlistComponent } from './items/unorganizedlist/unorganizedlist.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';

import { AuthGuard } from './auth.service';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ItemsComponent,
    FuturelogComponent,
    MonthlylogComponent,
    DailylogComponent,
    UnorganizedlistComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    HttpModule,
    routes
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
