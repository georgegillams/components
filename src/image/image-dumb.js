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
import { JS_CLASSNAME, NO_JS_CLASSNAME } from '../js-feature-detector';

const CLASS_HIDE_JS = 'gg-image__img--hide-js';
const CLASS_HIDE_NO_JS = 'gg-image__img--hide-no-js';

const ImageDumb = (props) => {
  const {
    aspectX,
    aspectY,
    loaded,
    lightSrc,
    darkSrc,
    renderImg,
    onImageLoad,
    imgProps,
    ...rest
  } = props;
  const { className: imgClassName, ...imgPropsRest } = imgProps;

  const [transitioning, setTransitioning] = useState(false);

  const [renderSkeleton, setRenderSkeleton] = useState(!loaded);
  const [showImage, setShowImage] = useState(loaded);

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
        setTimeout(() => {
          setRenderSkeleton(false);
          setTransitioning(false);
        }, 400);
      }, 400);
    }
    if (!loaded && showImage) {
      setTransitioning(true);
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
        {/* The hide-js style is only applied if an ancestor element has the `js` class. */}
        {/* The hide-no-js style is only applied if an ancestor element has the `no-js` class. */}
        {`
          .${JS_CLASSNAME} .${CLASS_HIDE_JS} {display: none;}
          .${NO_JS_CLASSNAME} .${CLASS_HIDE_NO_JS} {display: none;}
        `}
      </style>
      <ImagePlaceholder style={{ paddingBottom: `${aspectRatio}%` }}>
        {renderSkeleton && (
          <SkeletonContainer>
            <StyledSkeleton />
          </SkeletonContainer>
        )}
        {renderImg && (
          <>
            <div className={CLASS_HIDE_NO_JS}>
              <LightImage
                onLoad={onLightImageLoad}
                showImage={showImage}
                className={imgClassName}
                // This is a hack to ensure that the src is set after onload is.
                // Otherwise onload may never be called as the image is already loaded when it's set
                src={enableSrc && lightSrc}
                {...imgPropsRest}
              />
              <DarkImage
                onLoad={onDarkImageLoad}
                showImage={showImage}
                className={imgClassName}
                // This is a hack to ensure that the src is set after onload is.
                // Otherwise onload may never be called as the image is already loaded when it's set
                src={enableSrc && darkSrc}
                {...imgPropsRest}
              />
            </div>
            <div className={CLASS_HIDE_JS}>
              <LightImage
                showImage={true}
                className={imgClassName}
                src={lightSrc}
                {...imgPropsRest}
              />
              <DarkImage
                showImage={true}
                className={imgClassName}
                src={darkSrc}
                {...imgPropsRest}
              />
            </div>
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
