import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { GalleryImagesService } from '../../services/gallery-images.service';
import {Image} from '../../models/image';

@Component({
  selector: 'images-scroller',
  templateUrl: './images-scroller.component.html',
  styleUrls: ['./images-scroller.component.scss']
})
export class ImagesScrollerComponent implements OnInit{
  imagesList = new Observable<Image[]>;
  
  constructor(private galleryImagesSrv:GalleryImagesService) { }
  ngOnInit(): void {
  this.imagesList = this.galleryImagesSrv.getImagesList();
  }

  selectImg(img:any){
   this.galleryImagesSrv.selectImage(img);
  }
}
