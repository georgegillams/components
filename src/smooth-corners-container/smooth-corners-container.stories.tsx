import React, { useEffect } from 'react';

import SmoothCornersContainer, { TECHNOLOGY } from './index';
import styled from 'styled-components';
import Text from '../text';
import { spacingBase } from '../constants/layout';
import { getJsScript } from './smooth-corners-worklet-loader';
import { JS_CLASSNAME, NO_JS_CLASSNAME } from '../js-feature-detector';

const CORNER_RADIUSES_30 = {
  topLeft: 30,
  topRight: 30,
  bottomLeft: 30,
  bottomRight: 30,
};

const CORNER_RADIUSES_MIXED = {
  topLeft: 10,
  topRight: 60,
  bottomRight: 90,
  bottomLeft: 0,
};

const StyledChildrenWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${spacingBase};
  text-align: center;
`;

const StyledSmoothCornersContainer = styled(SmoothCornersContainer)`
  width: 100%;
  max-width: 25rem;
  height: 16rem;
  background-color: red;
`;

const StoryWorkletLoader = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.id = 'storybook-worklet-loader';
    script.innerText = getJsScript(
      '/static/smooth-corners-container/worklet.js',
    );
    document.body.appendChild(script);
  }, []);

  return null;
};

export default {
  title: 'Atoms/Smooth Corners Container',
  component: SmoothCornersContainer,
};

export const HoudiniOnly = () => (
  <div className={JS_CLASSNAME}>
    <StoryWorkletLoader />
    <StyledSmoothCornersContainer
      technology={TECHNOLOGY.houdiniOnly}
      cornerRadiuses={CORNER_RADIUSES_30}
    >
      <StyledChildrenWrapper>
        <Text>Houdini Only - please view in Chrome</Text>
      </StyledChildrenWrapper>
    </StyledSmoothCornersContainer>
  </div>
);

export const SvgOnly = () => (
  <div className={JS_CLASSNAME}>
    <StoryWorkletLoader />
    <StyledSmoothCornersContainer
      technology={TECHNOLOGY.svgOnly}
      cornerRadiuses={CORNER_RADIUSES_30}
    >
      <StyledChildrenWrapper>
        <Text>SVG Only - even in Chrome</Text>
      </StyledChildrenWrapper>
    </StyledSmoothCornersContainer>
  </div>
);

export const SvgAndHoudini = () => (
  <div className={JS_CLASSNAME}>
    <StoryWorkletLoader />
    <StyledSmoothCornersContainer cornerRadiuses={CORNER_RADIUSES_30}>
      <StyledChildrenWrapper>
        <Text>SVG and Houdini — depending on browser support</Text>
      </StyledChildrenWrapper>
    </StyledSmoothCornersContainer>
  </div>
);

export const HoudiniOnlyNonMatchingCorners = () => (
  <div className={JS_CLASSNAME}>
    <StoryWorkletLoader />
    <StyledSmoothCornersContainer
      technology={TECHNOLOGY.houdiniOnly}
      cornerRadiuses={CORNER_RADIUSES_MIXED}
    >
      <StyledChildrenWrapper>
        <Text>Houdini Only - please view in Chrome</Text>{' '}
      </StyledChildrenWrapper>
    </StyledSmoothCornersContainer>
  </div>
);

export const SvgOnlyNonMatchingCorners = () => (
  <div className={JS_CLASSNAME}>
    <StoryWorkletLoader />
    <StyledSmoothCornersContainer
      technology={TECHNOLOGY.svgOnly}
      cornerRadiuses={CORNER_RADIUSES_MIXED}
    >
      <StyledChildrenWrapper>
        <Text>SVG Only - even in Chrome</Text>
      </StyledChildrenWrapper>
    </StyledSmoothCornersContainer>
  </div>
);

export const NoJs = () => (
  <div className={NO_JS_CLASSNAME}>
    <StyledSmoothCornersContainer
      cornerRadiuses={CORNER_RADIUSES_30}
      idSuffixGenerator={null}
    >
      <StyledChildrenWrapper>
        <Text>No JS</Text>
      </StyledChildrenWrapper>
    </StyledSmoothCornersContainer>
  </div>
);

export const Combination = () => (
  <>
    <div className={NO_JS_CLASSNAME}>
      <StoryWorkletLoader />
      <StyledSmoothCornersContainer
        cornerRadiuses={CORNER_RADIUSES_MIXED}
        idSuffixGenerator={null}
      >
        <StyledChildrenWrapper>
          <Text>No JS</Text>
        </StyledChildrenWrapper>
      </StyledSmoothCornersContainer>
    </div>
    <div className={JS_CLASSNAME}>
      <StyledSmoothCornersContainer
        technology={TECHNOLOGY.svgOnly}
        cornerRadiuses={CORNER_RADIUSES_MIXED}
      >
        <StyledChildrenWrapper>
          <Text>SVG Only - even in Chrome</Text>
        </StyledChildrenWrapper>
      </StyledSmoothCornersContainer>
      <StyledSmoothCornersContainer
        technology={TECHNOLOGY.houdiniOnly}
        cornerRadiuses={CORNER_RADIUSES_MIXED}
      >
        <StyledChildrenWrapper>
          <Text>Houdini Only - please view in Chrome</Text>{' '}
        </StyledChildrenWrapper>
      </StyledSmoothCornersContainer>
    </div>
  </>
);
