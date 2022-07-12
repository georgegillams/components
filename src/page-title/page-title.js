import React from 'react';
import PropTypes from 'prop-types';

import TextLink from '../text-link';
import { Heading, LinkContainer } from './page-title.styles';

const PageTitle = (props) => {
  const {
    padding,
    link,
    linkProvider: LinkProvider,
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
        <LinkContainer padding={padding}>
          <LinkProvider href={linkHref} {...linkProps}>
            {linkText}
          </LinkProvider>
        </LinkContainer>
      )}
      {name && (
        <Heading padding={padding} hasLink={hasLink} {...rest}>
          {name}
        </Heading>
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
  linkProvider: PropTypes.func,
};

PageTitle.defaultProps = {
  padding: true,
  name: null,
  link: null,
  linkProps: null,
  children: null,
  linkProvider: (props) => <TextLink {...props} />,
};

export default PageTitle;
