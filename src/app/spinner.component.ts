import { Component } from '@angular/core';

@Component({
  selector: 'pg-spinner',
  template: `
    <svg
      width="65px"
      height="65px"
      viewBox="0 0 66 66"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        class="path"
        fill="none"
        stroke-width="6"
        stroke-linecap="round"
        cx="33"
        cy="33"
        r="30"
      ></circle>
    </svg>
  `,
  styles: [
    `
      :host {
        width: 65px;
        height: 65px;
        animation: rotator 1.4s linear infinite;
      }

      @keyframes rotator {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(270deg);
        }
      }

      .path {
        stroke-dasharray: 187;
        stroke-dashoffset: 0;
        transform-origin: center;
        animation: dash 1.4s ease-in-out infinite,
          colors 6.4s ease-in-out infinite;
      }

      @keyframes colors {
        0% {
          stroke: #4285f4;
        }
        25% {
          stroke: #de3e35;
        }
        50% {
          stroke: #f7c223;
        }
        75% {
          stroke: #1b9a59;
        }
        100% {
          stroke: #4285f4;
        }
      }

      @keyframes dash {
        0% {
          stroke-dashoffset: 187;
        }
        50% {
          stroke-dashoffset: 46.75;
          transform: rotate(135deg);
        }
        100% {
          stroke-dashoffset: 187;
          transform: rotate(450deg);
        }
      }
    `,
  ],
})
export class SpinnerComponent {}
