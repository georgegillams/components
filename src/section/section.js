import PropTypes from 'prop-types';
import React from 'react';
import { SIZES } from '../text';
import { commonPropTypes, commonDefaultProps } from './constants';
import {
  Outer,
  StyledLink,
  StyledLinkContainer,
  StyledText,
} from './section.styles';

const Section = (props) => {
  const {
    padding,
    anchor,
    name,
    children,
    textClassName, // For backwards compatibility
    headingProps, // For backwards compatibility
    isSubsection,
    ...rest
  } = props;

  const anchorLink = `${name}`.toLowerCase().split(' ').join('-');

  return (
    <Outer {...rest}>
      {anchor && name && (
        <StyledLinkContainer isSubsection={isSubsection}>
          <StyledLink
            aria-label={name}
            href={`#${anchorLink}`}
            isSubsection={isSubsection}
          >
            §
          </StyledLink>
        </StyledLinkContainer>
      )}
      {name && (
        <StyledText
          size={isSubsection ? SIZES.lg : SIZES.xl}
          tagName={isSubsection ? 'h3' : 'h2'}
          id={anchorLink}
          anchor={anchor}
          padding={padding}
          isSubsection={isSubsection}
          {...headingProps}
        >
          {name}
        </StyledText>
      )}
      {children}
    </Outer>
  );
};

Section.propTypes = {
  ...commonPropTypes,
  isSubsection: PropTypes.bool,
};

Section.defaultProps = {
  ...commonDefaultProps,
  isSubsection: false,
};

export default Section;
