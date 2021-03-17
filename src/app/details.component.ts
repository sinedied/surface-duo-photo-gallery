import { Component, Input } from '@angular/core';
import { Image } from './images';

@Component({
  selector: 'pg-details',
  template: `
    <div *ngIf="image; else select" class="detail">
      <pg-details-image [image]="image"></pg-details-image>
    </div>
    <ng-template #select>
      <div class="detail-select">Select an image in the gallery.</div>
    </ng-template>
  `,
  styles: [
    `
      :host {
        background-color: black;
        color: white;
        overflow: hidden;
      }

      .detail {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
      }

      .detail-select {
        color: white;
        font-size: 2em;
        text-align: center;
        margin-top: 20px;
      }
    `,
  ],
})
export class DetailsComponent {
  @Input() image: Image | null = null;
}
