import { lexStructure } from './markdown-section-lexer';
import { DEFAULT_SUPPORTED_FEATURES } from './constants';
import { parseMultiLineElements } from './multi-line-element-lexer';
import { parseSingleLineElements } from './single-line-element-lexer';

const markdownLexer = (
  content,
  supportedFeatures = DEFAULT_SUPPORTED_FEATURES,
) => {
  const lexedStructure = lexStructure(content, supportedFeatures);
  const lexedStructureWithMultiLineElements = parseMultiLineElements(
    lexedStructure,
    supportedFeatures,
  );
  const lexedStructureWithAllElements = parseSingleLineElements(
    lexedStructureWithMultiLineElements,
    supportedFeatures,
  );
  return lexedStructureWithAllElements;
};

export default markdownLexer;
export { markdownLexer };
