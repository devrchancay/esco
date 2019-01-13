import React from 'react';
import { createRenderer } from 'fela';
import { RendererProvider } from 'react-fela';
import SocialNetworks from './SocialNetworks';

const renderer = createRenderer({
  selectorPrefix: 'sn_',
});

const StyledComponent = props => (
  <RendererProvider renderer={renderer}>
    <SocialNetworks {...props} />
  </RendererProvider>
);
export default StyledComponent;
