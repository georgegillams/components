import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import { useEffectAfterPageLoad } from '../server-side-rendering';
import { Outer, Shimmer } from './skeleton.styles';
import { SKELETON_STYLES } from './constants';

const Skeleton = (props) => {
  const [left, setLeft] = useState(0);
  const divElement = useRef(null);

  const adjustPositionsToAlign = () => {
    if (!divElement || !divElement.current) {
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

Skeleton.propTypes = {
  skeletonStyle: PropTypes.oneOf(Object.values(SKELETON_STYLES)),
};

Skeleton.defaultProps = { skeletonStyle: null };

export default Skeleton;
