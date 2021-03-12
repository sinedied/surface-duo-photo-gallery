import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery.component';
import { DetailsComponent } from './details.component';
import { DetailsImageComponent } from './details-image.component';
import { FullviewComponent } from './fullview.component';
import { SpinnerComponent } from './spinner.component';
import { FoldComponent } from './fold.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    DetailsComponent,
    DetailsImageComponent,
    FullviewComponent,
    SpinnerComponent,
    FoldComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
