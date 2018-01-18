import MarkdownContainer from './components/MarkdownContainer';
import ContainerDocs from './components/Story';
import StoryPreview from './components/StoryPreview';
import FooterDocs from './components/FooterDocs';

import commonHandler from '../common';

function renderStory({ storyFn, kind, story, docs, config }) {
  const ContainerComponent = config.ContainerComponent || ContainerDocs;
  const PreviewComponent = config.PreviewComponent || StoryPreview;
  const FooterComponent = config.FooterComponent || FooterDocs;

  return {
    data() {
      return {
        story: storyFn({ kind, story }),
      };
    },

    render(h) {
      return h(
        ContainerComponent,
        {
          props: {
            docs,
          },
        },
        [
          h(PreviewComponent, [h(this.story)]),
          h(FooterComponent, { slot: 'footer' }, [
            h(MarkdownContainer, {
              props: {
                docs: [config.docsAtFooter],
              },
            }),
          ]),
        ]
      );
    },
  };
}

function withDocsCallAsHoc({ docs, config, storyFn }) {
  return ({ kind, story }) =>
    renderStory({
      docs,
      config,
      storyFn,
      kind,
      story,
    });
}

function withDocsCallAsDecorator({ docs, config }) {
  return (storyFn, { kind, story }) =>
    renderStory({
      docs,
      config,
      storyFn,
      kind,
      story,
    });
}

export default {
  withReadme: commonHandler.withReadme,
  withDocs: {
    callAsDecorator: withDocsCallAsDecorator,
    callAsHoc: withDocsCallAsHoc,
  },
  ContainerDocs,
  StoryPreview,
  FooterDocs,
};
