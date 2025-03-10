import React from 'react';
import Text, { SIZES, TAG_NAME } from '../text';
import TextLink from '../text-link';
import {
  FooterWrapper,
  StyledIFrame,
  TitleWrapper,
  Wrapper,
} from './iframe-preview.styles';

type IFramePreviewProps = React.HTMLAttributes<HTMLDivElement> & {
  title: string;
  src: string;
};

const IFramePreview = (props: IFramePreviewProps) => {
  const { title, src, ...rest } = props;

  return (
    <Wrapper {...rest}>
      <TitleWrapper>
        <Text tagName={TAG_NAME.h3} size={SIZES.lg}>
          {title}
        </Text>
      </TitleWrapper>
      <StyledIFrame src={src} />
      <FooterWrapper>
        <TextLink hrefExternal href={src}>
          Open {title} in a new tab
        </TextLink>
      </FooterWrapper>
    </Wrapper>
  );
};

export default IFramePreview;
export { IFramePreview };
