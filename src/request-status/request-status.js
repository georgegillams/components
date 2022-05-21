import React from 'react';
import PropTypes from 'prop-types';
import { StatusItem } from './request-status.styles';

const RequestStatus = (props) => {
  const { status, ...rest } = props;
  const { type, message } = status;

  return (
    <StatusItem type={type} {...rest}>
      {message}
    </StatusItem>
  );
};

RequestStatus.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  status: PropTypes.object.isRequired,
  className: PropTypes.string,
};

RequestStatus.defaultProps = {
  className: null,
};

export default RequestStatus;
