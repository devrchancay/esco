# SimpleSocialNetwork()

Hero for portfolio or business Webpage.

example

```jsx
import React from 'react';
import SimpleSocialNetwork from '@bit/devrchancay.esco.organisms.simple-social-network';

export default (
  <SimpleSocialNetwork
    title="Business title or portfolio"
    subTitle="Business slogan or portfolio"
    socialNetworks={[
      {
        icon: { name: 'facebook', label: 'Facebook' },
        link: { url: 'https://facebook.com', label: 'Facebook' },
      },
      {
        icon: { name: 'twitter', label: 'Twitter' },
        link: { url: 'https://twitter.com', label: 'Twitter' },
      },
      {
        icon: { name: 'linkedin', label: 'Linkedin' },
        link: { url: 'https://linkedin.com', label: 'Linkedin' },
      },
      {
        icon: { name: 'github', label: 'Github' },
        link: { url: 'https://github.com', label: 'Github' },
      },
    ]}
  />
);
```
