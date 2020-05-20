import React from 'react';
import PropTypes from 'prop-types';

import { Copy } from '../Icons';
import { cssModules } from '../helpers/cssModules';

import STYLES from './copy-button.scss';

const getClassName = cssModules(STYLES);

const CopyButton = props => {
  const { text, className, ...rest } = props;

  const classNames = [getClassName('copy-button__outer', className)];

  return (
    <button
      type="button"
      onClick={() => {
        navigator.clipboard.writeText(text);
      }}
      className={classNames.join(' ')}
      {...rest}
    >
      <Copy className={getClassName('copy-button__icon')} />
    </button>
  );
};

CopyButton.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

CopyButton.defaultProps = {
  className: null,
};

export default CopyButton;
