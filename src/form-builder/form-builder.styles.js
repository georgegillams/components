import styled, { css } from 'styled-components';
import { spacingBase, spacingXs } from '../constants/layout';
// @import '../Tokens/common';

import Button from '../button';
import Input from '../input';
import TextArea from '../text-area';
import Select from '../select';
import Checkbox from '../checkbox';
import { notBlack, notBlackDarkMode } from '../constants/colors';

export const Wrapper = styled.div``;

export const FieldWrapper = styled.div`
  ${({ visuallyHidden }) =>
    visuallyHidden &&
    css`
      width: 1px;
      height: 1px;
      overflow: hidden;
      margin-left: -1px;
      margin-top: -1px;
    `}
`;

const commonComponentStyles = css`
  margin-bottom: ${spacingBase};
`;

export const StyledButton = styled(Button)`
  ${commonComponentStyles}

  margin-top: ${spacingBase};
`;

export const StyledInput = styled(Input)`
  ${commonComponentStyles}

  width: 100%;
  box-sizing: border-box;
`;

export const StyledTextArea = styled(TextArea)`
  ${commonComponentStyles}
`;

export const StyledSelect = styled(Select)`
  ${commonComponentStyles}
`;

export const StyledCheckbox = styled(Checkbox)`
  ${commonComponentStyles}
`;

export const StyledLabel = styled.label`
  display: inline-block;
  width: 100%;
  margin: 0 0 ${spacingXs} 0.1rem;
  color: ${notBlack};
  font-size: 1rem;
  font-weight: bold;

  @media (prefers-color-scheme: dark) {
    color: ${notBlackDarkMode};
  }
`;

export const StyledHint = styled.p`
  display: inline-block;
  width: 100%;
  margin: 0 0 ${spacingXs} 0.1rem;
  color: ${notBlack};
  font-size: 0.9rem;

  @media (prefers-color-scheme: dark) {
    color: ${notBlackDarkMode};
  }
`;

export const PreSubmitText = styled.div`
  ${commonComponentStyles}

  color: ${notBlack};

  @media (prefers-color-scheme: dark) {
    color: ${notBlackDarkMode};
  }
`;
