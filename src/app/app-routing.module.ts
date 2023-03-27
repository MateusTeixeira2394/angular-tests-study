import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotosListComponent } from './views/photos-list/photos-list.component';

const routes: Routes = [
  {
    path: 'photos',
    component: PhotosListComponent
  },
  {
    path: '**',
    redirectTo: 'photos'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
