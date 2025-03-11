import React from 'react';

import Button, { BUTTON_TYPES } from '../button';
import { OuterWrapper, SelectionBar } from './navigation-item.styles';

type NavigationItemProps = React.HTMLAttributes<HTMLDivElement> & {
  name: string;
  href: string;
  selected?: boolean;
};

const NavigationItem = (props: NavigationItemProps) => {
  const { name, href, selected, ...rest } = props;

  return (
    <OuterWrapper {...rest}>
      <li>
        <Button buttonType={BUTTON_TYPES.bouncy} href={href}>
          {name}
        </Button>
      </li>
      {selected && <SelectionBar />}
    </OuterWrapper>
  );
};

export default NavigationItem;
