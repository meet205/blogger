import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PazeNotFoundComponent } from './paze-not-found/paze-not-found.component';

const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: '**', component: PazeNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
