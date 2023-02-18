/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';

import ImageDumb, { ImageDumbProps } from './image-dumb';

type ExcludeProps = `${'loaded' | 'onImageLoad'}`;

export type ImageProps = {
  [K in keyof ImageDumbProps as K extends ExcludeProps
    ? never
    : K]: ImageDumbProps[K];
};

const Image = (props: ImageProps) => {
  const [loaded, setLoaded] = useState(false);

  const onImageLoad = () => {
    setLoaded(true);
  };

  return <ImageDumb loaded={loaded} onImageLoad={onImageLoad} {...props} />;
};

export default Image;
