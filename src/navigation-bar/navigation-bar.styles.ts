import styled, { css, keyframes } from 'styled-components';
import {
  backgroundColorDarkMode,
  backgroundColorElevatedColored,
  backgroundColorElevatedColoredDarkMode,
} from '../constants/colors';
import {
  breakpointMd,
  breakpointSm,
  navigationBarZIndex,
  navigationBarScrimZIndex,
  spacingBase,
  spacingLg,
} from '../constants/layout';
import { pageContainer } from '../constants/misc';

const backdropFilter = `saturate(180%) blur(20px)`;

const navigationBarBackgroundStandard = css`
  background-color: ${backgroundColorElevatedColored};
  backdrop-filter: unset;

  -webkit-backdrop-filter: unset;
`;

const navigationBarBackgroundStandardDark = css`
  background-color: ${backgroundColorElevatedColoredDarkMode};
  backdrop-filter: unset;

  -webkit-backdrop-filter: unset;
`;

const navigationBarBackgroundFiltered = css`
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: ${backdropFilter};

  -webkit-backdrop-filter: ${backdropFilter};

  @media (prefers-reduced-transparency: reduce) {
    ${navigationBarBackgroundStandard};
  }
`;

const navigationBarBackgroundFilteredDark = css`
  background-color: rgba(5, 13, 27, 0.7);
  backdrop-filter: ${backdropFilter};

  -webkit-backdrop-filter: ${backdropFilter};

  @media (prefers-reduced-transparency: reduce) {
    ${navigationBarBackgroundStandardDark};
  }
`;

const navigationBarBackgroundStyles = css`
  ${navigationBarBackgroundStandard}

  @supports (backdrop-filter: blur(1rem)) or
     (-webkit-backdrop-filter: blur(1rem)) {
    ${navigationBarBackgroundFiltered}
  }

  @media (prefers-color-scheme: dark) {
    ${navigationBarBackgroundStandardDark}

    @supports (backdrop-filter: blur(1rem)) or
     (-webkit-backdrop-filter: blur(1rem)) {
      ${navigationBarBackgroundFilteredDark}
    }
  }
`;

const navigationKeyFrames = keyframes`
  0% {
    opacity: 0.1;
    }
    100% {
      opacity: 1;
      }
      `;

export const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: ${navigationBarZIndex};
  animation: ${navigationKeyFrames} 0.4s ease-in-out;
`;
export const Scrim = styled.div<{
  open: boolean;
}>`
  position: fixed;
  top: 0;
  left: 0;
  /* z-index: ${navigationBarScrimZIndex}; */
  width: 100vw;
  height: 100vh;
  transition: opacity 0.4s;
  background-color: ${backgroundColorDarkMode};
  opacity: 0;

  @media (prefers-color-scheme: dark) {
    background-color: black;
  }

  @media (min-width: ${breakpointMd}) {
    display: none;
  }

  ${({ open }) =>
    open &&
    css`
      opacity: 0.5;
    `}
`;
export const BarOuter = styled.nav`
  width: 100%;
  box-shadow: 0 0.05rem 0.5rem rgba(0, 0, 0, 0.173);
  position: inherit;

  ${navigationBarBackgroundStyles}

  @media (prefers-color-scheme: dark) {
    box-shadow: unset;
  }
`;
export const BarInner = styled.div`
  height: 4.25rem;
  ${pageContainer};
`;
export const BurgerContainer = styled.div`
  width: 2rem;
  height: 2rem;
`;

export const DesktopNavWrapper = styled.ul`
  /* Remove ul default styles */
  list-style-type: none;
  padding: 0;
  margin: 0;

  display: none;
  height: 100%;

  @media (min-width: ${breakpointMd}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  > * {
    margin-right: ${spacingLg};
  }
`;

export const TabletNavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;

  @media (min-width: ${breakpointMd}) {
    display: none;
  }
`;

export const AnimatedContainer = styled.nav<{
  open: boolean;
}>`
  padding-top: 8rem;
  position: fixed;
  top: 0;
  width: 100vw;
  left: -50rem;
  display: flex;
  height: 100vh;
  justify-content: center;
  transition: left 0.4s;
  overflow: hidden;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  ${navigationBarBackgroundStyles}

  @media (min-width: ${breakpointSm}) {
    width: 25rem;
  }

  @media (min-width: ${breakpointMd}) {
    display: none;
  }

  ${({ open }) =>
    open &&
    css`
      left: 0;
    `}
`;

export const AnimatedContainerInner = styled.div`
  /* Remove ul default styles */
  list-style-type: none;
  padding: 0;
  margin: 0;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: start;
  justify-content: flex-start;
  text-align: left;

  > * {
    margin-bottom: ${spacingBase};
  }
`;

// .navigation-bar {

//   &__animated-container {
//   }

//   &__mobile-menu-container {
//     display: flex;
//     margin: 8rem 0 0 0;
//     flex-direction: column;
//   }

//   &__sidebar-menu-item {
//     min-width: 0;
//     margin-bottom: $spacing-base;
//   }
