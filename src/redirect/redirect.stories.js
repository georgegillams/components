import React from 'react';

import Redirect from './index';

export default { title: 'Organisms/Redirect', component: Redirect };

export const Default = () => (
  <Redirect
    name="You are now being redirected to our contact page"
    to="/contact"
  />
);

export const External = () => (
  <Redirect
    name="You are now being redirected to Flickr"
    to="https://flickr.com/"
  />
);
