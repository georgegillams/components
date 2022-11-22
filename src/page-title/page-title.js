import React from 'react';
import PropTypes from 'prop-types';

import TextLink from '../text-link';
import { Heading, LinkContainer } from './page-title.styles';
import { AnimationWrapper, ScrollAnimationWrapper } from '../effects';

const PageTitle = (props) => {
  const {
    padding,
    link,
    anchorComponent: AnchorComponent,
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

PageTitle.propTypes = {
  padding: PropTypes.bool,
  name: PropTypes.string,
  link: PropTypes.shape({
    to: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }),
  linkProps: PropTypes.object,
  children: PropTypes.node,
  anchorComponent: PropTypes.func,
};

PageTitle.defaultProps = {
  padding: true,
  name: null,
  link: null,
  linkProps: null,
  children: null,
  anchorComponent: (props) => <TextLink {...props} />,
};

export default PageTitle;
