import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Paragraph from '../paragraph';
import TextLink from '../text-link';
import Section from '../section';

const Redirect = (props) => {
  const [isTimeToRedirect, setIsTimeToRedirect] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsTimeToRedirect(true);
    }, 2000);

    const cleanUp = () => {
      clearTimeout(timeout);
    };
    return cleanUp;
  }, []);

  const { name, to, onRedirect, ...rest } = props;

  const performRedirect = () => {
    if (onRedirect) {
      onRedirect(to);
    } else {
      document.location = to;
    }
  };

  if (isTimeToRedirect) {
    performRedirect();
  }

  return (
    <div {...rest}>
      <Section name={name || 'Redirecting in 2 seconds...'}>
        <Paragraph>
          <TextLink onClick={performRedirect}>
            Not been redirected? Click here.
          </TextLink>
        </Paragraph>
      </Section>
    </div>
  );
};

Redirect.propTypes = {
  to: PropTypes.string.isRequired,
  name: PropTypes.string,
  onRedirect: PropTypes.func,
};

Redirect.defaultProps = {
  name: null,
  onRedirect: null,
};

export default Redirect;
