import styled, { css } from 'styled-components';

export const Wrapper = styled.svg.attrs({
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 75 75',
  width: '75',
  height: '75',
})`
  width: 14rem;
  height: 14rem;
`;

export const BackgroundOuter = styled.circle.attrs({
  cx: 37.5,
  cy: 37.5,
  r: 37.5,
})`
  fill: #a0a0a0;
`;

export const BackgroundInner = styled.circle.attrs({
  cx: 37.5,
  cy: 37.5,
  r: 25.5,
})`
  fill: #d9d9d9;
`;

export const Flash = styled.path.attrs({
  d: 'M37.5 75C47.4456 75 56.9839 71.0491 64.0165 64.0165C71.0491 56.9839 75 47.4456 75 37.5C75 27.5544 71.0491 18.0161 64.0165 10.9835C56.9839 3.95088 47.4456 -1.186e-07 37.5 0V8.59567C45.1659 8.59567 52.5178 11.6409 57.9384 17.0616C63.3591 22.4822 66.4043 29.8341 66.4043 37.5C66.4043 45.1659 63.3591 52.5178 57.9384 57.9384C52.5178 63.3591 45.1659 66.4043 37.5 66.4043V75Z',
})`
  fill: ${(props) => props.color};
`;

export const RightTextGuidePath = styled.path.attrs({
  id: 'textLine1',
  d: 'M38 6.5C54.5 6.5 68.5 21 68.5 37C68.5 53.5 55.5 68.5 38 68.5',
})`
  fill: none;
`;

export const RightText = styled.text.attrs({ width: 500 })`
  font-size: 0.3rem;
  font-weight: bold;
  fill: ${(props) => props.color};
`;

export const RightTextPath = styled.textPath.attrs({
  startOffset: 14,
  alignmentBaseline: 'center',
  xlinkHref: '#textLine1',
})``;
export const LeftTextGuidePath = styled.path.attrs({
  id: 'textLine2',
  d: 'M37 66C21.8525 66 8.99999 52.6694 9 37.9597C9 22.7903 20.9344 9 37 9',
})`
  fill: none;
`;

export const LeftText = styled.text.attrs({ width: 500 })`
  font-size: 0.4rem;
  font-weight: bold;
  fill: #d9d9d9;
`;

export const LeftTextPath = styled.textPath.attrs({
  startOffset: 18,
  alignmentBaseline: 'center',
  xlinkHref: '#textLine2',
})``;
