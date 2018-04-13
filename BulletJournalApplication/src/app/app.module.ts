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

import { environment } from '../environments/environment'

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AngularFireAuthModule } from 'angularfire2/auth';

import { FormsModule } from '@angular/forms';
import { ItemComponent } from './items/item/item.component';
import { MaterialModule } from './material.module';
import { LoginComponent } from './login/login.component';

import { AfService } from './providers/af.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    MaterialModule,
    AngularFireAuthModule,
    BrowserAnimationsModule
  ],
  providers: [ AfService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
