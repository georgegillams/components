import React, { useState } from 'react';
import { boolean, select } from '@storybook/addon-knobs';

import TextLink from '../text-link';

import InfoCell, { INFO_CELL_STYLES } from './index';

export default {
  title: 'Organisms/Info cell',
  component: InfoCell,
};

const aux = (
  <div style={{ width: '5rem', height: '100%', backgroundColor: 'red' }} />
);

export const Default = () => (
  <div className={select('JS enabled', ['js', 'no-js'], 'js')}>
    <InfoCell
      hasBeenMostlyInView={boolean('hasBeenMostlyInView', true)}
      title="Title"
      content={<TextLink href="/test">Content</TextLink>}
      aux={aux}
      cellStyle={select(
        'Cell style',
        Object.values(INFO_CELL_STYLES),
        INFO_CELL_STYLES.light,
      )}
    />
  </div>
);
