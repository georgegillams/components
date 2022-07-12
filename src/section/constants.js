import PropTypes from 'prop-types';

export const commonPropTypes = {
  anchor: PropTypes.bool,
  padding: PropTypes.bool,
  name: PropTypes.string,
  children: PropTypes.node,
  textClassName: PropTypes.string, // For backwards compatibility
  headingProps: PropTypes.object, // For backwards compatibility
};

export const commonDefaultProps = {
  anchor: false,
  name: null,
  padding: true,
  children: null,
  textClassName: null,
  headingProps: null,
};
