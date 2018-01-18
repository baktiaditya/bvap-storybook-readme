import stringRaw from 'string-raw';

// eslint-disable-next-line no-unused-expressions
const styles = stringRaw`
  .markdown-body code[class*="language-"],
  .markdown-body pre[class*="language-"] {
    color: black;
    text-shadow: 0 1px white;
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  .markdown-body pre[class*="language-"]::-moz-selection, pre[class*="language-"] ::-moz-selection,
  .markdown-body code[class*="language-"]::-moz-selection, code[class*="language-"] ::-moz-selection {
    text-shadow: none;
    background: #b3d4fc;
  }

  .markdown-body pre[class*="language-"]::selection, pre[class*="language-"] ::selection,
  .markdown-body code[class*="language-"]::selection, code[class*="language-"] ::selection {
    text-shadow: none;
    background: #b3d4fc;
  }

  @media print {
    .markdown-body code[class*="language-"],
    .markdown-body pre[class*="language-"] {
    	text-shadow: none;
    }
  }

  /* Code blocks */
  .markdown-body pre[class*="language-"] {
    padding: 1em;
    margin: .5em 0;
    overflow: auto;
  }

  /* Inline code */
  .markdown-body :not(pre) > code[class*="language-"] {
    padding: .1em;
    border-radius: .3em;
    white-space: normal;
  }

  .markdown-body .token.comment,
  .markdown-body .token.prolog,
  .markdown-body .token.doctype,
  .markdown-body .token.cdata {
    color: slategray;
  }

  .markdown-body .token.punctuation {
    color: #24292e;
  }

  .markdown-body .tag .token.punctuation {
    color: #d73a49;
  }

  .markdown-body .namespace {
    opacity: .7;
  }

  .markdown-body .token.property,
  .markdown-body .token.tag,
  .markdown-body .token.boolean,
  .markdown-body .token.number,
  .markdown-body .token.constant,
  .markdown-body .token.symbol,
  .markdown-body .token.deleted {
    color: #24292e;
  }


  .markdown-body .tag .token.selector,
  .markdown-body .tag .token.attr-name,
  .markdown-body .tag .token.string,
  .markdown-body .tag .token.char,
  .markdown-body .tag .token.builtin,
  .markdown-body .tag .token.inserted {
    color: #4f57a0;
  }

  .markdown-body .token.string {
    color: #005cc5;
  }

  .markdown-body .token.operator,
  .markdown-body .token.entity,
  .markdown-body .token.url,
  .markdown-body .language-css .token.string,
  .markdown-body .style .token.string {
    color: #a67f59;
    background: hsla(0, 0%, 100%, .5);
  }

  .markdown-body .token.atrule,
  .markdown-body .token.attr-value,
  .markdown-body .token.keyword {
    color: #d73a49;
  }

  .markdown-body .token.function {
    color: #6f42c1;
  }

  .markdown-body .token.regex,
  .markdown-body .token.important,
  .markdown-body .token.variable {
    color: #e90;
  }

  .markdown-body .token.important,
  .markdown-body .token.bold {
    font-weight: bold;
  }
  .markdown-body .token.italic {
    font-style: italic;
  }

  .markdown-body .token.entity {
    cursor: help;
  }
`;

const styleNode = document.createElement('style');
styleNode.id = 'prism-theme-css';
styleNode.innerHTML = styles;

// document.head.appendChild(styleNode);

const githubMarkdownCss = document.getElementById('github-markdown-css');
githubMarkdownCss.parentNode.insertBefore(
  styleNode,
  githubMarkdownCss.nextSibling
);
