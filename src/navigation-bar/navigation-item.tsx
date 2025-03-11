import React from 'react';

import Button, { BUTTON_TYPES } from '../button';
import { OuterWrapper, SelectionBar, StyledLi } from './navigation-item.styles';

type NavigationItemProps = React.HTMLAttributes<HTMLDivElement> & {
  name: string;
  href: string;
  selected?: boolean;
};

const NavigationItem = (props: NavigationItemProps) => {
  const { name, href, selected, ...rest } = props;

  return (
    <OuterWrapper {...rest}>
      <StyledLi>
        <Button buttonType={BUTTON_TYPES.bouncy} href={href}>
          {name}
        </Button>
      </StyledLi>
      {selected && <SelectionBar />}
    </OuterWrapper>
  );
};

export default NavigationItem;
