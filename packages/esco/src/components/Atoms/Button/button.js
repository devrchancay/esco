import React from 'react';
import PropTypes from 'prop-types';

/**
 * @render react
 * @name Button
 * @description Simple button with cta
 * @example
 * <Button
 *   label="click Me"
 *   actionClick={() => { console.log('Hello world') }}
 * />
 *
 */

const Button = ({ label, actionClick, color, type }) => (
  <button
    esco-type="atom"
    className={`simpleBtn simpleBtn--${color} simpleBtn--${type}`}
    onClick={actionClick}
  >
    {label}
  </button>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  actionClick: PropTypes.func.isRequired,
  type: PropTypes.string,
  color: PropTypes.string,
};

Button.defaultProps = {
  actionClick: () => {},
  type: 'button',
  color: 'primary',
};

export default Button;
