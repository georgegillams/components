import React from 'react';
import { action } from '@storybook/addon-actions';

import Section from '../section';

import backgroundImage from './backgroundImage.png';

import Card, { applyStylesToAnchor } from './index';
import { CardWithoutTheme } from './card';
import Button, { BUTTON_TYPES } from '../button';
import Paragraph from '../paragraph';

export default { title: 'Atoms/Card', component: CardWithoutTheme };

export const Default = () => (
  <Card>
    <Section padding={false} name="Test" />{' '}
  </Card>
);
export const WithClick = () => (
  <Card onClick={action('Button clicked')}>
    <Section padding={false} name="Test" />{' '}
  </Card>
);
export const Href = () => (
  <Card href="/test">
    <Section padding={false} name="Test" />{' '}
  </Card>
);
export const UnpaddedWithHref = () => (
  <Card padded={false} href="/test">
    <Section padding={false} name="Test" />{' '}
  </Card>
);
export const WithFillImageAndHref = () => (
  <Card fillImageSrc={backgroundImage} href="/test">
    <Section padding={false} name="Test" />{' '}
  </Card>
);
export const LightWithHref = () => (
  <Card href="/test" light>
    <Section padding={false} name="Test" />{' '}
  </Card>
);
export const Highlighted = () => (
  <Card highlighted>
    <Section padding={false} name="Test" />{' '}
  </Card>
);
export const Disabled = () => (
  <Card disabled>
    <Section padding={false} name="Test" />{' '}
  </Card>
);
export const DisabledWithClick = () => (
  <Card disabled onClick={action('Button clicked')}>
    <Section padding={false} name="Test" />{' '}
  </Card>
);
export const DisabledWithHref = () => (
  <Card disabled href="/test">
    <Section padding={false} name="Test" />{' '}
  </Card>
);
export const NonAtomic = () => (
  <>
    <Card
      atomic={false}
      onClick={action(
        'Outer card clicked - triggers same behaviour as Main CTA',
      )}
    >
      <Section padding={false} name="Accessible non-atomic button card">
        <Paragraph style={{ marginBottom: '2rem' }}>
          Here is a card that contains CTAs. The outer card is not fully
          accessible to a screen-reader or other assistive-technology, as it has
          role="group" and tabindex="-1". However, this is desirable as we want
          users of AT to interact with individual sub-elements. The outer button
          is just a shortcut that matches behaviour of the first CTA inside.
          Therefore all users are capable of performing the main action,
          regardless of how they interact with it. Screen-reader users and
          keyboard users can focus the Main CTA and activate it.
        </Paragraph>
      </Section>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button
          onClick={(event) => {
            action('Main CTA clicked')();
            event.stopPropagation();
          }}
        >
          Main CTA
        </Button>
        <Button
          onClick={(event) => {
            action('CTA 1 clicked')();
            event.stopPropagation();
          }}
          buttonType={BUTTON_TYPES.secondary}
        >
          CTA 1
        </Button>
        <Button
          onClick={(event) => {
            action('CTA 2 clicked')();
            event.stopPropagation();
          }}
          buttonType={BUTTON_TYPES.secondary}
        >
          CTA 2
        </Button>
        <Button
          onClick={(event) => {
            action('CTA 3 clicked')();
            event.stopPropagation();
          }}
          buttonType={BUTTON_TYPES.secondary}
        >
          CTA 3
        </Button>
      </div>
    </Card>
  </>
);
export const NonAtomicWithHref = () => (
  <Card atomic={false} href="/test">
    <Section padding={false} name="Accessible non-atomic link card">
      <Paragraph style={{ marginBottom: '2rem' }}>
        Here is a card that contains links. The outer card is a simple
        container. There is a hidden, full-size anchor inside that fills the
        entire space, allowing users to click anywhere to navigate. The
        invisible anchor is inaccessible to a screen-reader or other
        assistive-technology, as it has aria-hidden="true". However, this is
        desirable as we want users of AT to interact with individual
        sub-elements. The full-size anchor is just a shortcut that matches
        behaviour of the first link inside. Therefore all users are capable of
        performing the main action, regardless of how they interact with it.
        Screen-reader users and keyboard users can focus the link and activate
        it.
      </Paragraph>
    </Section>
    <a href="https://duckduckgo.com">Link</a>
  </Card>
);

const AnchorComponent = applyStylesToAnchor((props) => (
  <a style={{ border: 'limegreen 10px solid' }} {...props} />
));
export const CustomAnchorComponent = () => (
  <Card atomic href="/test" hrefExternal anchorComponent={AnchorComponent}>
    Test
  </Card>
);
