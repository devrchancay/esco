import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, object } from '@storybook/addon-knobs';

import SimpleSocialNetwork from '../../components/Organisms/SimpleSocialNetwork';

import { checkA11y } from '@storybook/addon-a11y';

const stories = storiesOf('Organisms', module);

stories.addDecorator(checkA11y).add('Simple Social network', () => {
  const title = text('title', 'Hello this Title');
  const subTitle = text('subTitle', 'Hello this subTitle');
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

  return (
    <SimpleSocialNetwork
      title={title}
      subTitle={subTitle}
      socialNetworks={socialNetworks}
    />
  );
});
