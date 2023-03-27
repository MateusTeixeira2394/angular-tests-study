import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import {LikeWidgetComponent} from './components/like-widget/like-widget.component'
import { PhotoFrameComponent } from './components/photo-frame/photo-frame.component';
import { HttpClientModule } from '@angular/common/http';
import { PhotoBoardComponent } from './components/photo-board/photo-board.component';

describe(`${AppComponent.name}`, () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FontAwesomeModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent,
        LikeWidgetComponent,
        PhotoFrameComponent,
        PhotoBoardComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('Should be the created', () => {
    expect(component).toBeTruthy();
  });

});
