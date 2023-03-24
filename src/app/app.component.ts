import { Component, OnInit } from '@angular/core';
import Photo from './models/photo.interface';
import { PhotosService } from './services/photos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  public photos$!: Observable<Photo[]>;

  constructor(
    private photoService: PhotosService
  ){
    this.photos$ = this.photoService.getPhotos();
  }

  ngOnInit(): void {

    

  }

  public photo: Photo = {
    url:"https://picsum.photos/200/300",
    description: "Some photo description"
  }

  public likes: number = 0;

  public like(): void {
    this.likes++;
  }

}
