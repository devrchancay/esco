import React from 'react';
import { createRenderer } from 'fela';
import { RendererProvider } from 'react-fela';
import Button from './button';

const renderer = createRenderer({
  selectorPrefix: 'btn_',
});

const StyledComponent = props => (
  <RendererProvider renderer={renderer}>
    <Button {...props} />
  </RendererProvider>
);
export default StyledComponent;
