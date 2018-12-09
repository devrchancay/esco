import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../../Atoms/Icon';

/**
 * @render react
 * @name SocialNetworks
 * @description Widget menu for social networks
 * @example
 * <SocialNetworks
 *  socialNetworks={[
 *   { icon: { name: 'facebook', label: 'Facebook' }, link: { url: 'https://facebook.com', label: 'Facebook' } },
 *   { icon: { name: 'twitter',label: 'Twitter'  }, link: { url: 'https://twitter.com',label: 'Twitter' } },
 *   { icon: { name: 'linkedin',label: 'Linkedin'  }, link: { url: 'https://linkedin.com', label: 'Linkedin' } },
 *   { icon: { name: 'github',label: 'Github'  }, link: { url: 'https://github.com', label: 'Github' } },
  ]}
 * />
 *
 */

const SocialNetworks = ({ socialNetworks, orientation }) => (
  <div esco-type="molecule" className="esco_SocialNetworks">
    <ul
      className={`esco_SocialNetworks__list${
        orientation === 'vertical' ? '--vertical' : ''
      }`}
    >
      {socialNetworks.map((social, key) => (
        <li className="esco_SocialNetworks__item" key={key}>
          <a
            aria-label={social.link.label}
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
