// // page widths
export const pageMaxWidth = '60rem';
export const pageMaxWidthProse = '41.25rem';

import { css } from 'styled-components';
import { shadowColor, shadowColorDarkMode } from './colors';
import { breakpointMd } from './layout';

// // bpk-token values
// $bpk-color-panjin: #d1435b;
// $bpk-color-monteverde: #00a698;
// $bpk-color-sky-gray-tint-07: #f1f2f8;
// $bpk-color-sky-gray-tint-01: #444560;
// $bpk-breakpoint-query-mobile: '(max-width: 32.25rem)' !default;
// $bpk-breakpoint-query-tablet: '(max-width: 50.25rem)' !default;
// $bpk-border-size-sm: 1pt;
// $bpk-border-radius-sm: 0.375rem;

// // typography values
// $page-title-font-size: 2.4rem;
// $page-title-margin-top: 2.3rem;
// $section-font-size: 2.2rem;
// $section-margin-top: 3.34rem;
// $subsection-font-size: 1.5rem;
// $subsection-margin-top: 2.13rem;
// $paragraph-font-size: 1rem;
// $paragraph-font-size-larger: 1.2rem;
// $page-margin-top: 1.5rem;

// $spacing-xs: 0.375rem;
// $spacing-sm: 0.375rem;
// $spacing-base: 1rem;
// $spacing-lg: 2rem;

// $duration-sm: 0.4s;

// @mixin bpk-breakpoint-mobile {
//   @media #{$bpk-breakpoint-query-mobile} {
//     @content;
//   }
// }

// @mixin bpk-breakpoint-tablet {
//   @media #{$bpk-breakpoint-query-tablet} {
//     @content;
//   }
// }

// $disabled-background-color: #cdcdd7;
// $disabled-color: rgb(100, 100, 100);
// $disabled-background-color-invert: rgb(89, 89, 89);
// $disabled-color-invert: darkgray;

// $primary-color-dark-invert: white;
// $primary-color-really-dark: #002644;
// $primary-color-dark: #005da3;
// $primary-color-invert: white;
// $primary-color-light: lightblue;
// $primary-color-transparent: rgba(30, 50, 200, 0.15);
// $primary-color: #44aeff;

// $destructive-color: #e02626;
// $destructive-color-dark: #9f1717;

// $cta-color-dark-invert: #004479;
// $cta-color-dark: #004880;
// $cta-color-invert: #025ca2;
// $cta-color: #0067b7;

// $not-black: #1e1e1e;
// $not-black-invert: white;

export const shadowNormal = `0.2rem 0.2rem 0.5rem 0 ${shadowColor}`;
export const shadowNormalDarkMode = `0.44rem 0.44rem 1rem 0 ${shadowColorDarkMode}}`;
export const shadowHover = `0.4rem 0.4rem 1rem 0 ${shadowColor}`;
export const shadowHoverDarkMode = `0.2rem 0.2rem 0.5rem 0 ${shadowColorDarkMode}`;

// $background-color: white;
// $background-color-invert: black;
// $background-color-elevated: white;
// $background-color-elevated-invert: #222324;
// $background-color-elevated-colored: white;
// $background-color-elevated-colored-invert: #050d1b;

// $alternating-background-color-1: #f4f4f4;
// $alternating-background-color-1-invert: #121313;
// $alternating-background-color-2: #e3e3e8;
// $alternating-background-color-2-invert: #191a1b;

// $link-color: darkorchid;
// $link-color-invert: orchid;
// $link-color-hover: $primary-color;

// $checkbox-tick-color: $primary-color;
// $segmented-control-selected-color: $link-color;

// $mobile-navigation-unfolded-height: 24rem;

// $request-status-z-index: 1000;
// $navigation-bar-z-index: 999;
// $cookie-banner-z-index: 500;
// $navigation-bar-menu-z-index: 998;
// $navigation-bar-scrim-z-index: 997;

// $outline-color: rgba(0, 125, 250, 0.6);
// $outline-color-invert: rgba(0, 125, 250, 0.6);
// $outline-gap: 0.35rem;
// $outline-width: 0.2rem;
// $outline-border-radius: 0.5rem;

// @mixin focus-style($apply-relative-positioning: true) {
//   &:focus-within,
//   &:focus {
//     @if $apply-relative-positioning {
//       position: relative;
//     }

//     /* stylelint-disable-next-line declaration-no-important */
//     outline: none !important;

//     &::after {
//       position: absolute;
//       // Could just use `inset` but it's not widely supported
//       top: -$outline-gap;
//       right: -$outline-gap;
//       bottom: -$outline-gap;
//       left: -$outline-gap;
//       content: '';
//       display: block;
//       border: solid $outline-color $outline-width;
//       border-radius: $outline-border-radius;
//       pointer-events: none;

//       @media (prefers-color-scheme: dark) {
//         border-color: $outline-color-invert;
//       }
//     }
//   }
// }

export const pageContainer = css`
  width: 100%;
  max-width: ${pageMaxWidth};
  margin-right: auto;
  margin-left: auto;
  padding-right: 0.9375rem;
  padding-left: 0.9375rem;

  @media (min-width: ${breakpointMd}) {
    padding-right: 1.875rem;
    padding-left: 1.875rem;
  }
`;
// @mixin page-container() {
//   width: 100%;
//   max-width: 60rem;
//   margin-top: $page-margin-top;
//   margin-right: auto;
//   margin-left: auto;
//   padding-right: 1.875rem;
//   padding-left: 1.875rem;

//   @include bpk-breakpoint-tablet {
//     padding-right: 0.9375rem;
//     padding-left: 0.9375rem;
//   }
// }

// @mixin page-container-centered() {
//   text-align: center;

//   @include page-container;
// }

// @keyframes gg-bounce-hover-effect {
//   0% {
//     transform: scale(1);
//   }
//   50% {
//     transform: scale(1.1);
//   }
//   100% {
//     transform: scale(1);
//   }
// }
