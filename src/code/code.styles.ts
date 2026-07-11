import styled, { css } from 'styled-components';

import { borderRadiusSm } from '../constants/primitive/layout';
import {
  codeBackground,
  codeBackgroundDarkMode,
  codeBashArrow,
  codeColor,
  codeInlineBackground,
  codeInlineBackgroundDarkMode,
  codeInlineForeground,
  codeInlineForegroundDarkMode,
  codeLanguageBackground,
  codeLanguageColor,
} from '../constants/semantic/colors';

export interface CodeProps extends React.HTMLAttributes<HTMLElement> {
  inheritColor?: boolean;
  children: React.ReactNode;
  lang?: string;
  githubUrl?: string;
}

const codeStyle = css`
  position: relative;
  padding: 0.5rem;
  border-radius: ${borderRadiusSm};
  background-color: ${codeBackground};
  color: ${codeColor};
  font-family: 'Space Mono', monospace;
  font-size: 0.7rem;
  overflow: hidden;

  @media (prefers-color-scheme: dark) {
    background-color: ${codeBackgroundDarkMode};
  }
`;

const codeStyleLight = css`
  padding: 0.1rem 0.3rem;
  border-radius: ${borderRadiusSm};
  background-color: ${codeInlineBackground};
  color: ${codeInlineForeground};
  font-size: inherit;

  @media (prefers-color-scheme: dark) {
    background-color: ${codeInlineBackgroundDarkMode};
    color: ${codeInlineForegroundDarkMode};
  }
`;

export const StyledCodeBashArrow = styled.span`
  color: ${codeBashArrow};
  font-family: 'Space Mono', monospace;
  font-size: 0.6rem;
`;

export const StyledCodeInline = styled.span<CodeProps>`
  ${codeStyle}
  ${codeStyleLight}

  ${({ inheritColor }) =>
    inheritColor &&
    css`
      color: inherit;

      @media (prefers-color-scheme: dark) {
        color: inherit;
      }
    `}
`;

export const StyledCodeBlock = styled.div`
  ${codeStyle}
`;

export const Language = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.25rem 0.4rem 0.1rem;
  border-radius: 0 ${borderRadiusSm} 0 ${borderRadiusSm};
  background-color: ${codeLanguageBackground};
  color: ${codeLanguageColor};
  font-family: 'Space Mono', monospace;
  font-size: 0.7rem;
  font-style: italic;
`;
