import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Image } from './images';

@Component({
  selector: 'pg-fullview',
  template: `
    <div *ngIf="image" (click)="close.emit()" class="container">
      <div (click)="close.emit()" class="close"></div>
      <div (click)="$event.stopPropagation(); previous.emit(image)" class="arrow-left"></div>
      <img
        src="{{ image.name.replace('-l', '') }}.jpg"
        [alt]="image.alt"
        (load)="loading = false"
      />
      <pg-spinner *ngIf="loading"></pg-spinner>
      <div (click)="$event.stopPropagation(); next.emit(image)" class="arrow-right"></div>
    </div>
  `,
  styles: [
    `
      .container {
        height: 100%;
        width: 100%;
        backdrop-filter: blur(5px) contrast(0.8);
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
      }

      @media (screen-spanning: single-fold-horizontal),
        (screen-spanning: single-fold-vertical) {
        .container {
          display: none;
        }
      }

      .arrow-left,
      .arrow-right {
        width: 30px;
        height: 30px;
        opacity: 0.7;
        border-radius: 15%;
        transform: rotate(45deg);
      }

      .arrow-left {
        border-bottom: solid 10px white;
        border-left: solid 10px white;
      }

      .arrow-right {
        border-top: solid 10px white;
        border-right: solid 10px white;
      }

      .arrow-right:hover,
      .arrow-left:hover {
        opacity: 1;
      }

      .close {
        position: absolute;
        right: 20px;
        top: 20px;
        width: 32px;
        height: 32px;
        opacity: 0.3;
        background-color: white;
      }

      .close:hover {
        opacity: 1;
      }

      .close:before,
      .close:after {
        position: absolute;
        left: 15px;
        content: ' ';
        height: 33px;
        width: 2px;
        background-color: #333;
      }

      .close:before {
        transform: rotate(45deg);
      }

      .close:after {
        transform: rotate(-45deg);
      }

      img {
        height: 95%;
        width: 85%;
        object-fit: contain;
        user-select: none;
      }

      pg-spinner {
        position: absolute;
        top: 50%;
      }
    `,
  ],
})
export class FullviewComponent {
  loading = true;

  @Input() image: Image | null = null;
  @Output() close = new EventEmitter<void>();
  @Output() previous = new EventEmitter<Image>();
  @Output() next = new EventEmitter<Image>();
}
