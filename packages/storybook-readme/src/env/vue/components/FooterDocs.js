export default {
  data() {
    return {
      id: 'footer-docs',
      styles: {
        borderTop: '1px dashed #e5e5e5',
        paddingTop: '16px',
      },
    };
  },
  template: `<div v-bind:id="id" v-bind:style="styles"><slot></slot></div>`,
};
