import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

setOptions({
  name: 'README addon',
  url: 'https://github.com/baktiaditya/bvap-storybook-readme',
  goFullScreen: false,
  showStoriesPanel: true,
  showAddonPanel: true,
  showSearchBox: false,
  addonPanelInRight: true,
});

function loadStories() {
  require('../story');
}

configure(loadStories, module);
