import React from 'react';

import BlogCard from './index';
import { TAG_TYPES } from '../tag';
import { BlogCardWithoutTheme } from './blog-card';

const image = 'https://via.placeholder.com/460x460/red/white?text=image';

export default {
  title: 'Molecules/Blog card',
  component: BlogCardWithoutTheme,
};

export const Default = () => (
  <BlogCard
    ariaLabel="This is the aria label"
    publishedDate={'15 September 2022'}
    href="/test"
    title="Title here"
    tags={[TAG_TYPES.events, TAG_TYPES.photography]}
  />
);

export const WithImage = () => (
  <BlogCard
    ariaLabel="This is the aria label"
    publishedDate={'15 September 2022'}
    href="/test"
    title="Title here"
    tags={[TAG_TYPES.events, TAG_TYPES.photography]}
    imageBorder="orchid"
    imageSrc={image}
  />
);
