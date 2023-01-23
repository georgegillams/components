import React from 'react';
import PropTypes from 'prop-types';
import { InnerWrapper, Line, OuterWrapper } from './burger-button.styles';

export type BurgerButtonProps = {
  onClick?: () => void;
  isOpen?: boolean;
};

const BurgerButton = (props: BurgerButtonProps) => {
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
};

BurgerButton.defaultProps = {
  isOpen: false,
  onClick: null,
};

export default BurgerButton;
