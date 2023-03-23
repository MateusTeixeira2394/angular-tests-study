import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LikeWidgetComponent } from './components/like-widget/like-widget.component';
import { PhotoFrameComponent } from './components/photo-frame/photo-frame.component';

@NgModule({
  declarations: [
    AppComponent,
    LikeWidgetComponent,
    PhotoFrameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [LikeWidgetComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
