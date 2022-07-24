import styled, { css } from 'styled-components';
import { notBlack } from '../constants/colors';
import { NOTIFICATION_TYPES } from './notification';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 0.8rem;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: ${notBlack};
  color: white;

  ${({ type }) => {
    switch (type) {
      case NOTIFICATION_TYPES.neutral:
        return css`
          background-color: ${notBlack};
        `;
      case NOTIFICATION_TYPES.success:
        return css`
          background-color: darkgreen;
        `;
      case NOTIFICATION_TYPES.warn:
        return css`
          background-color: darkorange;
        `;
      case NOTIFICATION_TYPES.error:
        return css`
          background-color: #e02626;
        `;
    }
  }}
`;
