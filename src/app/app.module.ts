import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LikeWidgetComponent } from './components/like-widget/like-widget.component';
import { PhotoFrameComponent } from './components/photo-frame/photo-frame.component';
import { AppActionsDirective } from './directives/app-actions.directive';
import { PhotoBoardComponent } from './components/photo-board/photo-board.component';
import {HttpClientModule} from '@angular/common/http';
import { PhotosListComponent } from './views/photos-list/photos-list.component'

@NgModule({
  declarations: [
    AppComponent,
    LikeWidgetComponent,
    PhotoFrameComponent,
    AppActionsDirective,
    PhotoBoardComponent,
    PhotosListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [LikeWidgetComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
