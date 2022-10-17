import React from 'react';

import Code from './index';

export default { title: 'Molecules/Code block', component: Code };

export const Default = () => (
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
);
export const WithLang = () => (
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
);
export const WithGithubUrl = () => (
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
);
export const WithGithubUrlAndLang = () => (
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
);
