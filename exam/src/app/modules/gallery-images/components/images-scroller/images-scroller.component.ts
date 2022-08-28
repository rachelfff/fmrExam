import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, OnDestroy, OnInit } from '@angular/core';
import { GalleryImagesService } from '../../services/gallery-images.service';
import {Image} from '../../models/image';
import { Subscription } from 'rxjs';

@Component({
  selector: 'images-scroller',
  templateUrl: './images-scroller.component.html',
  styleUrls: ['./images-scroller.component.scss']
})
export class ImagesScrollerComponent implements OnInit ,OnDestroy{

  imagesList: Image[] =[];
  subscription = new Subscription;
  constructor(private galleryImagesSrv:GalleryImagesService) { }

  ngOnInit(): void {
  this.subscription = this.galleryImagesSrv.getImagesList().subscribe(imagesList =>{
  this.imagesList =imagesList;
  this.galleryImagesSrv.selectImage(this.imagesList[0]);
});
  }

  selectImg(img:any){
   this.galleryImagesSrv.selectImage(img);
  }

  ngOnDestroy(){
  this.subscription.unsubscribe();
  }
}
