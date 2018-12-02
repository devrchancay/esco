import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Button from '../../components/Atoms/Button';

const storybookStyles = {
  width: '150px',
  padding: '0.5rem',
};

const stories = storiesOf('Atoms/Buttons', module);

stories.add('Default Button', () => {
  const label = text('label', 'Click me');

  return (
    <div style={storybookStyles}>
      <Button label={label} actionClick={action('button-click')} />
    </div>
  );
});

export default stories;
