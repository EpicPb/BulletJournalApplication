import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AfService } from '../providers/af.service';
import { ClassroomService } from '../providers/classroom.service';
import { ItemsService } from '../items/shared/items.service';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [ AfService, ItemsService, ClassroomService ],
})
export class CoreModule {
  // constructor(core:CoreModule){
  //   if(core){
  //     throw new Error('Do not run');
  //   }



 }
