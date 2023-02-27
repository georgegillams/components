import React from 'react';
import PropTypes from 'prop-types';

import TextLink from '../text-link';
import { Heading, LinkContainer } from './page-title.styles';
import { AnimationWrapper, ScrollAnimationWrapper } from '../effects';
import { TextLinkProps } from '../text-link/text-link';

export interface PageTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  name?: string;
  link?: {
    to: string;
    text: string;
  };
  padding?: boolean;
  anchorComponent?: React.ComponentType<HTMLAnchorElement>;
  linkProps?: any;
}

const PageTitle = (props: PageTitleProps) => {
  const {
    padding = true,
    link,
    anchorComponent: AnchorComponent = (p: TextLinkProps) => (
      <TextLink {...p} />
    ),
    name,
    linkProps,
    children,
    ...rest
  } = props;

  let linkHref = null;
  let linkText = null;
  let hasLink = false;
  if (link && link.to && link.text) {
    linkHref = link.to;
    linkText = `⇠ ${link.text}`;
    hasLink = true;
  }

  return (
    <>
      {hasLink && (
        <AnimationWrapper>
          <LinkContainer padding={padding}>
            <AnchorComponent href={linkHref} {...linkProps}>
              {linkText}
            </AnchorComponent>
          </LinkContainer>
        </AnimationWrapper>
      )}
      {name && (
        <AnimationWrapper>
          <Heading padding={padding} hasLink={hasLink} {...rest}>
            {name}
          </Heading>
        </AnimationWrapper>
      )}
      {children}
    </>
  );
};

export default PageTitle;
