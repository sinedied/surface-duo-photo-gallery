import { Component } from '@angular/core';
import { Image, images } from './images';

@Component({
  selector: 'pg-root',
  template: `
    <div fdSplitLayout="flex reverse">
      <pg-gallery
        fdWindow="0"
        [images]="images"
        (select)="setImage($event)"
      ></pg-gallery>
      <pg-details
        fdWindow="1"
        *fdIfSpan="'multi'"
        [image]="currentImage"
      ></pg-details>
      <pg-fullview
        *fdIfSpan="'none'"
        [image]="currentImage"
        (close)="closeImage()"
        (previous)="previousImage($event)"
        (next)="nextImage($event)"
      ></pg-fullview>
    </div>
  `,
  styles: [
    `
      :host {
        width: 100vw;
        height: 100vh;
      }
    `,
  ],
})
export class AppComponent {
  images = images;
  currentImage: Image | null = null;

  setImage(image: Image) {
    this.currentImage = image;
  }

  closeImage() {
    this.currentImage = null;
  }

  previousImage(image: Image) {
    this.currentImage = images[images.indexOf(image) - 1];
  }

  nextImage(image: Image) {
    this.currentImage = images[images.indexOf(image) + 1];
  }
}
