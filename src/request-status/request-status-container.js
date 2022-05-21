import React from 'react';
import PropTypes from 'prop-types';

import RequestStatus from './request-status';
import { Container } from './request-status.styles';

const RequestStatusContainer = (props) => {
  const { statuses } = props;

  const showing = statuses && statuses.length > 0;

  return (
    <Container showing={showing}>
      {statuses &&
        statuses.map &&
        statuses.map((status) => (
          <RequestStatus key={status.message} status={status} />
        ))}
    </Container>
  );
};

RequestStatusContainer.propTypes = {
  statuses: PropTypes.arrayOf(PropTypes.object),
};

RequestStatusContainer.defaultProps = {
  statuses: [],
};

export default RequestStatusContainer;
