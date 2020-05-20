import PropTypes from 'prop-types';
import React from 'react';
import { cssModules } from '../helpers/cssModules';

import TextLink from './TextLink';
import STYLES from './typography.scss';

const getClassName = cssModules(STYLES); // REGEX_REPLACED

const SubSection = props => {
  const {
    link,
    fancy,
    light,
    name,
    anchor,
    className,
    hover,
    noPadding,
    textClassName,
    children,
    ...rest
  } = props;

  const classNameFinal = [getClassName('typography__main')];
  const textClassNameFinal = [
    getClassName('typography__text', 'typography__text--subsection'),
  ];
  const anchorClassNames = [getClassName('typography__anchor-link')];
  if (hover) {
    if (light) {
      textClassNameFinal.push(getClassName('typography--hovering-light'));
    } else {
      textClassNameFinal.push(getClassName('typography--hovering'));
    }
  }
  if (anchor) {
    textClassNameFinal.push(getClassName('typography__text--with-anchor-link'));
  }
  if (light) {
    classNameFinal.push(getClassName('typography--light'));
    textClassNameFinal.push(getClassName('typography--light'));
  }
  if (link) {
    classNameFinal.push(getClassName('typography__link'));
    textClassNameFinal.push(getClassName('typography__link'));
  }
  if (noPadding) {
    classNameFinal.push(getClassName('typography--no-padding'));
    textClassNameFinal.push(getClassName('typography--no-padding'));
    anchorClassNames.push(getClassName('typography__anchor-link--no-padding'));
  }
  if (fancy) {
    classNameFinal.push(getClassName('typography--fancy'));
    textClassNameFinal.push(getClassName('typography--fancy'));
  }
  if (className) {
    classNameFinal.push(className);
  }
  if (textClassName) {
    textClassNameFinal.push(textClassName);
  }

  const anchorLink = `${name}`
    .toLowerCase()
    .split(' ')
    .join('-');

  return (
    <div className={classNameFinal.join(' ')} {...rest}>
      {anchor && name && (
        <TextLink
          aria-label={name}
          href={`#${anchorLink}`}
          className={anchorClassNames.join(' ')}
        >
          §
        </TextLink>
      )}
      {name && (
        <h3 id={anchorLink} className={textClassNameFinal.join(' ')}>
          {name}
        </h3>
      )}
      {children}
    </div>
  );
};

SubSection.propTypes = {
  hover: PropTypes.bool,
  link: PropTypes.bool,
  fancy: PropTypes.bool,
  light: PropTypes.bool,
  anchor: PropTypes.bool,
  noPadding: PropTypes.bool,
  name: PropTypes.string,
  className: PropTypes.string,
  textClassName: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node,
};

SubSection.defaultProps = {
  hover: false,
  link: false,
  fancy: false,
  anchor: true,
  name: null,
  light: false,
  noPadding: false,
  className: null,
  textClassName: null,
  style: null,
  children: null,
};

export default SubSection;
