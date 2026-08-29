import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';

import Section from '../section';

import backgroundImage from './backgroundImage.png';

import Card, { applyStylesToAnchor } from './index';
import { CardWithoutTheme } from './card';
import Button, { BUTTON_TYPES } from '../button';
import Input from '../input';
import Modal from '../modal';
import Paragraph from '../paragraph';
import Text, { SIZES } from '../text';

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

const GOOGLE_URL = 'https://google.com';

export const ArticleRole = () => (
  <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
    <Card
      atomic={false}
      href={GOOGLE_URL}
      hrefExternal
      role="article"
      style={{ width: 'auto' }}
    >
      <Section padding={false} name="Google.com (role=article)" />
      <Paragraph style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <Button
          href={GOOGLE_URL}
          hrefExternal
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          Go to google.com
        </Button>
        <Button
          onClick={(event) => {
            event.stopPropagation();
            alert('Dismiss clicked');
          }}
          buttonType={BUTTON_TYPES.secondary}
        >
          Dismiss
        </Button>
        <Button
          onClick={(event) => {
            event.stopPropagation();
            alert('Quack clicked');
          }}
          buttonType={BUTTON_TYPES.secondary}
        >
          Quack
        </Button>
      </Paragraph>
    </Card>
  </div>
);

export const CardWithAccessibleFloatingHref = () => (
  <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
    <Card
      atomic={false}
      href={GOOGLE_URL}
      hrefExternal
      style={{ width: 'auto' }}
      floatingAnchorProps={
        {
          'aria-hidden': false,
          'aria-label': "Google.com",
          'tabIndex': 0,
        }
      }
    >
      <Section padding={false} name="Google.com (accessible floating href)" />
      <Paragraph style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <Button
          onClick={(event) => {
            event.stopPropagation();
            alert('Dismiss clicked');
          }}
          buttonType={BUTTON_TYPES.secondary}
        >
          Dismiss
        </Button>
        <Button
          onClick={(event) => {
            event.stopPropagation();
            alert('Quack clicked');
          }}
          buttonType={BUTTON_TYPES.secondary}
        >
          Quack
        </Button>
      </Paragraph>
    </Card>
  </div>
);

const nonAtomicActionsStyle = {
  display: 'flex',
  gap: '1rem',
  flexWrap: 'wrap' as const,
};

const cardStyle = { width: 'auto' };

const gridLabelStyle = {
  fontWeight: 600,
  alignSelf: 'center',
};

const gridColumnHeaderStyle = {
  ...gridLabelStyle,
  justifySelf: 'center',
};

const gridRowHeaderStyle = {
  ...gridLabelStyle,
  justifySelf: 'end',
  paddingRight: '1rem',
};

const atomicCardStyle = (row: number) => ({
  ...cardStyle,
  gridColumn: 2,
  gridRow: row + 1,
});

const nonAtomicCardStyle = (row: number) => ({
  ...cardStyle,
  gridColumn: 3,
  gridRow: row + 1,
});

const loginFormStyle = {
  display: 'flex',
  flexDirection: 'column' as const,
  gap: '1rem',
};

const loginFieldStyle = {
  display: 'flex',
  flexDirection: 'column' as const,
  gap: '0.5rem',
};

const loginActionsStyle = {
  display: 'flex',
  gap: '1rem',
  marginTop: '0.5rem',
};

const withStopPropagation =
  (handler?: (event: React.MouseEvent<HTMLElement>) => void) =>
  (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    handler?.(event);
  };

export const QuacksLikeAButtonExamples = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const openLoginModal = () => setLoginOpen(true);
  const closeLoginModal = () => setLoginOpen(false);

  const handleLogin = () => {
    action('Log in submitted')({ username, password });
    closeLoginModal();
  };

  const handleLoginSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    handleLogin();
  };

  return (
    <>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'auto auto auto',
          gap: '1rem',
          alignItems: 'start',
          justifyItems: 'start',
        }}
      >
        <Text
          size={SIZES.lg}
          style={{ ...gridColumnHeaderStyle, gridColumn: 2, gridRow: 1 }}
        >
          Atomic
        </Text>
        <Text
          size={SIZES.lg}
          style={{ ...gridColumnHeaderStyle, gridColumn: 3, gridRow: 1 }}
        >
          Non-atomic
        </Text>

        <Text
          size={SIZES.lg}
          style={{ ...gridRowHeaderStyle, gridColumn: 1, gridRow: 2 }}
        >
          Link
        </Text>
        <Text
          size={SIZES.lg}
          style={{ ...gridRowHeaderStyle, gridColumn: 1, gridRow: 3 }}
        >
          Button
        </Text>
        <Text
          size={SIZES.lg}
          style={{ ...gridRowHeaderStyle, gridColumn: 1, gridRow: 4 }}
        >
          Dumb container
        </Text>

        <Card href={GOOGLE_URL} hrefExternal style={atomicCardStyle(1)}>
          <Section padding={false} name="Go to google.com" />
        </Card>

        <Card onClick={openLoginModal} style={atomicCardStyle(2)}>
          <Section padding={false} name="Log in" />
        </Card>

        <Card style={atomicCardStyle(3)}>
          <Section padding={false} name="Status: OK" />
        </Card>
        <Card style={atomicCardStyle(4)} aria-label="Status: OK" role="text">
          <Section aria-hidden="true" padding={false} name="Status: OK">
            <Paragraph aria-hidden="true">
              (Uses aria-label and aria-hidden to act as a single element.)
            </Paragraph>
          </Section>
        </Card>

        <Card
          atomic={false}
          href={GOOGLE_URL}
          hrefExternal
          style={nonAtomicCardStyle(1)}
        >
          <Section padding={false} name="Google.com" />
          <div style={nonAtomicActionsStyle}>
            <Button
              href={GOOGLE_URL}
              hrefExternal
              onClick={withStopPropagation()}
            >
              Go to google.com
            </Button>
            <Button
              onClick={withStopPropagation(() => alert('Dismiss clicked'))}
              buttonType={BUTTON_TYPES.secondary}
            >
              Dismiss
            </Button>
            <Button
              onClick={withStopPropagation(() => alert('Quack clicked'))}
              buttonType={BUTTON_TYPES.secondary}
            >
              Quack
            </Button>
          </div>
        </Card>

        <Card
          atomic={false}
          onClick={openLoginModal}
          style={nonAtomicCardStyle(2)}
        >
          <Section padding={false} name="Log in" />
          <div style={nonAtomicActionsStyle}>
            <Button onClick={withStopPropagation(openLoginModal)}>
              Log in
            </Button>
            <Button
              onClick={withStopPropagation(() => alert('Dismiss clicked'))}
              buttonType={BUTTON_TYPES.secondary}
            >
              Dismiss
            </Button>
            <Button
              onClick={withStopPropagation(() => alert('Quack clicked'))}
              buttonType={BUTTON_TYPES.secondary}
            >
              Quack
            </Button>
          </div>
        </Card>

        <Card atomic={false} style={nonAtomicCardStyle(3)}>
          <Section padding={false} name="Look at all these options" />
          <div style={nonAtomicActionsStyle}>
            <a
              href={GOOGLE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={withStopPropagation()}
            >
              Go to google.com
            </a>
            <Button
              onClick={withStopPropagation(() => alert('Dismiss clicked'))}
              buttonType={BUTTON_TYPES.secondary}
            >
              Dismiss
            </Button>
            <Button
              onClick={withStopPropagation(() => alert('Quack clicked'))}
              buttonType={BUTTON_TYPES.secondary}
            >
              Quack
            </Button>
          </div>
        </Card>
      </div>

      <Modal open={loginOpen} onClose={closeLoginModal} title="Log in">
        <form onSubmit={handleLoginSubmit} style={loginFormStyle}>
          <div style={loginFieldStyle}>
            <label htmlFor="login-username">Username</label>
            <Input
              id="login-username"
              name="username"
              value={username}
              onChange={(event) =>
                setUsername((event.target as HTMLInputElement).value)
              }
              inputProps={{
                autoComplete: 'username',
              }}
            />
          </div>
          <div style={loginFieldStyle}>
            <label htmlFor="login-password">Password</label>
            <Input
              id="login-password"
              name="password"
              type="password"
              value={password}
              onChange={(event) =>
                setPassword((event.target as HTMLInputElement).value)
              }
              inputProps={{
                autoComplete: 'current-password',
              }}
            />
          </div>
          <div style={loginActionsStyle}>
            <Button onClick={handleLogin}>Log in</Button>
            <Button
              onClick={closeLoginModal}
              buttonType={BUTTON_TYPES.secondary}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
};
