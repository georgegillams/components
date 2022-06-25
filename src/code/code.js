import React from 'react';
import PropTypes from 'prop-types';

import { Language, StyledCodeBlock, StyledTextLink } from './code.styles';
import TextLink from '../text-link';

const Code = (props) => {
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

Code.propTypes = {
  lang: PropTypes.string,
  githubUrl: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Code.defaultProps = {
  lang: null,
  githubUrl: null,
};

export default Code;
