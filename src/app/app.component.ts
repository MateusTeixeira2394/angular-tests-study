import { Component, OnInit } from '@angular/core';
import Photo from './models/photo.interface';
import { PhotosService } from './services/photos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
