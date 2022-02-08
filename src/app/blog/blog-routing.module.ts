import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';

const routes: Routes = [
  {
    path: '',
    component: BlogListComponent,
  },
  {
    path:'blogs/:id/:title',
    component:BlogDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
