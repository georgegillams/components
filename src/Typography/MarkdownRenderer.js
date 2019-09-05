import PropTypes from 'prop-types';
import React, { Component } from 'react';
import YoutubeEmbedVideo from 'youtube-embed-video';
// import BpkImage, {
//   withLoadingBehavior,
//   withLazyLoading,
// } from 'bpk-component-image';
import scrollIntoView from 'scroll-into-view';
// import {
//   citation,
//   References,
//   REFERENCE_STYLES,
// } from 'react-component-academic-reference';
import { cssModules } from '../helpers/cssModules';

import STYLES from './markdown-renderer.scss';

import markdownLexer, { DEFAULT_SUPPORTED_FEATURES } from './markdownLexer';
import CodeInline, { Code, CodeBashArrow } from '../Code';
import { TextLink, Quote, Section, SubSection } from '../Typography';
import HelperFunctions from '../helpers/HelperFunctions';

const getClassName = cssModules(STYLES);

// const documentIfExists = typeof window !== 'undefined' ? document : null;
// const FadingLazyLoadedImage = withLoadingBehavior(
//   withLazyLoading(BpkImage, documentIfExists),
// );

class MarkdownRenderer extends Component {
  static propTypes = {
    references: PropTypes.object,
    content: PropTypes.string.isRequired,
    className: PropTypes.string,
    elementClassName: PropTypes.string,
    light: PropTypes.bool,
    supportedFeatures: PropTypes.arrayOf(PropTypes.string),
  };

  static defaultProps = {
    references: null,
    className: null,
    elementClassName: null,
    light: false,
    supportedFeatures: DEFAULT_SUPPORTED_FEATURES,
  };

  constructor(props) {
    super(props);

    this.state = { lexedContent: null };
  }

  componentDidMount() {
    this.setState({
      lexedContent: markdownLexer(
        this.props.content,
        this.props.supportedFeatures,
      ),
    });
  }

  render() {
    const { light, references, className, elementClassName } = this.props;
    const { lexedContent } = this.state;

    // console.log(`lexedContent`, lexedContent);

    if (!lexedContent) {
      return null;
    }

    const classNames = [getClassName(`blog-viewer__outer`)];
    if (className) {
      classNames.push(className);
    }

    const elementClassNames = [getClassName(`blog-viewer__element`)];
    if (elementClassName) {
      elementClassNames.push(elementClassName);
    }

    return (
      <div className={classNames.join(' ')}>
        {elementForContent(lexedContent, 0, light, elementClassNames.join(' '))}
      </div>
    );
  }
}

const elementForContent = (content, depth, light, elementClassName) => {
  if (!content) {
    return null;
  }

  if (HelperFunctions.isArray(content)) {
    return content.map(c =>
      elementForContent(c, depth, light, elementClassName),
    );
  }

  let childElement = content.child;
  if (typeof childElement === 'object') {
    childElement = elementForContent(
      childElement,
      depth + 1,
      light,
      elementClassName,
    );
  }

  if (typeof content === 'string' || !content.type || content.type === 'text') {
    return content;
  }

  if (content.type === 'footnote1') {
    return (
      <p textStyle="xs">
        <sup>content.number</sup>
      </p>
    );
  }

  if (content.type === 'linebreak') {
    return <br />;
  }

  if (content.type === 'footnote2') {
    return (
      <p textStyle="xs">
        <sup>{footnoteNumber}</sup> {childElement}
      </p>
    );
  }

  if (content.type === 'quotation') {
    return (
      <Quote className={null /* elementClassName.join(' ') */}>
        {childElement}
      </Quote>
    );
  }

  if (content.type === 'link') {
    return (
      <TextLink
        className={elementClassName}
        external={content.external}
        href={content.ref}
      >
        {childElement}
      </TextLink>
    );
  }

  if (content.type === 'code') {
    return <CodeInline className={elementClassName}>{content.text}</CodeInline>;
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

  if (content.type === 'codeblock') {
    return (
      <Code language={content.language} githubUrl={content.githubUrl}>
        {content.text}
      </Code>
    );
  }

  if (content.type === 'youtubeVideo') {
    return (
      <YoutubeEmbedVideo
        showSuggestions={content.showSuggestions}
        videoId={content.videoId}
      />
    );
  }

  if (content.type === 'section') {
    return (
      <Section padding={false} name={content.title}>
        {childElement}
      </Section>
    );
  }

  if (content.type === 'subsection') {
    return (
      <SubSection padding={false} name={content.title}>
        {childElement}
      </SubSection>
    );
  }

  if (content.type === 'subsubsection') {
    return [
      <br />,
      <br />,
      <div style={{ fontWeight: 'bold' }} className={elementClassName}>
        {content.title}
      </div>,
      <br />,
      <br />,
      childElement,
      <br />,
    ];
  }

  if (content.type === 'bigLink') {
    return (
      <a
        href={content.ref}
        target={content.external && '_blank'}
        rel={content.external && 'noopener noreferrer'}
      >
        <Section padding={false} name={content.title}></Section>
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
};
export default MarkdownRenderer;
