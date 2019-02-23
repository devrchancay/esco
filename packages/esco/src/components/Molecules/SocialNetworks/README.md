# SocialNetworks()

Widget Social network list

example

```jsx
import React from 'react';
import SocialNetworks from '@bit/devrchancay.esco.molecules.social-networks';

export default (
  <SocialNetworks
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
