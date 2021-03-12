import { Component } from '@angular/core';

@Component({
  selector: 'pg-fold',
  template: `<div class="fold"></div>`,
  styles: [
    `
      .fold {
        height: 0;
        width: 0;
        background-size: 40px 40px;
        background-color: #737373;
        background-image: linear-gradient(
          45deg,
          rgba(255, 255, 255, 0.2) 25%,
          transparent 25%,
          transparent 50%,
          rgba(255, 255, 255, 0.2) 50%,
          rgba(255, 255, 255, 0.2) 75%,
          transparent 75%,
          transparent
        );
      }

      @media (screen-spanning: single-fold-vertical) {
        .fold {
          height: env(fold-height);
          width: env(fold-width);
        }
      }

      @media (screen-spanning: single-fold-horizontal) {
        .fold {
          height: env(fold-height);
          width: env(fold-width);
        }
      }
    `,
  ],
})
export class FoldComponent {}
