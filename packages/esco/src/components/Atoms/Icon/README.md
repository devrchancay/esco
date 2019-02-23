# Icon()

Simple Icon with src or default value.

example

Facebook Icon

```jsx
import React from 'react';
import Icon from '@bit/devrchancay.esco.atoms.icon';

export default (
  <div style={{ width: '100px' }}>
    <Icon icon={{ name: 'facebook', alt: 'follow me' }} />
  </div>
);
```

Custom Icon

```jsx
import React from 'react';
import Icon from '@bit/devrchancay.esco.atoms.icon';

export default (
  <div style={{ width: '100px' }}>
    <Icon icon={{src: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/gatsby.svg", alt="follow me"}}/>
  </div>
);
```
