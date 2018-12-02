import React from 'react';
import { storiesOf } from '@storybook/react';
import { object } from '@storybook/addon-knobs';

import SocialNetworks from '../../components/Molecules/SocialNetworks';

const stories = storiesOf('Molecules/SocialNetworks', module);

const socialNetworks = object('socialNetworks', [
  { icon: { name: 'facebook' }, link: { url: 'https://facebook.com' } },
  { icon: { name: 'twitter' }, link: { url: 'https://twitter.com' } },
  { icon: { name: 'linkedin' }, link: { url: 'https://linkedin.com' } },
  { icon: { name: 'medium' }, link: { url: 'https://medium.com' } },
  { icon: { name: 'github' }, link: { url: 'https://github.com' } },
]);

stories
  .add('horizontal Menu', () => {
    return <SocialNetworks socialNetworks={socialNetworks} />;
  })
  .add('Vertical Menu', () => {
    return (
      <SocialNetworks socialNetworks={socialNetworks} orientation="vertical" />
    );
  });
