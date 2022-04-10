import PropTypes from 'prop-types';
import React from 'react';

import { cssModules } from '../helpers/cssModules';

import STYLES from './subsection.scss';

const getClassName = cssModules(STYLES); // REGEX_REPLACED

const Subsection = (props) => {
  const {
    inheritColor,
    link,
    padding,
    anchor,
    name,
    className,
    textClassName,
    children,
    disabled,
    headingProps,
    ...rest
  } = props;

  const outerClassNames = [getClassName('subsection__outer')];
  const textClassNames = [getClassName('subsection__heading')];
  const anchorClassNames = [getClassName('subsection__anchor-link')];

  if (inheritColor) {
    outerClassNames.push(getClassName('subsection__outer--inherit-color'));
  }
  if (link) {
    textClassNames.push(getClassName('subsection__heading--link'));
  }
  if (anchor) {
    textClassNames.push(getClassName('subsection__heading--with-anchor-link'));
  }
  if (!padding) {
    textClassNames.push(getClassName('subsection__heading--no-padding'));
    anchorClassNames.push(getClassName('subsection__anchor-link--no-padding'));
  }
  if (disabled) {
    textClassNames.push(getClassName('subsection__heading--disabled'));
  }
  if (className) {
    outerClassNames.push(className);
  }
  if (textClassName) {
    textClassNames.push(textClassName);
  }

  const anchorLink = `${name}`.toLowerCase().split(' ').join('-');

  return (
    <div className={outerClassNames.join(' ')} {...rest}>
      {anchor && name && (
        <a
          aria-label={name}
          href={`#${anchorLink}`}
          className={anchorClassNames.join(' ')}
        >
          §
        </a>
      )}
      {name && (
        <h3
          id={anchorLink}
          className={textClassNames.join(' ')}
          {...headingProps}
        >
          {name}
        </h3>
      )}
      {children}
    </div>
  );
};

Subsection.propTypes = {
  inheritColor: PropTypes.bool,
  anchor: PropTypes.bool,
  link: PropTypes.bool,
  padding: PropTypes.bool,
  name: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  textClassName: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  headingProps: PropTypes.object,
  children: PropTypes.node,
};

Subsection.defaultProps = {
  inheritColor: false,
  anchor: false,
  link: false,
  disabled: false,
  name: null,
  padding: true,
  className: null,
  textClassName: null,
  headingProps: null,
  style: null,
  children: null,
};

export default Subsection;
