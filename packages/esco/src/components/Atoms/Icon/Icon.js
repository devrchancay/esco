import React from 'react';
import PropTypes from 'prop-types';

import { getIcon } from './defaultIcons';

/**
 * @render react
 * @name Icon
 * @description Simple Icon with src or default value.
 * @example
    <div style={{ width: '100px' }} ><Icon icon={{ name: 'facebook', alt: 'follow me' }} /></div>
 */

const Icon = ({ icon }) => {
  if (icon.src && !icon.name) {
    return (
      <img
        aria-label={icon.label}
        esco-type="atom"
        src={icon.src}
        alt={icon.alt}
        title={icon.label}
      />
    );
  }
  const ic = getIcon(icon.name);

  return (
    <img
      aria-label={icon.label}
      title={icon.label}
      esco-type="atom"
      src={ic.src}
      alt={icon.alt}
    />
  );
};

Icon.propTypes = {
  icon: PropTypes.object.isRequired,
};

export default Icon;
