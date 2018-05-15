import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CalenderComponent } from './calender/calender.component';
import { ItemsComponent } from './items/items.component';

const routes: Routes = [
   {
     path: '',
     component: LoginComponent
   },
   {
     path: 'home',
     component: HomeComponent,
     children: [
         {
           path: 'calendar',
           component: CalenderComponent,
           // outlet: 'sidenav-outlet',
         },
         {
           path: '',
           component: ItemsComponent,
           // outlet: 'sidenav-outlet'
         }
     ]
   }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, HomeComponent, CalenderComponent, ItemsComponent]
