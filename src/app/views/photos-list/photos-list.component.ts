import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import Photo from 'src/app/models/photo.interface';
import { PhotosService } from 'src/app/services/photos.service';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css']
})
export class PhotosListComponent {

  public photos$!: Observable<Photo[]>;

  constructor(
    private photoService: PhotosService
  ){
    this.photos$ = this.photoService.getPhotos();
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
