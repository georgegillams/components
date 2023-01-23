import PropTypes from 'prop-types';
import React from 'react';
import { SIZES } from '../text';
import {
  Outer,
  StyledLink,
  StyledLinkContainer,
  StyledText,
} from './section.styles';

export interface SectionProps {
  padding?: boolean;
  anchor?: boolean;
  name?: string;
  children?: React.ReactNode;
  headingProps?: object; // For backwards compatibility
  isSubsection?: boolean;
}

const Section = (props: SectionProps) => {
  const {
    padding = false,
    anchor = false,
    name,
    children,
    headingProps, // For backwards compatibility
    isSubsection = false,
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

export default Section;
