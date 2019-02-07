# Button()

Buttons

example

```jsx
{
  /* Default button */
}
import React from 'react';
import Button from '@bit/devrchancay.esco.atoms.button';
const styles = {
  backgroundColor: '#606f7b',
  border: 'solid 1px #606f7b',
  color: 'white',
  ':hover': {
    backgroundColor: '#777f7b',
    borderColor: '#777f7b',
  },
};
const events = {
  onClick: () => {
    console.log('button onClick');
  },
  onFocus: () => {
    console.log('button onFocus');
  },
};

export default (
  <Button styles={styles} events={events}>
    click Me ⭐️
  </Button>
);
```

```jsx
{
  /* Button link */
}
import React from 'react';
import Button from '@bit/devrchancay.esco.atoms.button';
const styles = {
  backgroundColor: 'transparent',
  border: 'none',
  ':hover': {
    textDecoration: 'underline',
  },
};
const events = {
  onClick: () => {
    console.log('button onClick');
  },
  onFocus: () => {
    console.log('button onFocus');
  },
};

export default (
  <Button styles={styles} events={events}>
    click Me ⭐️
  </Button>
);
```
