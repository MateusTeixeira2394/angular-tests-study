import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Photo from '../models/photo.interface';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  private readonly SERVER_URL: string = 'http://localhost:3000/photos';

  constructor(
    private http: HttpClient
  ) { }

  public getPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>(this.SERVER_URL);
  };
  
}
