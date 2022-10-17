import React from 'react';
import EventPatch from './index';

export default {
  title: 'Molecules/Event patch',
  component: EventPatch,
};

export const Default = () => (
  <EventPatch
    background="red"
    foreground="yellow"
    title="Event name"
    year="2022"
    stravaLink="https://strava.com"
  />
);
export const Short = () => (
  <EventPatch
    background="red"
    foreground="yellow"
    title="S"
    year="2022"
    stravaLink="https://strava.com"
  />
);
export const Long = () => (
  <EventPatch
    background="red"
    foreground="yellow"
    title="Longer event name"
    year="2022"
    stravaLink="https://strava.com"
  />
);
export const NoStrava = () => (
  <EventPatch
    background="red"
    foreground="yellow"
    title="Event name"
    year="2022"
  />
);
