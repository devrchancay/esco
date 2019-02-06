import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text, object } from '@storybook/addon-knobs';

import { iconKeys } from '../../components/Atoms/Icon/defaultIcons';
import Icon from '../../components/Atoms/Icon';
import CustomIcon from './CustomIcon';

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
    const src = text('src', 'https://cdn.svgporn.com/logos/react.svg');
    const alt = text('alt', 'React');

    const icon = object('icon', {
      src,
      alt,
    });

    return (
      <div style={storybookStyles}>
        <Icon icon={icon} />
      </div>
    );
  })
  .add('SVG Support', () => {
    const icon = object('icon', {});
    return (
      <div style={storybookStyles}>
        <Icon icon={icon} Component={CustomIcon} />
      </div>
    );
  });

export default stories;
