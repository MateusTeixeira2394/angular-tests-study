import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faThumbsUp, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import Icon from 'src/app/models/icon.interface';
import { UuidService } from '../../services/uuid.service';

@Component({
  selector: 'app-like-widget',
  templateUrl: './like-widget.component.html',
  styleUrls: ['./like-widget.component.css'],
})
export class LikeWidgetComponent implements OnInit{

  @Output()
  public liked = new EventEmitter<void>();

  @Input()
  public likes: number = 0;

  @Input()
  public id: string = '';

  public icons: Icon = {
    like: faThumbsUp
  };

  constructor(private uuidService: UuidService) {};

  ngOnInit(): void {

    if(!this.id){

      this.id = this.uuidService.getIdwthPrefix('like-widget');

    }

  };

  public like(): void {
    this.liked.emit();
  }

}
