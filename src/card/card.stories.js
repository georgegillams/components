import React from 'react';
import { action } from '@storybook/addon-actions';

import Section from '../section';

import backgroundImage from './backgroundImage.png';

import Card from './index';

export default { title: 'Styled/Molecules/Card', component: Card };

export const Default = () => (
  <Card onClick={action('Button clicked')}>
    <Section padding={false} name="Test" />{' '}
  </Card>
);
export const Href = () => (
  <Card href="/test">
    <Section padding={false} name="Test" />{' '}
  </Card>
);
export const Unpadded = () => (
  <Card padded={false} href="/test">
    <Section padding={false} name="Test" />{' '}
  </Card>
);
export const WithFillImage = () => (
  <Card fillImageSrc={backgroundImage} href="/test">
    <Section padding={false} name="Test" />{' '}
  </Card>
);
export const Light = () => (
  <Card href="/test" light>
    <Section padding={false} name="Test" />{' '}
  </Card>
);
export const WithHref = () => (
  <Card href="/test">
    <Section padding={false} name="Test" />{' '}
  </Card>
);
export const Disabled = () => (
  <Card disabled>
    <Section disabled padding={false} name="Test" />{' '}
  </Card>
);
export const DisabledWithHref = () => (
  <Card disabled href="/test">
    <Section disabled padding={false} name="Test" />{' '}
  </Card>
);
export const NonAtomic = () => (
  <Card atomic={false} onClick={action('Button clicked')}>
    <Section padding={false} name="Test" />{' '}
    <a href="https://duckduckgo.com">Link</a>
  </Card>
);
export const NonAtomicWithHref = () => (
  <Card atomic={false} href="/test">
    <Section padding={false} name="Test" />{' '}
    <a href="https://duckduckgo.com">Link</a>
  </Card>
);
