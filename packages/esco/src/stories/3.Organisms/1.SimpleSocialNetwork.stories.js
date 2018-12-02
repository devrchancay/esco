import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, object } from '@storybook/addon-knobs';

import SimpleSocialNetwork from '../../components/Organisms/SimpleSocialNetwork';

const stories = storiesOf('Organisms', module);

stories.add('Simple Social network', () => {
  const title = text('title', 'Hello this Title');
  const subTitle = text('subTitle', 'Hello this subTitle');
  const socialNetworks = object('socialNetworks', [
    { icon: { name: 'facebook' }, link: { url: 'https://facebook.com' } },
    { icon: { name: 'twitter' }, link: { url: 'https://twitter.com' } },
    { icon: { name: 'linkedin' }, link: { url: 'https://linkedin.com' } },
    { icon: { name: 'medium' }, link: { url: 'https://medium.com' } },
    { icon: { name: 'github' }, link: { url: 'https://github.com' } },
  ]);

  return (
    <SimpleSocialNetwork
      title={title}
      subTitle={subTitle}
      socialNetworks={socialNetworks}
    />
  );
});
