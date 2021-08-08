import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { cssModules } from '../helpers/cssModules';

import STYLES from './switch.scss';

const getClassName = cssModules(STYLES);

const Switch = props => {
  const { ...rest } = props;

  const [checked, setChecked] = useState(false);
  const [checking, setChecking] = useState(false);

  useEffect(() => {
    setChecking(true);
    const timeout = setTimeout(() => {
      setChecking(false);
    }, 100);

    const cleanup = () => {
      clearTimeout(timeout);
    };
    return cleanup;
  }, [checked]);

  return (
    <div
      onClick={() => setChecked(!checked)}
      onMouseDown={() => {
        setChecking(true);
      }}
      onMouseUp={() => {
        setChecking(false);
      }}
      style={{
        position: 'relative',
        width: '3.2rem',
        height: '2rem',
        backgroundColor: checked ? 'rgb(40, 40, 144)' : 'rgb(207, 207, 207)',
        transition: '.2s',
        borderRadius: '2rem',
      }}
    >
      <div
        style={{
          position: 'absolute',
          transition: '.2s',
          boxShadow: 'rgba(0, 0, 0, 0.2) .1rem .1rem .2rem',
          left: checked ? (checking ? '.6rem' : '1.2rem') : '0rem',
          margin: '.1rem',
          width: checking ? '2.4rem' : '1.8rem',
          height: '1.8rem',
          backgroundColor: 'white',
          borderRadius: '2rem',
          dropShadow: 'black 1rem',
        }}
      >
        <div />
      </div>
    </div>
  );
};

Switch.propTypes = {
  ariaLabel: PropTypes.string,
  backgroundImageClassName: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  fillImageSrc: PropTypes.node,
  href: PropTypes.string,
  light: PropTypes.bool,
  onClick: PropTypes.func,
  onHoverChanged: PropTypes.func,
  padded: PropTypes.bool,
  highlighted: PropTypes.bool,
  atomic: PropTypes.bool,
};

Switch.defaultProps = {
  ariaLabel: null,
  backgroundImageClassName: null,
  children: null,
  className: null,
  disabled: false,
  fillImageSrc: null,
  href: null,
  light: false,
  onClick: null,
  onHoverChanged: null,
  padded: true,
  highlighted: false,
  atomic: true,
};

export default Switch;
