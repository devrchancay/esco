import React from 'react';
import { configure, setAddon, addDecorator } from '@storybook/react';
import infoAddon, { withInfo } from '@storybook/addon-info';
import { withOptions } from '@storybook/addon-options';
import { withKnobs } from '@storybook/addon-knobs';
import { setConsoleOptions, withConsole } from '@storybook/addon-console';

setConsoleOptions({
  panelExclude: [],
});

addDecorator(withKnobs);

addDecorator(story => <div>{story()}</div>);
addDecorator((storyFn, context) => withConsole()(storyFn)(context));

withOptions({
  name: 'Codedebug - ESCO',
  url: 'https://www.codedebug.co/',
  goFullScreen: false,
  showStoriesPanel: true,
  showAddonPanel: true,
  showSearchBox: false,
  addonPanelInRight: true,
  sortStoriesByKind: true,
  hierarchySeparator: /\//,
  hierarchyRootSeparator: /\|/,
});

withInfo({
  inline: false,
  maxPropsIntoLine: 1,
  maxPropObjectKeys: 10,
  maxPropArrayLength: 10,
  maxPropStringLength: 100,
});

setAddon(infoAddon);

const req = require.context('../src', true, /stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => {
    req(filename);
  });
}

configure(loadStories, module);
