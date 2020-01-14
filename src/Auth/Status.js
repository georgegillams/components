import React from 'react';
import PropTypes from 'prop-types';

import { Section } from '../Typography';

const Status = props => {
  const { success, error, ...rest } = props;

  if (success || error) {
    return (
      <Section name="STATUS" {...rest}>
        {success && <span>SUCCESS</span>}
        {error && <span>{error}</span>}
      </Section>
    );
  }

  return null;
};

Status.propTypes = {
  children: PropTypes.node.isRequired,
  success: PropTypes.bool,
  error: PropTypes.string,
};

Status.defaultProps = {
  success: false,
  error: null,
};

export default Status;
