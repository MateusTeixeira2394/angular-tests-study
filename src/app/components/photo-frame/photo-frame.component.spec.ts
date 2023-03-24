import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { PhotoFrameComponent } from './photo-frame.component';
import { LikeWidgetComponent } from '../like-widget/like-widget.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe(PhotoFrameComponent.name, () => {
  let component: PhotoFrameComponent;
  let fixture: ComponentFixture<PhotoFrameComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [PhotoFrameComponent, LikeWidgetComponent],
      imports: [FontAwesomeModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PhotoFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('Should be created', () => {
    expect(component).toBeTruthy();
  });

  it(`${PhotoFrameComponent.prototype.like.name}() should trigger (@Output liked) once when it called multiple time within debounce time`, fakeAsync(() => {

    const clicks: number = 50;

    let times: number = 0;

    component.liked.subscribe(() => times++);

    for (let i = 0; i < clicks; i++) {
      component.like();
    };

    tick(500);

    expect(times).toBe(1);

  }));

  it(`${PhotoFrameComponent.prototype.like.name}() should trigger (@Output liked) twice when it called twice without the debounce time`, fakeAsync(() => {

    let times: number = 0;

    component.liked.subscribe(() => times++);

    component.like();
    tick(500);

    component.like();
    tick(500);

    expect(times).toBe(2);

  }));

  it(`Should display the number likes when the (@Input likes) is incremented`, () => {

    component.likes++;

    fixture.detectChanges();

    const element: HTMLElement = fixture.nativeElement.querySelector('.like-counter');

    expect(element.textContent?.trim()).toBe('1');

  });

  it(`(UI) Should show the image and the image description to the screen`, ()=>{

    const DESCRIPTION: string = 'Some description';
    const IMG_ADDRESS: string = 'https://somesite.com/img.jpg';

    component.photo = {
      url: IMG_ADDRESS,
      description: DESCRIPTION
    };

    fixture.detectChanges();

    const imgComponent: HTMLImageElement = fixture.nativeElement.querySelector('img');

    expect(imgComponent.getAttribute('src')).toBe(IMG_ADDRESS);
    expect(imgComponent.getAttribute('alt')).toBe(DESCRIPTION);

  });

});
