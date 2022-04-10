import React from 'react';
import PropTypes from 'prop-types';

import { cssModules } from '../helpers/cssModules';

import STYLES from './page-container.scss';

export const WIDTHS = {
  default: 'default',
  prose: 'prose',
  fullWidth: 'fullWidth',
};

const getClassName = cssModules(STYLES);

const PageContainer = (props) => {
  const { className, width, centred, bottomPadding, ...rest } = props;

  const outerClassNames = [getClassName('page-container__container')];
  if (bottomPadding) {
    outerClassNames.push([
      getClassName('page-container__container--bottom-padding'),
    ]);
  }
  if (width === WIDTHS.default) {
    outerClassNames.push([getClassName('page-container__container--regular')]);
  }
  if (width === WIDTHS.prose) {
    outerClassNames.push([getClassName('page-container__container--prose')]);
  }
  if (width === WIDTHS.fullWidth) {
    outerClassNames.push([
      getClassName('page-container__container--full-width'),
    ]);
  }
  if (centred) {
    outerClassNames.push([getClassName('page-container__container--center')]);
  }

  if (className) {
    outerClassNames.push(className);
  }

  return <div className={outerClassNames.join(' ')} {...rest} />;
};

PageContainer.propTypes = {
  width: PropTypes.oneOf(Object.keys(WIDTHS)),
  className: PropTypes.string,
  centred: PropTypes.bool,
  bottomPadding: PropTypes.bool,
};

PageContainer.defaultProps = {
  width: WIDTHS.default,
  className: null,
  centred: false,
  bottomPadding: false,
};

export default PageContainer;
