import React from 'react';
import PropTypes from 'prop-types';
import { InnerWrapper, Line, OuterWrapper } from './burger-button.styles';

const BurgerButton = (props) => {
  const { onClick, isOpen, ...rest } = props;

  return (
    <OuterWrapper
      type="button"
      aria-label="Menu"
      aria-expanded={!!isOpen}
      onClick={onClick}
      {...rest}
    >
      <InnerWrapper>
        <Line isOpen={isOpen} />
        <Line isOpen={isOpen} />
        <Line isOpen={isOpen} />
      </InnerWrapper>
    </OuterWrapper>
  );
};

BurgerButton.propTypes = {
  isOpen: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  lineClassName: PropTypes.string,
};

BurgerButton.defaultProps = {
  isOpen: false,
  onClick: null,
  className: null,
  lineClassName: null,
};

export default BurgerButton;
