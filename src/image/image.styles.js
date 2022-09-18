import styled, { css } from 'styled-components';
import Skeleton from '../skeleton';

export const OuterWrapper = styled.div`
  position: relative;
`;

export const ImagePlaceholder = styled.div`
  height: 0;
`;

export const SkeletonContainer = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const StyledSkeleton = styled(Skeleton)`
  z-index: -1;
  width: 100%;
  height: 100%;
`;

const imageStyles = (props) => css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  transition: opacity ease-in-out 0.4s;
  ${!props.showImage &&
  css`
    opacity: 0;
  `}
`;

export const LightImage = styled.img`
  ${(props) => imageStyles(props)}

  @media (prefers-color-scheme: dark) {
    display: none;
  }
`;

export const DarkImage = styled.img`
  ${(props) => imageStyles(props)}

  display: none;

  @media (prefers-color-scheme: dark) {
    display: unset;
  }
`;
