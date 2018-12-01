import React from 'react';
import { storiesOf } from '@storybook/react';
import { object } from '@storybook/addon-knobs';

import SocialNetworks from '../../components/Atoms/SocialNetworks';

const stories = storiesOf('Atoms|1. Social Networks', module);

const socialNetworks = object('socialNetworks', [
  { icon: { name: 'facebook' }, link: { url: 'https://facebook.com' } },
  { icon: { name: 'twitter' }, link: { url: 'https://twitter.com' } },
  { icon: { name: 'linkedin' }, link: { url: 'https://linkedin.com' } },
  { icon: { name: 'medium' }, link: { url: 'https://medium.com' } },
  { icon: { name: 'github' }, link: { url: 'https://github.com' } },
]);

stories
  .add('Social Networks', () => {
    return <SocialNetworks socialNetworks={socialNetworks} />;
  })
  .add('Orientation vertical', () => {
    return (
      <SocialNetworks socialNetworks={socialNetworks} orientation="vertical" />
    );
  });
