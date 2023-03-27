import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import Photo from 'src/app/models/photo.interface';

@Component({
  selector: 'app-photo-board',
  templateUrl: './photo-board.component.html',
  styleUrls: ['./photo-board.component.css']
})
export class PhotoBoardComponent implements OnChanges {

  
  @Input()
  public photos: Photo[] | null = [];

  public rows: Photo[][] = [];

  public ngOnChanges(changes: SimpleChanges): void {
    
    if (changes['photos']?.currentValue) {
      this.rows = this.groupColumns(changes['photos'].currentValue);
    };

  };

  private groupColumns(photos: Photo[]): Photo[][] {
    
    const STEP: number = 4;

    let rows: Photo[][] = [];

    for (let i = 0; i < photos.length; i += STEP) {

      rows.push(photos.slice(i, i + STEP));

    };
    
    return rows;
  };

};
