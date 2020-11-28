import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PazeComponent } from './paze/paze.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

const routes: Routes = [
  {path: 'paze/:slug', component: PazeComponent},
  {path: 'contact', component: ContactFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmspazeRoutingModule { }
