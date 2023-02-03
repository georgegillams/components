import PropTypes from 'prop-types';
import React from 'react';
import { SIZE, TAG_NAME } from '../text';
import {
  Outer,
  StyledLink,
  StyledLinkContainer,
  StyledText,
} from './section.styles';

export interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: boolean;
  anchor?: boolean;
  name?: string;
  children?: React.ReactNode;
  headingProps?: object;
  isSubsection?: boolean;
}

const Section = (props: SectionProps) => {
  const {
    padding = false,
    anchor = false,
    name,
    children,
    headingProps,
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
          size={isSubsection ? SIZE.lg : SIZE.xl}
          tagName={isSubsection ? TAG_NAME.h3 : TAG_NAME.h2}
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
