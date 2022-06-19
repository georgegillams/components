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

const EventPatch = (props) => {
  const { foreground, background, title, year, stravaLink, ...rest } = props;

  return (
    <Wrapper background={background} foreground={foreground} {...rest}>
      <EventName>{title}</EventName>
      <EventYear>{year}</EventYear>
      <LinkContainer>
        <StyledThemeProvider
          theme={{
            textLinkColor: foreground,
            textLinkColorDarkMode: foreground,
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

EventPatch.propTypes = {
  background: PropTypes.string.isRequired,
  foreground: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  stravaLink: PropTypes.string,
};

EventPatch.defaultProps = {
  stravaLink: null,
};

export default EventPatch;
