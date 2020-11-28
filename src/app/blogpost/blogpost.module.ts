import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BlogpostFeaturedComponent} from './blogpost-featured/blogpost-featured.component';

import { BlogpostRoutingModule } from './blogpost-routing.module';

import { BlogpostDetailComponent } from './blogpost-detail/blogpost-detail.component';
import { BlogpostRecentComponent } from './blogpost-recent/blogpost-recent.component';
import { CategoriesComponent } from './categories/categories.component';



@NgModule({
  imports: [
    CommonModule,
    BlogpostRoutingModule
  ],
  exports: [
    BlogpostFeaturedComponent
  ],
  declarations: [ BlogpostFeaturedComponent, BlogpostDetailComponent, BlogpostRecentComponent, CategoriesComponent],
})
export class BlogpostModule { }
