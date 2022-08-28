import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from "rxjs";
import {Image} from '../models/image'

@Injectable()
export class GalleryImagesService {
     selectedImage :BehaviorSubject<Image | null> = new BehaviorSubject<Image | null>(null);
     selectedImage$ = this.selectedImage.asObservable();
     
constructor(private http: HttpClient){}

 getImagesList() : Observable<Image[]>{
    const url = 'https://picsum.photos/v2/list';
    return this.http.get<Image[]>(url);
 }

 selectImage(imgSelected:any){
    this.selectedImage.next(imgSelected);
 }
}