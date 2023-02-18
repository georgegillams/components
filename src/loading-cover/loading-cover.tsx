import React from 'react';

import Subsection from '../subsection';
import Skeleton from '../skeleton';

export interface LoadingCoverProps
  extends React.HTMLAttributes<HTMLDivElement> {
  loading?: boolean;
  loadingSkeleton?: React.ElementType;
  error?: boolean;
  children: React.ReactNode;
}

const LoadingCover = (props: LoadingCoverProps) => {
  const {
    loadingSkeleton: LoadingSkeleton = Skeleton,
    loading,
    error,
    children,
    ...rest
  } = props;

  const showLoadingMessage = loading || error;

  if (!showLoadingMessage) {
    return children ? <>{children}</> : null;
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

export default LoadingCover;
