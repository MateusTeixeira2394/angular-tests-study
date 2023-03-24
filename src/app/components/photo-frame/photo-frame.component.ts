import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { debounceTime, Subject, takeUntil } from 'rxjs';
import Photo from 'src/app/models/photo.interface';

@Component({
  selector: 'app-photo-frame',
  templateUrl: './photo-frame.component.html',
  styleUrls: ['./photo-frame.component.css'],
})
export class PhotoFrameComponent implements OnInit, OnDestroy {
  @Input()
  public photo: Photo = {
    url: '',
    description: '',
  };

  @Input()
  public likes: number = 0;

  @Output()
  public liked: EventEmitter<void> = new EventEmitter<void>();

  private debounceSubject: Subject<void> = new Subject();
  private unsubscribe: Subject<void> = new Subject();

  constructor() { }

  public ngOnInit(): void {

    this.debounceSubject
      .asObservable()
      .pipe(
        debounceTime(500),
        takeUntil(this.unsubscribe)
      )
      .subscribe(() => this.liked.emit());

  };

  public ngOnDestroy(): void {

    this.unsubscribe.next();
    this.unsubscribe.complete();

  };


  public like(): void {
    this.debounceSubject.next();
  };

}
