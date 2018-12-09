import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text, object } from '@storybook/addon-knobs';

import { iconKeys } from '../../components/Atoms/Icon/defaultIcons';
import Icon from '../../components/Atoms/Icon';

const stories = storiesOf('Atoms/Icons', module);
const storybookStyles = {
  width: '50px',
  padding: '0.5rem',
};

stories

  .add('Default Social Networks Icons', () => {
    const name = select('name', iconKeys, 'twitter');
    const icon = object('icon', {
      name,
      alt: 'Follow me',
    });

    return (
      <div style={storybookStyles}>
        <Icon icon={icon} />
      </div>
    );
  })
  .add('Custom src Icon', () => {
    const src = text(
      'src',
      'https://codedebug.co/static/logo-credits.a68e7e7f.png',
    );
    const alt = text('alt', 'codedebug.co');

    const icon = object('icon', {
      src,
      alt,
    });

    return (
      <div style={storybookStyles}>
        <Icon icon={icon} />
      </div>
    );
  });

export default stories;
