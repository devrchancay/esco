import React from 'react';
import { storiesOf } from '@storybook/react';
import { object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Button from '../../components/Atoms/Button';
import Icon from '../../components/Atoms/Icon';

const storybookStyles = {
  width: '150px',
  padding: '0.5rem',
};

const events = {
  onClick: action('button-click'),
  onFocus: action('button-focus'),
  onMouseEnter: action('button-onMouseEnter'),
  onMouseLeave: action('button-onMouseLeave'),
};

const stories = storiesOf('Atoms/Buttons', module);

stories
  .add('Default Button', () => {
    const defaultButton = object('styles', {
      backgroundColor: '#606f7b',
      border: 'solid 1px #606f7b',
      color: 'white',
      ':hover': {
        backgroundColor: '#777f7b',
        borderColor: '#777f7b',
      },
    });
    return (
      <div style={storybookStyles}>
        <Button styles={defaultButton} events={events}>
          Hola Mundo
        </Button>
      </div>
    );
  })
  .add('Link - Button', () => {
    const buttonLink = object('styles', {
      backgroundColor: 'transparent',
      border: 'none',
      ':hover': {
        textDecoration: 'underline',
      },
    });
    return (
      <div style={storybookStyles}>
        <Button styles={buttonLink} events={events}>
          button link
        </Button>
      </div>
    );
  })
  .add('Icon - Button', () => {
    const icon = object('icon', {
      name: 'twitter',
      alt: 'Follow me',
    });
    const buttonIcon = object('styles', {
      display: 'flex',
      lineHeight: '25px',
      ...defaultButton,
    });
    return (
      <div style={storybookStyles}>
        <Button styles={buttonIcon} events={events}>
          <div style={{ width: '25px', height: '25px', marginRight: '2px' }}>
            <Icon icon={icon} />
          </div>
          <span>button link</span>
        </Button>
      </div>
    );
  });

export default stories;
