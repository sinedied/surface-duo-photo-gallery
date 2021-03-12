import { Component, Input } from '@angular/core';
import { Image } from './images';

@Component({
  selector: 'pg-details-image',
  template: `
    <div id="wrapper">
      <pg-spinner *ngIf="loading"></pg-spinner>
      <img [hidden]="loading"
      src="{{ _image.name.replace('-l', '') }}.jpg"
      [alt]="_image.alt"
      (load)="loading = false"
      />
      <div *ngIf="!loading" id="text">{{ _image.alt }}</div>
    </div>
  `,
  styles: [
    `
      :host {
        width: 100%;
        height: 100%;
      }

      #wrapper {
        position: relative;
        height: 100%;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: start;
        align-items: center;
      }

      #text {
        margin: 16px;
        color: white;
        font-size: 1.5em;
        word-wrap: break-word;
        text-align: center;
        height: 20%;
        margin-top: 15px;
      }

      img {
        min-height: 75%;
        height: 90%;
        width: 90%;
        object-fit: contain;
        margin-top: 40px;
      }

      pg-spinner {
        position: absolute;
        top: 50%;
      }
    `,
  ],
})
export class DetailsImageComponent {
  _image!: Image;
  loading = true;

  @Input() set image(image: Image) {
    this.loading = true;
    this._image = image;
  }
}
