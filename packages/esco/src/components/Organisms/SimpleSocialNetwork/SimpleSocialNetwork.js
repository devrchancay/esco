import React from 'react';
import PropTypes from 'prop-types';
import SocialNetworks from '../../Molecules/SocialNetworks';
import { FelaComponent } from 'react-fela';
import { Wrapper, Container, Row, Title } from './styles';

/**
 * @render react
 * @name SimpleSocialNetwork
 * @description Simple Header Hero with social networks
 * @example
 * <SimpleSocialNetwork
 *  title="Business title or portfolio"
 *  subTitle="Business slogan or portfolio"
 *  socialNetworks={[
 *   { icon: { name: 'facebook', label: 'Facebook' }, link: { url: 'https://facebook.com',label: 'Facebook' } },
 *   { icon: { name: 'twitter', label: 'Twitter' }, link: { url: 'https://twitter.com',label: 'Twitter' } },
 *   { icon: { name: 'linkedin', label: 'Linkedin' }, link: { url: 'https://linkedin.com',label: 'Linkedin' } },
 *   { icon: { name: 'github', label: 'Github' }, link: { url: 'https://github.com',label: 'Github' } },
 * ]}
 * />
 *
 */

const SimpleSocialNetwork = ({ title, subTitle, socialNetworks }) => (
  <FelaComponent esco-type="organism" style={Wrapper}>
    <FelaComponent style={Container}>
      <FelaComponent style={Row}>
        <FelaComponent style={Title} as="h1">
          {title}
        </FelaComponent>
        <FelaComponent style={Title} as="h2">
          {subTitle}
        </FelaComponent>
      </FelaComponent>
      <FelaComponent style={Row}>
        <SocialNetworks socialNetworks={socialNetworks} />
      </FelaComponent>
    </FelaComponent>
  </FelaComponent>
);

SimpleSocialNetwork.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  socialNetworks: PropTypes.array.isRequired,
};

export default SimpleSocialNetwork;
