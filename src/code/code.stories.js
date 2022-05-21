import React from 'react';
import { storiesOf } from '@storybook/react';

import Code from './index';

storiesOf('Code block', module)
  .add('Default', () => (
    <Code>
      <pre>{`This is a code block containing preformatted text.
  this means that indentation {
    can {
      even {
        be {
          included
        }
      }
    }
  }`}</pre>
    </Code>
  ))
  .add('With lang', () => (
    <Code lang="JavaScript">
      <pre>{`This is a code block containing preformatted text.
  this means that indentation {
    can {
      even {
        be {
          included
        }
      }
    }
  }`}</pre>
    </Code>
  ))
  .add('With GitHub url', () => (
    <Code githubUrl="https://github.com/georgegillams/georgegillams.co.uk">
      <pre>{`This is a code block containing preformatted text.
  this means that indentation {
    can {
      even {
        be {
          included
        }
      }
    }
  }`}</pre>
    </Code>
  ))
  .add('With GitHub url and lang', () => (
    <Code
      lang="JavaScript"
      githubUrl="https://github.com/georgegillams/georgegillams.co.uk"
    >
      <pre>{`This is a code block containing preformatted text.
  this means that indentation {
    can {
      even {
        be {
          included
        }
      }
    }
  }`}</pre>
    </Code>
  ));
