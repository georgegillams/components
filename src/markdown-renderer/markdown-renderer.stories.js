import React from 'react';

import MarkdownRenderer from './index';

// const LONG_TEXT =
//   'LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA.';

export default {
  title: 'Organisms/Markdown renderer',
  component: MarkdownRenderer,
};

export const TextOnly = () => (
  <MarkdownRenderer content="This is a simple test" />
);
export const Table = () => (
  <MarkdownRenderer
    content={`This content includes a table

| column 1 | column 2 | column 3 |
| -------- | -------- | -------- |
| data 1.1 | data 1.2 | data 1.3 |
| data 2.1 | data 2.2 | data 2.3 |
`}
  />
);
export const TableContainingOtherElements = () => (
  <MarkdownRenderer
    content={`This content includes a table

| column 1 | column 2     | column 3 |
| -------- | ------------ | -------- |
| data 1.1 | data 1.2     | data 1.3 |
| data 2.1 | data \`2.2\` | data 2.3 |
`}
  />
);
export const TextWithLink = () => (
  <MarkdownRenderer content="This contains a [link](/test) to an internal page." />
);
export const TextWithLink2Paragraphs = () => (
  <MarkdownRenderer
    content={`This contains a [link](/test) to an internal page.

This contains a [link](/test) to an internal page.`}
  />
);
export const TextWithExternalLink = () => (
  <MarkdownRenderer content="This contains a [link](https://www.google.com/) to an external page." />
);
export const TextWithExternalCodeLink = () => (
  <MarkdownRenderer content="This contains a [`code_link`](https://github.com/) to an external page." />
);
export const TextWith2Links = () => (
  <MarkdownRenderer content="This contains a [link to Google](https://www.google.com/) and another [link to DDG](https://duckduckgo.com/) to an external page." />
);
export const TextWithInlineCode = () => (
  <MarkdownRenderer content="This contains some `code`." />
);
export const TextWithFootnoteReference = () => (
  <MarkdownRenderer
    content={`This footnote[^1] points to something under the[^2] paragraph.\nThis is the end of the paragraph\n[^1]: This is the first footnote\n[^2]: This is the second footnote`}
  />
);
export const TextWithCitationReference = () => (
  <MarkdownRenderer
    content={`This references!cite(1) something further down the page, as does this!cite(2)\n\n!reference(1): Test reference\n!reference(2): Test another reference`}
  />
);
export const TextWithStrikethrough = () => (
  <MarkdownRenderer content="This contains a ~striken~ section." />
);
export const TextWithBold = () => (
  <MarkdownRenderer content="This contains a **bold** section." />
);
export const TextWithItalic = () => (
  <MarkdownRenderer content="This contains an _italic_ section." />
);
export const TextWithBoldItalic = () => (
  <MarkdownRenderer content="This contains a **_bold italic_** section. And **_another_** one" />
);
export const TextWithStyleBoldItalic = () => (
  <MarkdownRenderer content="This contains a ***bold italic*** section. And ***another*** one" />
);
export const TextWithCodeBlock = () => (
  <MarkdownRenderer
    content={`This contains a block of code as follows:
\`\`\`
if (render code) {
  then stuff
}
\`\`\`

And another with a language annotation:
\`\`\` js
if (render code) {
  then stuff
}
\`\`\`

And another with language and url:
\`\`\` js, https://github.com/
if (render code) {
  then stuff
}
\`\`\`
`}
  />
);
export const TextWithABigLink = () => (
  <MarkdownRenderer
    content="This contains a large link:
*[Massive link](https://www.google.com)"
  />
);
export const YoutubeVideo = () => (
  <MarkdownRenderer content="!yt[false](jofNR_WkoCE)" />
);
export const TextWithAllTheMultiLineThings = () => (
  <MarkdownRenderer
    content={`This contains a bullet-list as follows:
 - This is a bullet point

There are some more coming up:
 - Another bullet
 - One **more** for luck
 
...and a numbered-list as follows:
 1. This is a numbered item

There are some more coming up:
 2. Another numbered item
 3. One **more** for luck

...and a quotation as follows:
> This is a quote

There's even another one coming up next:
> And it spans...
> ... multiple lines with [link](https://duckduckgo.com/)'s
`}
  />
);
export const TextWithABulletList = () => (
  <MarkdownRenderer
    content={`This contains a bullet-list as follows:
 - This is a bullet point

There are some more coming up:
 - Another bullet
 - One **more** for luck
`}
  />
);
export const TextWithANumberedList = () => (
  <MarkdownRenderer
    content={`This contains a numbered-list as follows:
 1. This is a numbered item

There are some more coming up:
 2. Another numbered item
 3. One **more** for luck
`}
  />
);
export const TextWithAQuotation = () => (
  <MarkdownRenderer
    content={`This contains a quotation as follows:
> This is a quote

There's even another one coming up next:
> And it spans...
> ... multiple lines with [link](https://duckduckgo.com/)'s
`}
  />
);
export const SectionedText = () => (
  <MarkdownRenderer
    content={`# Section

This is some section content.`}
  />
);
export const SubsectionedText = () => (
  <MarkdownRenderer
    content={`## Subsection

This is some subsection content.`}
  />
);
export const SectionedTextLongExample = () => (
  <MarkdownRenderer
    content={`
# Section

This is some section content.

## Subsection

This is some text in a subsection

Let's throw in some \`code\` for good measure.

### SubSubSection

This is some text in a subsubsection
`}
  />
);
export const LinkAndItalic = () => (
  <MarkdownRenderer content="This contains a [link](/test) and _italics_" />
);
export const LinkAndItalicLimitedToJustLink = () => (
  <MarkdownRenderer
    supportedFeatures={['link']}
    content="This contains a [link](/test) and _italics_"
  />
);

export const GreaterThanInsideCode = () => (
  <MarkdownRenderer
    content={`
Some text first.

\`\`\`javascript
const someVariable = 5;

const someFunction = (arg1, arg2) =>  {
  return arg1 + arg2;
}
  `}
  />
);

export const EmptyHeadings = () => (
  <MarkdownRenderer
    content={`

# h1 Heading


# h1 Heading 8-)


`}
  ></MarkdownRenderer>
);

export const Extreme = () => (
  <MarkdownRenderer
    content={`

# h1 Heading 8-)

paragraph 1

## h2 Heading

paragraph 2

### h3 Heading

paragraph 3

**This is bold text**

_This is italic text_

~Strikethrough~

## Quote

> This is a quote

## Blockquotes

> This is a quote
> spanning several
> lines

## Lists

Lists are currently unsupported

## Code

Inline \`code\`

Block code fences

\`\`\`
Sample text here...
\`\`\`
`}
  />
);
export const MoreExtreme = () => (
  <MarkdownRenderer
    content={`
# h1 Heading 8-)

paragraph 1

## h2 Heading

paragraph 2

### h3 Heading

paragraph 3

## Horizontal Rules

___

---

***


## Typographic replacements

(c) (C) (r) (R) (tm) (TM) (p) (P) +-

test.. test... test..... test?..... test!....

!!!!!! ???? ,,  -- ---


## Emphasis

**This is bold text**

_This is wonky text_

~Strikethrough~


## Quote


> This is a quote


## Blockquotes


> Blockquotes are currently unsupported


## Lists

Lists are currently unsupported


## Code

Inline \`code\`

Block code fences

\`\`\`
Sample text here...
\`\`\`

Language

\`\`\` js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
\`\`\`

## Tables

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |


## Links

[link text](http://google.com)

*[big link](http://google.com/)


## Images

![Minion](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg)

## Smart Images

![1x1][Minion](https://octodex.github.com/images/minion.png)(https://octodex.github.com/images/minion.png)
![1x1][Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg)(https://octodex.github.com/images/stormtroopocat.jpg)

Like links, Images also have a footnote style syntax

`}
  />
);
