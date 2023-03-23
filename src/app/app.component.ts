import { Component } from '@angular/core';
import Photo from './models/photo.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public photo: Photo = {
    src:"https://picsum.photos/200/300",
    description: "Some photo description"
  }

  public likes: number = 0;

  public like(): void {
    this.likes++;
  }

}
