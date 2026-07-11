import React, { memo } from 'react';
import * as PRIMITIVE_COLORS from './primitive/colors';
import * as SEMANTIC_COLORS from './semantic/colors';
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

const ColorList = ({ colors }: { colors: Record<string, string> }) => (
  <ListWrapper>
    {Object.keys(colors).map((color) => (
      <ColorSwatch key={color} name={color} hex={colors[color]} />
    ))}
  </ListWrapper>
);

export const Primitive = () => <ColorList colors={PRIMITIVE_COLORS} />;

export const Semantic = () => <ColorList colors={SEMANTIC_COLORS} />;
