import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryImagesComponent } from './pages/gallery-images/gallery-images.component';


const routes: Routes = [
  {
    path: '',
    component:GalleryImagesComponent
  }
] 

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class GalleryImagesRoutingModule { }
