import React from 'react';

import PageTitle from './index';

export default { title: 'Styled/Organisms/Page title', component: PageTitle };

export const Title = () => (
  <PageTitle name="Test">
    <div style={{ width: '100%', height: '15rem', backgroundColor: 'red' }} />
  </PageTitle>
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
    linkProvider={(props) => (
      <div style={{ padding: '1rem 0', background: 'lightgreen' }}>
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
