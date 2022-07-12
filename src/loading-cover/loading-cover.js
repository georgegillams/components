import React from 'react';
import PropTypes from 'prop-types';

import Subsection from '../subsection';
import Skeleton from '../skeleton';

const LoadingCover = (props) => {
  const {
    loadingSkeleton: LoadingSkeleton,
    loading,
    error,
    children,
    ...rest
  } = props;

  const showLoadingMessage = loading || error;

  if (!showLoadingMessage) {
    return children || null;
  }

  return (
    <>
      {LoadingSkeleton && <LoadingSkeleton aria-label="Loading" {...rest} />}
      {error && (
        <Subsection
          name="This is taking a while. Maybe something isn't quite right..."
          padding={false}
          anchor={false}
        />
      )}
    </>
  );
};

LoadingCover.propTypes = {
  loading: PropTypes.bool,
  loadingSkeleton: PropTypes.elementType,
  error: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

LoadingCover.defaultProps = {
  loading: false,
  loadingSkeleton: Skeleton,
  error: false,
};

export default LoadingCover;
