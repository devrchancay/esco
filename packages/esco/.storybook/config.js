import React from 'react';
import { configure, setAddon, addDecorator } from '@storybook/react';
import infoAddon, { withInfo } from '@storybook/addon-info';
import { withOptions } from '@storybook/addon-options';
import { withKnobs } from '@storybook/addon-knobs';
import { setConsoleOptions, withConsole } from '@storybook/addon-console';
import { checkA11y } from '@storybook/addon-a11y';

setConsoleOptions({
  panelExclude: [],
});

addDecorator(withKnobs);

addDecorator(story => <div>{story()}</div>);
addDecorator((storyFn, context) => withConsole()(storyFn)(context));

addDecorator(
  withOptions({
    name: 'ESCO',
    url: 'https://esco.netlify.com/',
    goFullScreen: false,
    showStoriesPanel: true,
    showAddonPanel: true,
    showSearchBox: false,
    addonPanelInRight: true,
    sortStoriesByKind: true,
    hierarchySeparator: /\//,
    hierarchyRootSeparator: /\|/,
  }),
);

setAddon(infoAddon);

const req = require.context('../src', true, /stories\.js$/);

addDecorator(checkA11y);

function loadStories() {
  req.keys().forEach(filename => {
    req(filename);
  });
}

configure(loadStories, module);
