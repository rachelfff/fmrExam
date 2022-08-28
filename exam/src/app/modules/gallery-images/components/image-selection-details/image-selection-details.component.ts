import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Image } from '../../models/image';
import { GalleryImagesService } from '../../services/gallery-images.service';

@Component({
  selector: 'image-selection-details',
  templateUrl: './image-selection-details.component.html',
  styleUrls: ['./image-selection-details.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ImageSelectionDetailsComponent {
  selectedImage = new Observable<Image | null>;
  constructor(private galleryImagesSrv:GalleryImagesService) {
    this.selectedImage = this.galleryImagesSrv.selectedImage$;
   }


}
