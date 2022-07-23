/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import {
  ImagePlaceholder,
  OuterWrapper,
  SkeletonContainer,
  StyledSkeleton,
  DarkImage,
  LightImage,
} from './image.styles';
import { JS_CLASSNAME } from '../js-feature-detector';

const CLASS_HIDE_JS = 'gg-image__img--hide';

const ImageDumb = (props) => {
  const {
    aspectX,
    aspectY,
    loaded,
    lightSrc,
    darkSrc,
    renderImg,
    onImageLoad,
    className,
    imgProps,
    ...rest
  } = props;
  const { className: imgClassName, ...imgPropsRest } = imgProps;

  const [transitioning, setTransitioning] = useState(false);

  const [renderSkeleton, setRenderSkeleton] = useState(!loaded);
  const [showImage, setShowImage] = useState(loaded);
  const [showSkeleton, setShowSkeleton] = useState(!loaded);

  const [lightImageLoaded, setLightImageLoaded] = useState(false);
  const [darkImageLoaded, setDarkImageLoaded] = useState(false);

  const [enableSrc, setEnableSrc] = useState(false);

  useEffect(() => {
    setEnableSrc(true);
  }, []);

  useEffect(() => {
    if (loaded && !showImage) {
      setTransitioning(true);
      setShowImage(true);
      setTimeout(() => {
        setShowSkeleton(false);
        setTimeout(() => {
          setRenderSkeleton(false);
          setTransitioning(false);
        }, 400);
      }, 400);
    }
    if (!loaded && showImage) {
      setTransitioning(true);
      setShowSkeleton(true);
      setRenderSkeleton(true);
      setTimeout(() => {
        setShowImage(false);
        setTransitioning(false);
      }, 400);
    }
  }, [loaded, transitioning]);

  useEffect(() => {
    if (lightImageLoaded && darkImageLoaded && onImageLoad) {
      onImageLoad();
    }
  }, [lightImageLoaded, darkImageLoaded, onImageLoad]);

  const onLightImageLoad = () => {
    setLightImageLoaded(true);
  };

  const onDarkImageLoad = () => {
    setDarkImageLoaded(true);
  };

  const aspectRatio = (100 * aspectY) / aspectX;

  return (
    <OuterWrapper {...rest}>
      <style>
        {/* The style is only applied if an ancestor element has the `js` class. */}
        {`.${JS_CLASSNAME} .${CLASS_HIDE_JS} {opacity: 0;}`}
      </style>
      <ImagePlaceholder style={{ paddingBottom: `${aspectRatio}%` }}>
        {renderSkeleton && (
          <SkeletonContainer>
            <StyledSkeleton />
          </SkeletonContainer>
        )}
        {renderImg && (
          <>
            <LightImage
              onLoad={onLightImageLoad}
              className={!showImage && CLASS_HIDE_JS}
              // This is a hack to ensure that the src is set after onload is.
              // Otherwise onload may never be called as the image is already loaded when it's set
              src={enableSrc && lightSrc}
              {...imgPropsRest}
            />
            <DarkImage
              onLoad={onDarkImageLoad}
              className={!showImage && CLASS_HIDE_JS}
              // This is a hack to ensure that the src is set after onload is.
              // Otherwise onload may never be called as the image is already loaded when it's set
              src={enableSrc && darkSrc}
              {...imgPropsRest}
            />
          </>
        )}
      </ImagePlaceholder>
    </OuterWrapper>
  );
};

ImageDumb.propTypes = {
  aspectX: PropTypes.number.isRequired,
  aspectY: PropTypes.number.isRequired,
  loaded: PropTypes.bool,
  renderImg: PropTypes.bool,
  onImageLoad: PropTypes.func,
  lightSrc: PropTypes.string.isRequired,
  darkSrc: PropTypes.string.isRequired,
  imgProps: PropTypes.shape({
    alt: PropTypes.string.isRequired,
  }),
};

ImageDumb.defaultProps = {
  loaded: false,
  renderImg: true,
  onImageLoad: null,
  imgProps: {},
};

export default ImageDumb;
