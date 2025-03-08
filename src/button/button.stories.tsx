/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from 'react';
import { action } from '@storybook/addon-actions';

import Button, {
  BUTTON_SIZES,
  BUTTON_TYPES,
  applyStylesToAnchor,
} from './index';
import { ButtonProps, ButtonWithoutTheme } from './button';

export interface ButtonStoryProps extends ButtonProps {
  dark?: boolean;
  focus?: boolean;
}

const ButtonStory = (props: ButtonStoryProps) => {
  const { dark, focus, ...rest } = props;
  const button = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (focus && button.current) {
      button.current.focus();
    }
  }, [focus, button]);

  return (
    <div
      style={{
        backgroundColor: dark ? '#1e1e1e' : 'transparent',
      }}
    >
      <Button ref={button} onClick={action('Button clicked')} {...rest}>
        Button
      </Button>
    </div>
  );
};

export default {
  title: 'Atoms/Button',
  component: ButtonWithoutTheme,
};

export const Primary = () => <ButtonStory />;
export const Focused = () => <ButtonStory focus />;

export const Large = () => <ButtonStory size={BUTTON_SIZES.large} />;
export const Secondary = () => (
  <ButtonStory buttonType={BUTTON_TYPES.secondary} />
);
export const Bouncy = () => <ButtonStory buttonType={BUTTON_TYPES.bouncy} />;
export const Destructive = () => (
  <ButtonStory buttonType={BUTTON_TYPES.destructive} />
);
export const Loading = () => <ButtonStory loading />;
export const Disabled = () => <ButtonStory disabled />;
export const Href = () => <ButtonStory href="/test" />;
export const SideBySide = () => (
  <div>
    <Button>Button</Button>
    <Button href="/test">Button</Button>
  </div>
);
export const ExternalHref = () => (
  <ButtonStory hrefExternal href="https://duckduckgo.com/" />
);

const AnchorComponent = applyStylesToAnchor((props) => (
  <a style={{ border: 'limegreen 10px solid' }} {...props} />
));
export const CustomAnchorComponent = () => (
  <ButtonStory
    hrefExternal
    href="https://duckduckgo.com/"
    anchorComponent={AnchorComponent}
  />
);
