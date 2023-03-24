import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { LikeWidgetComponent } from './like-widget.component';
import { AppActionsDirective } from '../../directives/app-actions.directive';

describe(LikeWidgetComponent.name, () => {

  let component: LikeWidgetComponent;
  let fixture: ComponentFixture<LikeWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LikeWidgetComponent, AppActionsDirective],
      imports: [FontAwesomeModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LikeWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should be created', () => {
    expect(component).toBeTruthy();
  });

  it(`Should auto-generate ID during ngOnInput when (@Input id) is not assigned`, () => {

    expect(component.id).toBeTruthy();

  });

  it(`Should NOT auto-generate ID during ngOnInput when (@Input id) is assigned`, () => {

    const id: string = 'some-id';

    component.id = id;

    expect(component.id)
      .withContext(`component id: ${component.id}`)
      .toBe(id);

  });

  it(`should trigger (@Output liked) when it is called`, () => {

    const spy: jasmine.Spy = spyOn(component.liked, "emit");

    component.like();

    expect(spy).toHaveBeenCalled();

  });

  it(`(UI) Should update the aria-label when the (@Input likes) is incremented`, () => {

    component.likes++;

    fixture.detectChanges();

    const element: HTMLElement = fixture.nativeElement.querySelector('span');

    expect(element.getAttribute('aria-label')).toBe('1' + component.ARIA_LABEL_TEXT);

  });

  it(`(UI) Should show the default text of aria-label`, () => {

    const element: HTMLElement = fixture.nativeElement.querySelector('span');

    expect(element.getAttribute('aria-label')).toBe('0' + component.ARIA_LABEL_TEXT);

  });

  it(`(UI) Should increment the likes number when it is clicked`, done => {

    component.liked.subscribe(() => {

      component.likes++;

      fixture.detectChanges();

      const counterElement: HTMLElement = fixture.nativeElement.querySelector('.like-counter');

      expect(counterElement.textContent?.trim()).toBe('1');

      done();

    });

    const likeWidgetEl: HTMLElement = fixture.nativeElement.querySelector('.like-widget-container');

    likeWidgetEl.click();

  });

  it(`(UI) Should increment the likes number when the Enter keyboard is pressed`, done => {

    component.liked.subscribe(() => {

      component.likes++;

      fixture.detectChanges();

      const counterElement: HTMLElement = fixture.nativeElement.querySelector('.like-counter');

      expect(counterElement.textContent?.trim()).toBe('1');

      done();

    });

    const event: KeyboardEvent = new KeyboardEvent('keyup', { key: 'Enter' });

    const likeWidgetEl: HTMLElement = fixture.nativeElement.querySelector('.like-widget-container');

    likeWidgetEl.dispatchEvent(event);

  });

});
