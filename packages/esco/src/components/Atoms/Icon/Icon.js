import React from 'react';
import PropTypes from 'prop-types';

import { getIcon } from './defaultIcons';

const Icon = ({ icon }) => {
  if (icon.src && !icon.name) {
    return <img src={icon.src} alt={icon.alt} />;
  }
  const ic = getIcon(icon.name);

  return <img src={ic.src} alt={icon.alt} />;
};

Icon.propTypes = {
  icon: PropTypes.object.isRequired,
};

export default Icon;
