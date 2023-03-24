import { Directive, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[appActions]'
})
export class AppActionsDirective {

  @Output()
  public appActions: EventEmitter<Event> = new EventEmitter<Event>();

  constructor() { };

  @HostListener('click', ['$event'])
  public handlerClick(event: Event): void {
    this.appActions.emit(event);
  };

  @HostListener('keyup', ['$event'])
  public handlerKeyup(event: Event): void {
    this.appActions.emit(event);
  };

};
