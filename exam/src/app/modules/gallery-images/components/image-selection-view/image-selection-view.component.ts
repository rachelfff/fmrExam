import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GalleryImagesService } from '../../services/gallery-images.service';
import { Image } from '../../models/image';
@Component({
  selector: 'image-selection-view',
  templateUrl: './image-selection-view.component.html',
  styleUrls: ['./image-selection-view.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush

})
export class ImageSelectionViewComponent {
  selectedImage = new Observable<Image | null>;

  constructor(private galleryImagesSrv:GalleryImagesService) {
    this.selectedImage = this.galleryImagesSrv.selectedImage$;
   }
}
