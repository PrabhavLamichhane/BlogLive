import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogRoutingModule } from './blog-routing.module';
import { SharedModule } from './../shared/shared.module';
import { KebabcasePipe } from './../shared/pipes/kebabcase.pipe';

@NgModule({
  declarations: [
    BlogListComponent,
    BlogDetailsComponent,

    KebabcasePipe
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,

    SharedModule
  ]
})
export class BlogModule { }
