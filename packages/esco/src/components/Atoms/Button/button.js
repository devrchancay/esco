import React from 'react';
import PropTypes from 'prop-types';
import { FelaComponent } from 'react-fela';
import { simpleBtn } from './styles';

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

const Button = ({ label, actionClick, type }) => (
  <FelaComponent style={simpleBtn} type={type}>
    {({ className }) => (
      <button esco-type="atom" className={className} onClick={actionClick}>
        {label}
      </button>
    )}
  </FelaComponent>
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
