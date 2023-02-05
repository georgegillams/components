import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Table, Head, Body, Row, Cell } from '../table';
import { withTheme } from '../Theming';
import HelperFunctions from '../helpers/helper-functions';
import Image from '../image';
import Code, { CodeInline } from '../code';
import Paragraph from '../paragraph';
import TextLink from '../text-link';
import Quote from '../quote';
import Section from '../section';
import Subsection from '../subsection';
import { Citation, Reference } from '../references';

import { markdownLexer } from './markdown-lexer';
import { DEFAULT_SUPPORTED_FEATURES } from './constants';
import {
  Outer,
  StyledParagraph,
  StyledYoutubeEmbedVideo,
  SubsectionTitle,
} from './markdown-renderer.styles';

const ThemedTextLink = withTheme(TextLink);

const MarkdownRenderer = (props) => {
  const { content, supportedFeatures, light, elementClassName, padding } =
    props;

  const [lexedContent, setLexedContent] = useState(
    markdownLexer(content, supportedFeatures),
  );

  useEffect(() => {
    const lexingResult = markdownLexer(content, supportedFeatures);
    setLexedContent(lexingResult);
  }, [content, supportedFeatures]);

  if (!lexedContent) {
    return null;
  }

  const elementClassNames = [`markdown-renderer__element`];
  if (elementClassName) {
    elementClassNames.push(elementClassName);
  }

  /* eslint-disable no-use-before-define */
  return (
    <Outer>
      {elementForContent(
        lexedContent,
        0,
        light,
        elementClassNames.join(' '),
        padding,
      )}
    </Outer>
  );
  /* eslint-enable */
};

const elementForContent = (
  content,
  depth,
  light,
  elementClassName,
  padding,
) => {
  if (!content) {
    return null;
  }

  if (HelperFunctions.isArray(content)) {
    return content.map((c) =>
      elementForContent(c, depth, light, elementClassName, padding),
    );
  }

  let childElement = content.children;
  if (typeof childElement === 'object') {
    childElement = elementForContent(
      childElement,
      depth + 1,
      light,
      elementClassName,
      padding,
    );
  }

  if (typeof content === 'string' || !content.type || content.type === 'text') {
    return content;
  }

  if (content.type === 'paragraph') {
    return (
      <StyledParagraph padding={padding} className={elementClassName}>
        {childElement}
        <br />
      </StyledParagraph>
    );
  }

  if (content.type === 'footnoteReference') {
    return <sup>{content.number}</sup>;
  }

  if (content.type === 'table') {
    const headElement = elementForContent(
      content.head,
      depth + 1,
      light,
      elementClassName,
      padding,
    );
    const bodyElement = elementForContent(
      content.body,
      depth + 1,
      light,
      elementClassName,
      padding,
    );
    return (
      <Table>
        {headElement}
        {bodyElement}
      </Table>
    );
  }

  if (content.type === 'table-row') {
    return <Row>{childElement}</Row>;
  }

  if (content.type === 'table-head') {
    return <Head>{childElement}</Head>;
  }

  if (content.type === 'table-body') {
    return <Body>{childElement}</Body>;
  }

  if (content.type === 'table-cell') {
    return <Cell>{childElement}</Cell>;
  }

  if (content.type === 'footnote') {
    return (
      <sup>
        {content.number}: {childElement}
      </sup>
    );
  }

  if (content.type === 'bulletList') {
    childElement = childElement.map((c) => <li>{c}</li>);
    return <ul>{childElement}</ul>;
  }

  if (content.type === 'numberedList') {
    childElement = childElement.map((c) => <li>{c}</li>);
    return <ol>{childElement}</ol>;
  }

  if (content.type === 'quotation') {
    if (childElement.length > 1) {
      childElement = childElement.map((c) => (
        <Paragraph padding={padding}>{c}</Paragraph>
      ));
    }
    return <Quote>{childElement}</Quote>;
  }

  if (content.type === 'link') {
    return (
      <ThemedTextLink hrefExternal={content.hrefExternal} href={content.href}>
        {childElement}
      </ThemedTextLink>
    );
  }

  if (content.type === 'code') {
    return (
      <CodeInline inheritColor className={elementClassName}>
        {content.text}
      </CodeInline>
    );
  }

  if (content.type === 'strikethrough') {
    return (
      <span
        style={{ textDecorationLine: 'line-through' }}
        className={elementClassName}
      >
        {childElement}
      </span>
    );
  }

  if (content.type === 'italic') {
    return (
      <span style={{ fontStyle: 'italic' }} className={elementClassName}>
        {childElement}
      </span>
    );
  }

  if (content.type === 'blockCode') {
    return (
      <Code lang={content.language} githubUrl={content.url}>
        {content.codeLines.map((c) => (
          <>
            {c.replace(/ /g, '\u00a0')}
            <br />
          </>
        ))}
      </Code>
    );
  }

  if (content.type === 'youtube') {
    return (
      <StyledYoutubeEmbedVideo
        showSuggestions={content.showSuggestions}
        videoId={content.videoID}
      />
    );
  }

  if (content.type === 'section') {
    return (
      <Section anchor padding={padding} name={content.name}>
        {childElement}
      </Section>
    );
  }

  if (content.type === 'subsection') {
    return (
      <Subsection anchor padding={padding} name={content.name}>
        {childElement}
      </Subsection>
    );
  }

  if (content.type === 'subsubsection') {
    return [
      <SubsectionTitle className={elementClassName}>
        {content.name}
      </SubsectionTitle>,
      childElement,
      <br />,
    ];
  }

  if (content.type === 'bigLink') {
    return (
      <a
        href={content.href}
        target={content.hrefExternal && '_blank'}
        rel={content.hrefExternal && 'noopener noreferrer'}
      >
        <Subsection anchor={false} padding={padding} link name={content.text} />
      </a>
    );
  }

  if (content.type === 'bold') {
    return (
      <span style={{ fontWeight: 'bold' }} className={elementClassName}>
        {childElement}
      </span>
    );
  }

  if (content.type === 'image') {
    return (
      <img
        className={elementClassName}
        src={content.src}
        alt={content.caption}
      />
    );
  }

  if (content.type === 'smartImage') {
    return (
      <Image
        className={elementClassName}
        lightSrc={content.lightSrc}
        darkSrc={content.darkSrc}
        aspectX={content.aspectX}
        aspectY={content.aspectY}
        imgProps={{ alt: content.caption }}
      />
    );
  }

  if (content.type === 'citation') {
    return <Citation identifier={content.identifier} />;
  }

  if (content.type === 'reference') {
    return (
      <Reference
        identifier={content.identifier}
        reference={content.reference}
      />
    );
  }

  // Finally, default to returning the raw content
  return content;
};

MarkdownRenderer.propTypes = {
  content: PropTypes.string.isRequired,
  elementClassName: PropTypes.string,
  padding: PropTypes.bool,
  light: PropTypes.bool,
  supportedFeatures: PropTypes.arrayOf(PropTypes.string),
};

MarkdownRenderer.defaultProps = {
  padding: true,
  elementClassName: null,
  light: false,
  supportedFeatures: DEFAULT_SUPPORTED_FEATURES,
};

export default MarkdownRenderer;
