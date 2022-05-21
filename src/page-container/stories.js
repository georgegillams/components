/* eslint-disable react/prop-types */
import React from 'react';

import PageContainer, { WIDTHS } from './index';

export default { title: 'Page container', component: PageContainer };

const content = (
  <>
    <h1 style={{ marginTop: '0' }}>Test</h1>
    <p>Stuff</p>
  </>
);

export const Default = () => (
  <div style={{ backgroundColor: 'green' }}>
    <PageContainer>
      <div
        style={{ width: '100%', height: '15rem', backgroundColor: 'orange' }}
      >
        {content}
      </div>
    </PageContainer>
  </div>
);

export const WithBleedingMarginTop = () => (
  <div style={{ backgroundColor: 'green' }}>
    <PageContainer>
      <div
        style={{
          marginTop: '3rem',
          width: '100%',
          height: '15rem',
          backgroundColor: 'orange',
        }}
      >
        {content}
      </div>
    </PageContainer>
  </div>
);

export const Centred = () => (
  <div style={{ backgroundColor: 'green' }}>
    <PageContainer centred>
      <div
        style={{ width: '100%', height: '15rem', backgroundColor: 'orange' }}
      >
        {content}
      </div>
    </PageContainer>
  </div>
);

export const CentredWithElements = () => (
  <div style={{ backgroundColor: 'green' }}>
    <PageContainer centred>{content}</PageContainer>
  </div>
);

export const Prose = () => (
  <div style={{ backgroundColor: 'green' }}>
    <PageContainer width={WIDTHS.prose}>
      <div
        style={{ width: '100%', height: '15rem', backgroundColor: 'orange' }}
      >
        {content}
      </div>
    </PageContainer>
  </div>
);

export const FullWidth = () => (
  <div style={{ backgroundColor: 'green' }}>
    <PageContainer width={WIDTHS.fullWidth}>
      <div
        style={{ width: '100%', height: '15rem', backgroundColor: 'orange' }}
      >
        {content}
      </div>
    </PageContainer>
  </div>
);

export const BottomPadding = () => (
  <div style={{ backgroundColor: 'green' }}>
    <PageContainer bottomPadding>
      <div
        style={{ width: '100%', height: '15rem', backgroundColor: 'orange' }}
      >
        {content}
      </div>
    </PageContainer>
  </div>
);
