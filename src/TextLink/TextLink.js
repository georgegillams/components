import React from 'react';
import PropTypes from 'prop-types';

import { cssModules } from '../helpers/cssModules';
import NewWindow from '../Icons/NewWindow';
import { THEMES } from '../Theming';

import STYLES from './text-link.scss';

const getClassName = cssModules(STYLES); // REGEX_REPLACED

const TextLink = React.forwardRef((props, ref) => {
  const {
    href,
    hrefExternal,
    className,
    textClassName,
    children,
    onClick,
    theme,
    ...rest
  } = props;

  const classNameFinal = [getClassName('text-link')];
  classNameFinal.push(getClassName('text-link--text-link'));
  classNameFinal.push(getClassName('text-link--no-padding'));
  if (theme === THEMES.allWhite) {
    classNameFinal.push(getClassName('text-link--text-link--all-white'));
  }
  classNameFinal.push(getClassName('text-link--inline'));
  if (className) {
    classNameFinal.push(className);
  }

  const targettingProps = hrefExternal
    ? {
        target: '_blank',
        rel: 'noopener noreferrer',
      }
    : {};

  return (
    <a
      href={href}
      className={classNameFinal.join(' ')}
      onClick={onClick}
      ref={ref}
      aria-label={hrefExternal ? `${children} (opens in a new tab)` : null}
      {...targettingProps}
      {...rest}
    >
      {children}
      {hrefExternal && (
        <div className={getClassName('text-link__icon-container')}>
          <NewWindow className={getClassName('text-link__icon')} />
        </div>
      )}
    </a>
  );
});

TextLink.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  href: PropTypes.string,
  hrefExternal: PropTypes.bool,
  textClassName: PropTypes.string,
  className: PropTypes.string,
  theme: PropTypes.string,
};

TextLink.defaultProps = {
  onClick: null,
  href: null,
  hrefExternal: false,
  children: null,
  textClassName: null,
  className: null,
  theme: null,
};

export default TextLink;
