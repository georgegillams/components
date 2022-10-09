import React from 'react';
import EventPatch from '../event-patch';

import MedalShelf from './index';

export default {
  title: 'Styled/Molecules/Medal shelf',
  component: MedalShelf,
};

export const Default = () => (
  <MedalShelf>
    <EventPatch
      background="red"
      foreground="yellow"
      title="Event name"
      year="2022"
      stravaLink="https://strava.com"
    />
    <EventPatch
      background="red"
      foreground="yellow"
      title="Event name"
      year="2022"
      stravaLink="https://strava.com"
    />
    <EventPatch
      background="red"
      foreground="yellow"
      title="Event name"
      year="2022"
      stravaLink="https://strava.com"
    />
    <EventPatch
      background="red"
      foreground="yellow"
      title="Event name"
      year="2022"
      stravaLink="https://strava.com"
    />
    <EventPatch
      background="red"
      foreground="yellow"
      title="Event name"
      year="2022"
      stravaLink="https://strava.com"
    />
  </MedalShelf>
);
