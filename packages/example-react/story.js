import React from 'react';
import { css } from 'react-emotion';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { withReadme, withDocs } from 'bvap-storybook-readme';

import Button from './components/Button/Button';

import CommonFooterDocs from './components/COMMON_FOOTER.md';
import ButtonReadme from './components/Button/README.md';
import ButtonDocs from './components/Button/DOCS.md';

withDocs.addFooterDocs(CommonFooterDocs);

const styles = {
  containerComponent: css`
    padding: 5px;

    .markdown-body {
      font-size: 15px;
    }
  `,
  previewComponent: css`
    text-align: center;
    padding: 25px;
    margin: 25px 0;
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.1);
  `,
  footerComponent: css`
    padding: 25px;
    background: rgba(246, 255, 0, 0.23);
    border-top: 2px solid rgba(0, 0, 0, 0.1);
  `,
};

const withDocsCustom = withDocs({
  ContainerComponent: props => (
    <div {...props} className={styles.containerComponent} />
  ),
  PreviewComponent: props => (
    <div {...props} className={styles.previewComponent} />
  ),
  FooterComponent: props => (
    <div {...props} className={styles.footerComponent} />
  ),
});

storiesOf('Custom Container, Preview, and Footer', module)
  .addDecorator(withKnobs)
  .addDecorator(withDocsCustom(ButtonDocs))
  .add('Button', () => (
    <Button
      onClick={action('clicked')}
      alert={boolean('alert', false)}
      success={boolean('success', false)}
    >
      {text('text', 'Hello Im Button')}
    </Button>
  ));

storiesOf('With Docs and Readme', module)
  .addDecorator(withKnobs)
  .addDecorator(withDocs(ButtonDocs))
  .addDecorator(withReadme(ButtonReadme))
  .add('Button', () => (
    <Button
      onClick={action('clicked')}
      alert={boolean('alert', false)}
      success={boolean('success', false)}
    >
      {text('text', 'Hello Im Button')}
    </Button>
  ));

// withReadme and withDocs
storiesOf('withDocs and withReadme', module)
  .addDecorator(withKnobs)
  .addDecorator(withDocs(ButtonDocs))
  .addDecorator(withReadme(ButtonReadme))
  .add('Button', () => (
    <Button
      onClick={action('clicked')}
      alert={boolean('alert', false)}
      success={boolean('success', false)}
    >
      {text('text', 'Hello Im Button')}
    </Button>
  ));

// withDocs
storiesOf('withReadme/ As Decorator', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(ButtonReadme))
  .add('Button', () => (
    <Button
      onClick={action('clicked')}
      alert={boolean('alert', false)}
      success={boolean('success', false)}
    >
      {text('text', 'Hello Im Button')}
    </Button>
  ));

storiesOf('withReadme/As HOC', module)
  .addDecorator(withKnobs)
  .add(
    'Button',
    withReadme(ButtonReadme, () => (
      <Button
        onClick={action('clicked')}
        alert={boolean('alert', false)}
        success={boolean('success', false)}
      >
        {text('text', 'Hello Im Button')}
      </Button>
    ))
  );

// with docs
storiesOf('withDocs/As Decorator', module)
  .addDecorator(withKnobs)
  .addDecorator(withDocs(ButtonReadme))
  .add('Button', () => (
    <Button
      onClick={action('clicked')}
      alert={boolean('alert', false)}
      success={boolean('success', false)}
    >
      {text('text', 'Hello Im Button')}
    </Button>
  ));

storiesOf('withDocs/As HOC', module)
  .addDecorator(withKnobs)
  .add(
    'Button',
    withDocs(ButtonReadme, () => (
      <Button
        onClick={action('clicked')}
        alert={boolean('alert', false)}
        success={boolean('success', false)}
      >
        {text('text', 'Hello Im Button')}
      </Button>
    ))
  );
