export const ListContainer = () => {};

export const List = state => ({
  listStyle: 'none',
  display: 'flex',
  padding: '.5rem',
  marginTop: '1rem',
  marginBottom: '1rem',
  flexDirection: state.orientation === 'horizontal' ? 'row' : 'column',
});

export const ListItem = () => ({
  width: '3rem',
  paddingLeft: '.5rem',
  paddingRight: '.5rem',
  display: 'flex',
  justifyContent: 'center',
});

export const ListLink = () => ({
  textDecoration: 'none',
});
