import React from "react";
import PropTypes from "prop-types";

/**
 * @render react
 * @name SocialNetworks
 * @description Widget menu for social networks
 * @example
 * <SocialNetworks
 *   socialNetworks={[{"name": "Facebook","url": "https://facebook.com"},{"name": "Twitter","url": "https://twitter.com"}]}
 * />
 *
 */

const SocialNetworks = ({ socialNetworks }) => (
  <div className="esco_SocialNetworks">
    <ul className="esco_SocialNetworks__list">
      {socialNetworks.map(social => (
        <li className="esco_SocialNetworks__item">
          <a
            className="esco_SocialNetworks__link"
            href={social.url}
            target={social.target ? social.target : "_blank"}
          >
            {social.name[0]}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

SocialNetworks.propTypes = {
  socialNetworks: PropTypes.array.isRequired
};

export default SocialNetworks;
