import { Component } from '@angular/core';
import { AppActionsDirective } from './app-actions.directive';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  template: `<div class="dummy" (appActions)="actionHandler($event)"></div>`
})
class DummyComponent {

  private event!: Event;

  public actionHandler(event: Event): void {
    this.event = event;
  }

  public hasEvent(): boolean {
    return !!this.event;
  }

}

describe(AppActionsDirective.name, () => {

  let component: DummyComponent;
  let fixture: ComponentFixture<DummyComponent>;
  let directive!: AppActionsDirective;

  beforeEach(async () => {

    directive = new AppActionsDirective();

    await TestBed.configureTestingModule({
      declarations: [DummyComponent, AppActionsDirective]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DummyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  // It was used two ways to get the html element. One by class and another
  // by element who is using the current directive.

  // Way one: Get by class
  it('(UI) Should emit event with payload when the Enter key is pressed', () => {

    const divEl: HTMLElement = fixture.nativeElement.querySelector('.dummy');

    const event: KeyboardEvent = new KeyboardEvent('keyup', { key: 'Enter' });

    divEl.dispatchEvent(event);

    expect(component.hasEvent()).toBe(true);

  });

  // Way two: Get by directive
  it('(UI) Should emit event with payload when the element is clicked', () => {

    const divEl: HTMLElement = fixture.debugElement.query(By.directive(AppActionsDirective)).nativeElement;

    divEl.click();

    expect(component.hasEvent()).toBe(true);

  });

});

