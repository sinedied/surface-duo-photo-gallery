import { Component } from '@angular/core';
import { Image, images } from './images';

@Component({
  selector: 'pg-root',
  template: `
    <pg-gallery [images]="images" (select)="setImage($event)"></pg-gallery>
    <pg-fold></pg-fold>
    <pg-details [image]="currentImage"></pg-details>
    <pg-fullview
      [image]="currentImage"
      (close)="closeImage()"
      (previous)="previousImage($event)"
      (next)="nextImage($event)"
    ></pg-fullview>
  `,
  styles: [
    `
      :host {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: row;
      }

      @media (screen-spanning: single-fold-vertical) {
        :host {
          flex-direction: row;
        }
      }

      @media (screen-spanning: single-fold-horizontal) {
        :host {
          flex-direction: column-reverse;
        }
      }

      @media (screen-spanning: none) {
        :host {
          flex-direction: row;
        }
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
