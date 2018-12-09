import React from 'react';
import PropTypes from 'prop-types';
import SocialNetworks from '../../Molecules/SocialNetworks';

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
  <div esco-type="organism" className="esco_SimpleSocialNetwork">
    <div className="esco_SimpleSocialNetwork__container">
      <div className="esco_SimpleSocialNetwork__row">
        <h1 className="esco_SimpleSocialNetwork__title">{title}</h1>
        <h2 className="esco_SimpleSocialNetwork__subtitle">{subTitle}</h2>
      </div>
      <div className="esco_SimpleSocialNetwork__row">
        <SocialNetworks socialNetworks={socialNetworks} />
      </div>
    </div>
  </div>
);

SimpleSocialNetwork.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  socialNetworks: PropTypes.array.isRequired,
};

export default SimpleSocialNetwork;
