import React from 'react';
import { createRenderer } from 'fela';
import { RendererProvider } from 'react-fela';
import Icon from './Icon';

const renderer = createRenderer({
  selectorPrefix: 'ic_',
});

const StyledComponent = props => (
  <RendererProvider renderer={renderer}>
    <Icon {...props} />
  </RendererProvider>
);
export default StyledComponent;
