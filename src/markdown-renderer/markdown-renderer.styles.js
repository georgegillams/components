import styled from 'styled-components';
import { notBlack, notBlackDarkMode } from '../constants/colors';
import paragraph from '../paragraph';
import YoutubeEmbedVideo from 'youtube-embed-video';

export const Outer = styled.div`
  display: inline;
  color: ${notBlack};

  @media (prefers-color-scheme: dark) {
    color: ${notBlackDarkMode};
  }

  & .markdown-renderer__element {
    max-width: 100%;
  }
`;

export const StyledParagraph = styled(paragraph)`
  width: 100%;
`;

export const StyledYoutubeEmbedVideo = styled(YoutubeEmbedVideo)`
  max-width: 100%;
`;

export const SubsectionTitle = styled.span`
  display: inline-block;
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 1.6rem;
  font-weight: bold;
`;
