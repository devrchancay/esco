import React from 'react';
import { createRenderer } from 'fela';
import { RendererProvider } from 'react-fela';
import SimpleSocialNetwork from './SimpleSocialNetwork';

const renderer = createRenderer({
  selectorPrefix: 'ssn_',
});

const StyledComponent = props => (
  <RendererProvider renderer={renderer}>
    <SimpleSocialNetwork {...props} />
  </RendererProvider>
);
export default StyledComponent;
