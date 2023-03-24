import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LikeWidgetComponent } from './components/like-widget/like-widget.component';
import { PhotoFrameComponent } from './components/photo-frame/photo-frame.component';
import { AppActionsDirective } from './directives/app-actions.directive';
import { PhotoBoardComponent } from './components/photo-board/photo-board.component';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    LikeWidgetComponent,
    PhotoFrameComponent,
    AppActionsDirective,
    PhotoBoardComponent
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
