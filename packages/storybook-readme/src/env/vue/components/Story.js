import MarkdownContainer from './MarkdownContainer';

export default {
  data() {
    return {
      id: 'container-docs',
      styles: {
        padding: '20px',
      },
      docsBeforePreview: this.$props.docs.docsBeforePreview,
      docsAfterPreview: this.$props.docs.docsAfterPreview,
    };
  },
  components: { MarkdownContainer },
  props: ['docs'],
  template: `
    <div v-bind:id="id" v-bind:style="styles">
      <markdown-container :docs="docsBeforePreview" />
      <slot></slot>
      <markdown-container :docs="docsAfterPreview" />
      <slot name="footer"></slot>
    </div>
  `,
};
