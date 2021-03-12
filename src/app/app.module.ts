import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery.component';
import { DetailImageComponent } from './detail-image.component';
import { DetailContainerComponent } from './detail-container.component';
import { FullviewContainerComponent } from './fullview-container.component';
import { SpinnerComponent } from './spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    DetailImageComponent,
    DetailContainerComponent,
    FullviewContainerComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
