import React from 'react';
import PropTypes from 'prop-types';
import { InnerWrapper, Line, OuterWrapper } from './burger-button.styles';

export interface BurgerButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  isOpen?: boolean;
}

const BurgerButton = (props: BurgerButtonProps) => {
  const { onClick, isOpen = false, ...rest } = props;

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

export default BurgerButton;
