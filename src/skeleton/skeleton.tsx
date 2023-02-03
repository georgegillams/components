import React, { useState, useRef, ReactNode } from 'react';
import PropTypes from 'prop-types';

import { useEffectAfterPageLoad } from '../server-side-rendering';
import { Outer, Shimmer } from './skeleton.styles';
import { SKELETON_STYLES } from './constants';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  skeletonStyle?: SKELETON_STYLES;
}

const Skeleton = (props: SkeletonProps) => {
  const [left, setLeft] = useState(0);
  const divElement = useRef<HTMLDivElement>(null);

  const adjustPositionsToAlign = () => {
    if (!divElement?.current) {
      return;
    }

    setLeft(divElement.current.getBoundingClientRect().x);
  };

  useEffectAfterPageLoad(() => {
    adjustPositionsToAlign();

    const interval = setInterval(() => {
      adjustPositionsToAlign();
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <Outer ref={divElement} {...props}>
      <Shimmer style={{ marginLeft: `-${left}px` }} />
    </Outer>
  );
};

export default Skeleton;
