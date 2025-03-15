import React from 'react';
import PropTypes from 'prop-types';

import StravaIcon from '../icon/strava';
import {
  EventName,
  EventYear,
  LinkContainer,
  StravaLink,
  Wrapper,
} from './event-patch.styles';
import { StyledThemeProvider } from '../styled-theming';

export interface EventPatchProps {
  background: string;
  foreground: string;
  title: string;
  year?: string;
  stravaLink?: string;
  showDarkModeOutline?: boolean;
}

const EventPatch = (props: EventPatchProps) => {
  const {
    foreground,
    background,
    title,
    year,
    stravaLink,
    showDarkModeOutline,
    ...rest
  } = props;

  return (
    <Wrapper
      background={background}
      foreground={foreground}
      showDarkModeOutline={showDarkModeOutline}
      {...rest}
    >
      <EventName>{title}</EventName>
      {year && <EventYear>{year}</EventYear>}
      <LinkContainer>
        <StyledThemeProvider
          theme={{
            textLinkColor: foreground,
            textLinkColorDarkMode: foreground,
            focusOutlineColor: foreground,
            focusOutlineColorDarkMode: foreground,
          }}
        >
          {stravaLink && (
            <StravaLink href={stravaLink}>
              <StravaIcon large />
            </StravaLink>
          )}
        </StyledThemeProvider>
      </LinkContainer>
    </Wrapper>
  );
};

export default EventPatch;
