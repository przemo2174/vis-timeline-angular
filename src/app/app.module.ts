import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VisTimelineComponent } from './vis-timeline/vis-timeline.component';
import { VisTimelineService } from './vis-timeline.service';

@NgModule({
  declarations: [
    AppComponent,
    VisTimelineComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [VisTimelineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
