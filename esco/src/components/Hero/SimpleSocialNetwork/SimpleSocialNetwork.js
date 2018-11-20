import React from "react";
import PropTypes from "prop-types";

/**
 * @render react
 * @name SimpleSocialNetwork
 * @description Simple Header Hero with social networks
 * @example
 * <SimpleSocialNetwork
 *   title="Business Or Portfolio Title"
 *   subTitle="Business Or Porfolio slogan"
 *   socialNetworks={[{ name: 'Facebook', url:'https://facebook.com'}]}
 * />
 *
 */

const SimpleSocialNetwork = ({ title, subTitle, socialNetworks }) => (
  <div className="esco_SimpleSocialNetwork">
    <div className="esco_SimpleSocialNetwork__container">
      <div className="esco_SimpleSocialNetwork__row">
        <h1 className="esco_SimpleSocialNetwork__title">{title}</h1>
        <h2 className="esco_SimpleSocialNetwork__subtitle">{subTitle}</h2>
      </div>
      <div className="esco_SimpleSocialNetwork__row">
        <ul className="esco_SimpleSocialNetwork__list">
          {socialNetworks.map(social => (
            <li className="esco_SimpleSocialNetwork__item">
              <a
                href={social.url}
                target={social.target ? social.target : "_blank"}
              >
                {social.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

SimpleSocialNetwork.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  socialNetworks: PropTypes.array.isRequired
};

export default SimpleSocialNetwork;
