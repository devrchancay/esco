import React from 'react';
import { storiesOf } from '@storybook/react';
import { object } from '@storybook/addon-knobs';

import SocialNetworks from '../../components/Molecules/SocialNetworks';

const stories = storiesOf('Molecules/SocialNetworks', module);

const socialNetworks = object('socialNetworks', [
  {
    icon: { name: 'facebook', label: 'Facebook' },
    link: { url: 'https://facebook.com', label: 'Facebook' },
  },
  {
    icon: { name: 'twitter', label: 'Twitter' },
    link: { url: 'https://twitter.com', label: 'Twitter' },
  },
  {
    icon: { name: 'linkedin', label: 'Linkedin' },
    link: { url: 'https://linkedin.com', label: 'Linkedin' },
  },
  {
    icon: { name: 'medium', label: 'Medium' },
    link: { url: 'https://medium.com', label: 'Medium' },
  },
  {
    icon: { name: 'github', label: 'Github' },
    link: { url: 'https://github.com', label: 'Github' },
  },
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
