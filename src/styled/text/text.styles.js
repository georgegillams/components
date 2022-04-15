import styled, { css } from 'styled-components';
import { fontSizeXxl, fontSizeXl, fontSizeLg } from '../constants/font';

const tagStyles = {
  h1: css`
    font-size: ${fontSizeXxl};
    font-weight: bold;
  `,
  h2: css`
    font-size: ${fontSizeXl};
    font-weight: bold;
  `,
  h3: css`
    font-size: ${fontSizeLg};
    font-weight: bold;
  `,
  h4: css`
    font-weight: bold;
  `,
  span: css``,
};

export const StyledText = styled.span`
  margin: 0;
  ${(props) => tagStyles[props.tagName]}
`;
