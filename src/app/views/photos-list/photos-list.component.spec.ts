import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosListComponent } from './photos-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PhotoBoardComponent } from '../../components/photo-board/photo-board.component';

describe(PhotosListComponent.name, () => {
  let component: PhotosListComponent;
  let fixture: ComponentFixture<PhotosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        PhotosListComponent,
        PhotoBoardComponent 
      ],
      imports:[
        HttpClientModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`it should increment the likes whenever the method ${PhotosListComponent.prototype.like.name} is called`, ()=>{

    const times: number = 50;

    for (let i = 0; i < times; i++) {
      component.like();
    };

    expect(component.likes).toBe(50);

  });

});
