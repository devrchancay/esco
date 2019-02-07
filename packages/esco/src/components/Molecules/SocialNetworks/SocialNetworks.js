import React from 'react';
import PropTypes from 'prop-types';
import { FelaComponent } from 'react-fela';
import Icon from '../../Atoms/Icon';
import { ListContainer, List, ListItem, ListLink } from './styles';

/**
 * @render react
 * @name SocialNetworks
 * @description Widget menu for social networks
 * @example
 * import React from 'react';
 * import SocialNetworks from '@bit/devrchancay.esco.molecules.social-networks';
 *
 * export default (
 *  <SocialNetworks
 *   socialNetworks={[
 *    { icon: { name: 'facebook', label: 'Facebook' }, link: { url: 'https://facebook.com', label: 'Facebook' } },
 *    { icon: { name: 'twitter',label: 'Twitter'  }, link: { url: 'https://twitter.com',label: 'Twitter' } },
 *    { icon: { name: 'linkedin',label: 'Linkedin'  }, link: { url: 'https://linkedin.com', label: 'Linkedin' } },
 *    { icon: { name: 'github',label: 'Github'  }, link: { url: 'https://github.com', label: 'Github' } },
 *   ]}
 *  />
 * );
 *
 */

const SocialNetworks = ({ socialNetworks, orientation }) => (
  <FelaComponent style={ListContainer}>
    <FelaComponent style={List} orientation={orientation} as="ul">
      {socialNetworks.length > 0 &&
        socialNetworks.map((social, key) => (
          <FelaComponent style={ListItem} key={key} as="li">
            <FelaComponent style={ListLink}>
              {({ className }) => (
                <a
                  aria-label={social.link.label}
                  href={social.link.url}
                  target={social.link.target ? social.link.target : '_blank'}
                  className={className}
                >
                  <Icon icon={social.icon} />
                </a>
              )}
            </FelaComponent>
          </FelaComponent>
        ))}
    </FelaComponent>
  </FelaComponent>
);

SocialNetworks.propTypes = {
  socialNetworks: PropTypes.array.isRequired,
  orientation: PropTypes.string.isRequired,
  theme: PropTypes.object,
};

SocialNetworks.defaultProps = {
  orientation: 'horizontal',
};

export default React.memo(SocialNetworks);
