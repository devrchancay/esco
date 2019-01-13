export const simpleBtn = ({
  backgroundColor = '#606f7b',
  color,
  type = 'button',
}) => ({
  fontWeight: '700',
  paddingTop: '.5rem',
  paddingBottom: '.5rem',
  paddingLeft: '1rem',
  paddingRight: '1rem',
  backgroundColor: type === 'button' ? backgroundColor : 'transparent',
  borderRadius: type === 'button' ? '.25rem' : 'none',
  borderStyle: type === 'button' ? '' : 'none',
  color:
    type === 'button'
      ? color
        ? color
        : 'white'
      : color
      ? color
      : backgroundColor,
  ':hover': {
    cursor: 'pointer',
    textDecoration: type === 'button' ? 'none' : 'underline',
  },
  ':focus': {
    textDecoration: type === 'button' ? 'none' : 'underline',
  },
});
