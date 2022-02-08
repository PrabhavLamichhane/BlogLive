import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {NgxPaginationModule} from 'ngx-pagination'

import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    NavigationComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxPaginationModule
  ],
  exports: [
    NavigationComponent,
    FooterComponent,
    NgxPaginationModule
  ]
})
export class SharedModule { }
