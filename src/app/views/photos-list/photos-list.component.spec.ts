import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosListComponent } from './photos-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PhotoBoardComponent } from '../../components/photo-board/photo-board.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PhotosService } from 'src/app/services/photos.service';
import Photo from 'src/app/models/photo.interface';
import getMockPhotos from '../../utils/tests/getMockPhotos';
import { Observable, of } from 'rxjs';
import { PhotoFrameComponent } from '../../components/photo-frame/photo-frame.component';
import { LikeWidgetComponent } from '../../components/like-widget/like-widget.component';
import IPhotoService from '../../models/photosService.interface';

describe(PhotosListComponent.name, () => {

  let component: PhotosListComponent;
  let fixture: ComponentFixture<PhotosListComponent>;
  let photoServiceStub: IPhotoService;

  beforeEach(async () => {

    photoServiceStub = {
      getPhotos(): Observable<Photo[]> {
        return of(getMockPhotos(8))
      }
    }

    await TestBed.configureTestingModule({
      declarations: [
        PhotosListComponent,
        PhotoBoardComponent,
        PhotoFrameComponent,
        LikeWidgetComponent
      ],
      imports: [
        HttpClientModule,
        FontAwesomeModule
      ],
      providers: [{provide: PhotosService, useValue: photoServiceStub}]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PhotosListComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`it should increment the likes whenever the method ${PhotosListComponent.prototype.like.name} is called`, () => {

    const times: number = 50;

    for (let i = 0; i < times; i++) {
      component.like();
    };

    expect(component.likes).toBe(50);

  });

  it('(UI) Should display board when data arrives', () => {

    const boardComp: HTMLElement = fixture.nativeElement.querySelector('.photo-board-container');
    const loaderComp: HTMLElement = fixture.nativeElement.querySelector('.loader');

    expect(boardComp).not.toBeNull();
    expect(loaderComp).toBeNull();

  });

  it('(UI) Should display board with 2 list of photos', () => {

    const boardComp: HTMLElement = fixture.nativeElement.querySelector('.photo-board-container');

    expect(boardComp.children.length).toBe(2);

  });

});
