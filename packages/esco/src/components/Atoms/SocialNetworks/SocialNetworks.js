import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';

/**
 * @render react
 * @name SocialNetworks
 * @description Widget menu for social networks
 * @example
 * <SocialNetworks
 *  socialNetworks={[
    { icon: { name: 'facebook' }, link: { url: 'https://facebook.com' } },
    { icon: { name: 'twitter' }, link: { url: 'https://twitter.com' } },
    { icon: { name: 'linkedin' }, link: { url: 'https://linkedin.com' } },
    { icon: { name: 'github' }, link: { url: 'https://github.com' } },
  ]}
 * />
 *
 */

const SocialNetworks = ({ socialNetworks, orientation }) => (
  <div className="esco_SocialNetworks">
    <ul
      className={`esco_SocialNetworks__list${
        orientation === 'vertical' ? '--vertical' : ''
      }`}
    >
      {socialNetworks.map((social, key) => (
        <li className="esco_SocialNetworks__item" key={key}>
          <a
            className="esco_SocialNetworks__link"
            href={social.link.url}
            target={social.link.target ? social.link.target : '_blank'}
          >
            <Icon icon={social.icon} />
          </a>
        </li>
      ))}
    </ul>
  </div>
);

SocialNetworks.propTypes = {
  socialNetworks: PropTypes.array.isRequired,
  orientation: PropTypes.string.isRequired,
};

SocialNetworks.defaultProps = {
  orientation: 'horizontal',
};

export default SocialNetworks;
