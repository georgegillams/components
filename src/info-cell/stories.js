import React, { useState } from 'react';
import { boolean } from '@storybook/addon-knobs';

import TextLink from '../text-link';

import InfoCell, { INFO_CELL_STYLES } from './index';

export default {
  title: 'Styled/Organisms/Info cell',
  component: InfoCell,
};

export const Default = () => (
  <div className="js">
    <InfoCell
      hasBeenMostlyInView={boolean('hasBeenMostlyInView', true)}
      title="Title"
      content={<TextLink href="/test">Content</TextLink>}
      aux={
        <div
          style={{ width: '5rem', height: '5rem', backgroundColor: 'red' }}
        />
      }
    />
  </div>
);

export const NoAux = () => (
  <div className="js">
    <InfoCell
      hasBeenMostlyInView={boolean('hasBeenMostlyInView', true)}
      title="Title"
      content={<TextLink href="/test">Content</TextLink>}
    />
  </div>
);
export const NoAuxDark = () => (
  <div className="js">
    <InfoCell
      hasBeenMostlyInView={boolean('hasBeenMostlyInView', true)}
      title="Title"
      cellStyle={INFO_CELL_STYLES.dark}
      content={<TextLink href="/test">Content</TextLink>}
    />
  </div>
);

export const InView = () => (
  <div className="js">
    <InfoCell
      hasBeenMostlyInView={true}
      title="Title"
      content={<TextLink href="/test">Content</TextLink>}
    />
  </div>
);

export const OutOfView = () => (
  <div className="js">
    <InfoCell
      hasBeenMostlyInView={true}
      title="Title"
      content={<TextLink href="/test">Content</TextLink>}
    />
  </div>
);

export const OutOfViewNoJs = () => (
  <div className="no-js">
    <InfoCell
      hasBeenMostlyInView={true}
      title="Title"
      content={<TextLink href="/test">Content</TextLink>}
    />
  </div>
);
