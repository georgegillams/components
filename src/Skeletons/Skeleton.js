import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import { useEffectAfterPageLoad } from '../ServerSideRendering';
import { cssModules } from '../helpers/cssModules';

import STYLES from './skeleton.scss';

const getClassName = cssModules(STYLES); // REGEX_REPLACED

const Skeleton = props => {
  const { className, ...rest } = props;

  const classNames = getClassName('skeleton__outer', className);

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
    <div className={classNames} ref={divElement} {...rest}>
      <div
        className={getClassName('skeleton__shimmer')}
        style={{ marginLeft: `-${left}px` }}
      />
    </div>
  );
};

Skeleton.propTypes = {
  className: PropTypes.string,
};

Skeleton.defaultProps = {
  className: null,
};

export default Skeleton;
