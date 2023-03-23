import { Component, Input, Output, EventEmitter } from '@angular/core';
import Photo from 'src/app/models/photo.interface';

@Component({
  selector: 'app-photo-frame',
  templateUrl: './photo-frame.component.html',
  styleUrls: ['./photo-frame.component.css'],
})
export class PhotoFrameComponent {
  @Input()
  public photo: Photo = {
    src: '',
    description: '',
  };

  @Input()
  public likes: number = 0;

  @Output()
  public liked: EventEmitter<void> = new EventEmitter<void>();

  constructor(){};

  public like(): void {
    this.liked.emit();
  };
};
