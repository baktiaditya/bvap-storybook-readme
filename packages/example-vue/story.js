import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { withReadme, withDocs } from 'bvap-storybook-readme';
import MarkdownContainer from 'bvap-storybook-readme/env/vue/components/MarkdownContainer';

import MyButton from './components/Button/Button.vue';

import CommonFooterDocs from './components/COMMON_FOOTER.md';
import ButtonReadme from './components/Button/README.md';
import ButtonDocs from './components/Button/DOCS.md';

withDocs.addFooterDocs(CommonFooterDocs);

const withDocsCustom = withDocs({
  ContainerComponent: {
    data() {
      return {
        styles: {
          padding: '5px',
        },
        docsBeforePreview: this.$props.docs.docsBeforePreview,
        docsAfterPreview: this.$props.docs.docsAfterPreview,
      };
    },
    components: { MarkdownContainer },
    props: ['docs'],
    template: `
      <div v-bind:style="styles">
        <markdown-container :docs="docsBeforePreview" />
        <slot></slot>
        <markdown-container :docs="docsAfterPreview" />
        <slot name="footer"></slot>
      </div>`,
  },
  PreviewComponent: {
    data() {
      return {
        styles: {
          textAlign: 'center',
          padding: '25px',
          margin: '25px 0',
          boxShadow: '0 0 40px rgba(0, 0, 0, 0.1)',
        },
      };
    },
    template: `<div v-bind:style="styles"><slot></slot></div>`,
  },
  FooterComponent: {
    data() {
      return {
        styles: {
          padding: '25px',
          background: 'rgba(246, 255, 0, 0.23)',
          borderTop: '2px solid rgba(0, 0, 0, 0.1)',
        },
      };
    },
    template: `<div v-bind:style="styles"><slot></slot></div>`,
  },
});

storiesOf('Custom Container, Preview, and Footer', module)
  .addDecorator(withKnobs)
  .addDecorator(withDocsCustom(ButtonDocs))
  .add('Button', () => {
    const warning = boolean('Warning', false);
    const success = boolean('Success', false);

    return {
      components: {
        MyButton,
      },
      template: `<my-button
        :alert="${warning}"
        :success="${success}">My Button</my-button>`,
    };
  });

storiesOf('With Docs from *.vue docs section', module)
  .addDecorator(withKnobs)
  .addDecorator(withDocs(MyButton.__docs))
  .add('Button', () => {
    const warning = boolean('Warning', false);
    const success = boolean('Success', false);

    return {
      components: {
        MyButton,
      },
      template: `<my-button
      :alert="${warning}"
      :success="${success}">My Button</my-button>`,
    };
  });

storiesOf('With Docs and Readme', module)
  .addDecorator(withKnobs)
  .addDecorator(withDocs(ButtonDocs))
  .addDecorator(withReadme(ButtonReadme))
  .add('Button', () => {
    const warning = boolean('Warning', false);
    const success = boolean('Success', false);

    return {
      components: {
        MyButton,
      },
      template: `<my-button
        :alert="${warning}"
        :success="${success}">My Button</my-button>`,
    };
  });

// withReadme and withDocs
storiesOf('withDocs and withReadme', module)
  .addDecorator(withKnobs)
  .addDecorator(withDocs(ButtonDocs))
  .addDecorator(withReadme(ButtonReadme))
  .add('Button', () => {
    const warning = boolean('Warning', false);
    const success = boolean('Success', false);

    return {
      components: {
        MyButton,
      },
      template: `<my-button
        :alert="${warning}"
        :success="${success}">My Button</my-button>`,
    };
  });

// withDocs
storiesOf('withReadme/ As Decorator', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(ButtonReadme))
  .add('Button', () => {
    const warning = boolean('Warning', false);
    const success = boolean('Success', false);

    return {
      components: {
        MyButton,
      },
      template: `<my-button
        :alert="${warning}"
        :success="${success}">My Button</my-button>`,
    };
  });

storiesOf('withReadme/As HOC', module)
  .addDecorator(withKnobs)
  .add(
    'Button',
    withReadme(ButtonReadme, () => {
      const warning = boolean('Warning', false);
      const success = boolean('Success', false);

      return {
        components: {
          MyButton,
        },
        template: `<my-button
          :alert="${warning}"
          :success="${success}">My Button</my-button>`,
      };
    })
  );

// with docs
storiesOf('withDocs/As Decorator', module)
  .addDecorator(withKnobs)
  .addDecorator(withDocs(ButtonReadme))
  .add('Button', () => {
    const warning = boolean('Warning', false);
    const success = boolean('Success', false);

    return {
      components: {
        MyButton,
      },
      template: `<my-button
        :alert="${warning}"
        :success="${success}">My Button</my-button>`,
    };
  });

storiesOf('withDocs/As HOC', module)
  .addDecorator(withKnobs)
  .add(
    'Button',
    withDocs(ButtonReadme, () => {
      const warning = boolean('Warning', false);
      const success = boolean('Success', false);
      const label = text('Text', 'My Button');

      return {
        components: {
          MyButton,
        },
        template: `<my-button 
          :alert="${warning}" 
          :success="${success}">${label}</my-button>`,
      };
    })
  );
