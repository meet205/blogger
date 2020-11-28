import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmspazeRoutingModule } from './cmspaze-routing.module';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { PazeComponent } from './paze/paze.component';


@NgModule({
  declarations: [ContactFormComponent, PazeComponent],
  imports: [
    CommonModule,
    CmspazeRoutingModule
  ]
})
export class CmspazeModule { }
