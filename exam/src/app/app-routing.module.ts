import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'' ,redirectTo:'gallery-images',pathMatch:'full'},
  {path:'**' ,redirectTo:'gallery-images',pathMatch:'full'},
  {path:'gallery-images' ,loadChildren :() => import('./modules/gallery-images/gallery-images.module').then(m => m.GalleryImagesModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
