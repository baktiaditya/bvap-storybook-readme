export default {
  data() {
    return {
      id: 'story-preview',
      styles: {
        boxSizing: 'border-box',
        margin: '16px 0',
        padding: '24px',
        border: '1px dashed #e5e5e5',
        backgroundColor: '#ffffff',
        textAlign: 'left',
      },
    };
  },
  template: `<div v-bind:id="id" v-bind:style="styles"><slot></slot></div>`,
};
