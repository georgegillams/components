import React from 'react';

import { CodeProps, Language, StyledCodeBlock } from './code.styles';
import TextLink from '../text-link';

const Code = (props: CodeProps) => {
  const { children, lang, githubUrl, ...rest } = props;

  const showTag = lang || githubUrl;
  const showSpace = lang && githubUrl;

  return (
    <StyledCodeBlock {...rest}>
      <code>
        {children}
        {showTag && (
          <Language>
            {lang && lang}
            {showSpace && <span>&nbsp;</span>}
            {githubUrl && (
              <TextLink href={githubUrl} hrefExternal>
                View on Github
              </TextLink>
            )}
          </Language>
        )}
      </code>
    </StyledCodeBlock>
  );
};

export default Code;
