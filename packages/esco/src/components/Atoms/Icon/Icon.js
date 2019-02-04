import React from 'react';
import PropTypes from 'prop-types';
import { FelaComponent } from 'react-fela';
import { Img } from './styles';
import { getIcon } from './defaultIcons';

/**
 * @render react
 * @name Icon
 * @description Simple Icon with src or default value.
 * @example
    import React from 'react';
    import Icon from '@bit/devrchancay.esco.atoms.icon';
    
    export default ( 
      <div style={{ width: '100px' }} >
        <Icon icon={{ name: 'facebook', alt: 'follow me' }} />
      </div>
    );
 */

const Icon = ({ icon }) => (
  <FelaComponent style={Img}>
    {({ className }) => {
      const src = icon.src && !icon.name ? icon.src : getIcon(icon.name).src;

      return (
        <img
          esco-type="atom"
          aria-label={icon.alt}
          src={src}
          className={className}
          alt={icon.alt}
        />
      );
    }}
  </FelaComponent>
);

Icon.propTypes = {
  icon: PropTypes.object.isRequired,
};

export default Icon;
