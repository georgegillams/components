import React, { memo } from 'react';
import * as COLORS from './colors';
import {
  ColorName,
  ColorSwatchWrapper,
  ListWrapper,
} from './colors.stories.styles';
import Text, { SIZES } from '../text';

export default {
  title: 'Tokens/Colors',
  component: null,
};

type ColorSwatchProps = React.HTMLAttributes<HTMLDivElement> & {
  name: string;
  hex: string;
};

const ColorSwatch = memo((props: ColorSwatchProps) => {
  const { name, hex, ...rest } = props;

  return (
    <ColorSwatchWrapper backgroundColor={hex} {...rest}>
      <ColorName size={SIZES.lg}>{name}</ColorName>
      <Text size={SIZES.md}>{hex}</Text>
    </ColorSwatchWrapper>
  );
});

export const Default = () => (
  <ListWrapper>
    {Object.keys(COLORS).map((color) => (
      // @ts-ignore exported colors will always be strings
      <ColorSwatch name={color} hex={COLORS[color]} />
    ))}
  </ListWrapper>
);
