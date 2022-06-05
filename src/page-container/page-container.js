import React from 'react';
import PropTypes from 'prop-types';
import { StyledPageContainer } from './page-container.styles';
import { WIDTHS } from './constants';

const PageContainer = (props) => {
  return <StyledPageContainer {...props} />;
};

PageContainer.propTypes = {
  width: PropTypes.oneOf(Object.keys(WIDTHS)),
  className: PropTypes.string,
  centred: PropTypes.bool,
  bottomPadding: PropTypes.bool,
};

PageContainer.defaultProps = {
  width: WIDTHS.default,
  className: null,
  centred: false,
  bottomPadding: false,
};

export default PageContainer;
