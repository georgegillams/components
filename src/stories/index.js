import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import  GGButton ,{BurgerButton} from '../components/GGButton';

import { Button, Welcome } from '@storybook/react/demo';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf('GGButton', module)
  .add('with text', () => <GGButton onClick={action('clicked')}>Hello GGButton</GGButton>)
  .add('with some emoji', () => (
    <GGButton onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </GGButton>
  ));

storiesOf('BurgerButton', module)
  .add('defualt', () => <BurgerButton onClick={action('clicked')}></BurgerButton>);
