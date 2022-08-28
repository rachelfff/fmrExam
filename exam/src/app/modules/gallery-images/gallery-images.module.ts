import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagesScrollerComponent } from './components/images-scroller/images-scroller.component';
import { GalleryImagesComponent } from './pages/gallery-images/gallery-images.component';
import { GalleryImagesRoutingModule } from './gallery-images-routing.module';
import { GalleryImagesService } from './services/gallery-images.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ImageSelectionViewComponent } from './components/image-selection-view/image-selection-view.component';
import { ImageSelectionDetailsComponent } from './components/image-selection-details/image-selection-details.component';



@NgModule({
  declarations: [
    ImagesScrollerComponent,
    GalleryImagesComponent,
    ImageSelectionViewComponent,
    ImageSelectionDetailsComponent
  ],
  entryComponents: [ImagesScrollerComponent],
  imports: [
    CommonModule,
    SharedModule,
    GalleryImagesRoutingModule
  ],
  providers:[GalleryImagesService]
})
export class GalleryImagesModule { }
