import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Image } from './images';

@Component({
  selector: 'pg-gallery',
  template: `
    <figure *ngFor="let image of images; trackBy: trackByName">
      <picture (click)="select.emit(image)">
        <source srcset="{{image.name}}.webp" type="image/webp" />
        <img
          src="{{ image.name }}.jpg"
          [alt]="image.alt"
          class="gallery-img"
        />
      </picture>
    </figure>
  `,
  styles: [
    `
      :host {
        width: 100vw;
        height: 100vh;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        grid-template-rows: repeat(auto-fit, 1fr);
        grid-gap: 2px;
        background-color: black;
        grid-auto-flow: dense;
        overflow-y: scroll;
        scrollbar-width: thin;
        --scrollbar-background: #dfdfdf;
        --scrollbar-thumb: #84898b;
        scrollbar-width: thin;
        scrollbar-color: var(--scrollbar-thumb) var(--scrollbar-background);
      }

      @media (min-width: 320px) and (max-width: 1024px) {
        :host {
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        }
      }

      &::-webkit-scrollbar {
        width: 11px;
      }

      &::-webkit-scrollbar-track {
        background: var(--scrollbar-background);
      }

      &::-webkit-scrollbar-thumb {
        background-color: var(--scrollbar-thumb);
        border-radius: 10px;
        border: 3px solid var(--scrollbar-background);
      }

      .gallery-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }

      @media (screen-spanning: single-fold-vertical) {
        :host {
          width: env(fold-left);
          height: 100vh;
        }
      }

      @media (screen-spanning: single-fold-horizontal) {
        :host {
          width: 100vw;
          height: var(
            --zenbook-span1-height,
            calc(100vh - env(fold-top) - env(fold-height))
          );
        }
      }
    `,
  ],
})
export class GalleryComponent {
  @Input() images: Image[] = [];
  @Output() select = new EventEmitter<Image>();

  trackByName(_index: number, item: Image): string {
    return item.name;
  }
}
