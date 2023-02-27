import React from 'react';

import PageTitle from './index';
import { JS_CLASSNAME } from '../js-feature-detector';
import { TextLinkProps } from '../text-link/text-link';

export default { title: 'Molecules/Page title', component: PageTitle };

export const Title = () => (
  <PageTitle name="Test">
    <div style={{ width: '100%', height: '15rem', backgroundColor: 'red' }} />
  </PageTitle>
);

export const JSEnabled = () => (
  <div className={JS_CLASSNAME}>
    <PageTitle name="Test">
      <div style={{ width: '100%', height: '15rem', backgroundColor: 'red' }} />
    </PageTitle>
  </div>
);

export const JSEnabledWithLink = () => (
  <div className={JS_CLASSNAME}>
    <PageTitle name="Test" link={{ to: '/test', text: 'Back' }}>
      <div style={{ width: '100%', height: '15rem', backgroundColor: 'red' }} />
    </PageTitle>
  </div>
);

export const WithLink = () => (
  <PageTitle link={{ to: '/test', text: 'Back' }} name="Test">
    <div style={{ width: '100%', height: '15rem', backgroundColor: 'red' }} />
  </PageTitle>
);
export const Centered = () => (
  <PageTitle
    link={{ to: '/test', text: 'Back' }}
    name="Test"
    style={{ textAlign: 'center' }}
  >
    <div style={{ width: '100%', height: '15rem', backgroundColor: 'red' }} />
  </PageTitle>
);
export const NoPadding = () => (
  <PageTitle link={{ to: '/test', text: 'Back' }} name="Test" padding={false}>
    <div style={{ width: '100%', height: '15rem', backgroundColor: 'red' }} />
  </PageTitle>
);
export const WithCustomLinkComponent = () => (
  <PageTitle
    anchorComponent={(props) => (
      <div
        style={{
          padding: '1rem 0',
          background: 'white',
          border: 'limegreen 10px solid',
        }}
      >
        {/* @ts-ignore */}
        <a {...props} />
      </div>
    )}
    link={{ to: '/test', text: 'Back' }}
    name="Test"
  >
    <div style={{ width: '100%', height: '15rem', backgroundColor: 'red' }} />
  </PageTitle>
);
export const TitleWithCustomProps = () => (
  <PageTitle name="Test" id="test-this">
    <div style={{ width: '100%', height: '15rem', backgroundColor: 'red' }} />
  </PageTitle>
);
export const WithLinkAndCustomLinkProps = () => (
  <PageTitle
    linkProps={{ id: 'test-this' }}
    link={{ to: '/test', text: 'Back' }}
    name="Test"
  >
    <div style={{ width: '100%', height: '15rem', backgroundColor: 'red' }} />
  </PageTitle>
);
