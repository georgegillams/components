import React from 'react';
import { storiesOf } from '@storybook/react';

import Quote from './index';

storiesOf('Styled/Molecules/Quote', module).add('default', () => (
  <Quote>Lorem ipse dolor sit amet.</Quote>
));
// .add('themed', () => (
//   <div className={getClassName('stories__themed')}>
//     <Quote>Lorem ipse dolor sit amet.</Quote>
//   </div>
// ));
