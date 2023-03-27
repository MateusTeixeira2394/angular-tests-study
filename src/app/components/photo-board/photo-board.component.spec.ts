import { ComponentFixture, TestBed } from '@angular/core/testing';
import Photo from 'src/app/models/photo.interface';

import { PhotoBoardComponent } from './photo-board.component';
import { PhotoFrameComponent } from '../photo-frame/photo-frame.component';
import { SimpleChange, SimpleChanges } from '@angular/core';

function getMockPhotos(): Photo[] {

  let photos: Photo[] = [];

  const SIZE: number = 7;

  for (let i = 0; i < SIZE; i++) {

    photos.push({ id: i + 1, description: '', url: '' });

  };

  return photos;

};

describe(PhotoBoardComponent.name, () => {

  let component: PhotoBoardComponent;
  let fixture: ComponentFixture<PhotoBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotoBoardComponent, PhotoFrameComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PhotoBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should be created', () => {
    expect(component).toBeTruthy();
  });

  it('(UI) Should displays rows and columns when (@Input photos) has value', () => {

    component.photos = getMockPhotos();

    fixture.detectChanges();

    const changes: SimpleChanges = {
      photos: new SimpleChange([],component.photos,true)
    }

    component.ngOnChanges(changes);

    expect(component.rows.length)
    .withContext('The number of rows')
    .toBe(2);

    expect(component.rows[0].length)
    .withContext('The number of columns of the first row')
    .toBe(4);

    expect(component.rows[1].length)
    .withContext('The number of columns of the second row')
    .toBe(3);

  });

});
