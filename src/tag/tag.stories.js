import React from 'react';

import Tag, { TAG_TYPES } from './index';

export default { title: 'Molecules/Tag', component: Tag };

export const Tech = () => <Tag type={TAG_TYPES.tech}>A tech tag</Tag>;
export const Travel = () => <Tag type={TAG_TYPES.travel}>A travel tag</Tag>;
export const Photography = () => (
  <Tag type={TAG_TYPES.photography}>A photography tag</Tag>
);
export const Events = () => <Tag type={TAG_TYPES.events}>A events tag</Tag>;
export const Security = () => (
  <Tag type={TAG_TYPES.security}>A security tag</Tag>
);
