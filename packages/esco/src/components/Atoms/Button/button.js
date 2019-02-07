import React from 'react';
import PropTypes from 'prop-types';
import { FelaComponent } from 'react-fela';
import { simpleBtn } from './styles';

/**
 * @render react
 * @name Button
 * @description Simple button with cta
 * @example
 * import React from 'react';
 * import Button from '@bit/devrchancay.esco.atoms.button';
 * const styles = {
 *    backgroundColor: '#606f7b',
 *    border: 'solid 1px #606f7b',
 *    color: 'white',
 *    ':hover': {
 *        backgroundColor: '#777f7b',
 *        borderColor: '#777f7b',
 *    }
 *  };
 * const events = {
 *  onClick: () => { console.log('button onClick')},
 *  onFocus: () => { console.log('button onFocus')},
 * }
 *
 * export default (
 *  <Button styles={styles} events={events}>click Me ⭐️</Button>
 * )
 *
 */

const Button = ({ events, styles, children }) => (
  <FelaComponent style={simpleBtn} styles={styles}>
    {({ className }) => (
      <button esco-type="atom" className={className} {...events}>
        {children}
      </button>
    )}
  </FelaComponent>
);

Button.propTypes = {
  events: PropTypes.object,
  styles: PropTypes.styles,
};

Button.defaultProps = {
  events: {},
  children: null,
};

export default Button;
