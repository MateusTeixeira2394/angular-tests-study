import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import Photo from '../models/photo.interface';
import IPhotoService from '../models/photosService.interface';

@Injectable({
  providedIn: 'root'
})
export class PhotosService implements IPhotoService{

  private readonly SERVER_URL: string = 'http://localhost:3000/photos';

  constructor(
    private http: HttpClient
  ) { }

  public getPhotos(): Observable<Photo[]> {
    return this.http
    .get<Photo[]>(this.SERVER_URL)
    .pipe(delay(1000));
  };
  
}
