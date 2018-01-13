import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

setOptions({
  name: 'README addon',
  url: 'https://github.com/baktiaditya/bvap-storybook-readme',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: true,
});

function loadStories() {
  require('../story');
}

configure(loadStories, module);
