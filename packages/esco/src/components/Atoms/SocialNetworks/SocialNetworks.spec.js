import React from 'react';
import SocialNetworks from './SocialNetworks';
import { shallow } from 'enzyme';

const socialNetworks = [
  {
    icon: { name: 'Facebook', alt: 'facebook' },
    link: { url: 'https://facebook.com' },
  },
];

describe('SocialNetworks', function() {
  const wrapper = shallow(<SocialNetworks socialNetworks={socialNetworks} />);

  it('It should have a defined structure', () => {
    expect(wrapper.find('ul')).toHaveLength(1);
    expect(wrapper.find('ul li').length).toEqual(socialNetworks.length);
    expect(wrapper.find('ul li a').length).toEqual(socialNetworks.length);
  });

  it('Should contain the url', () => {
    expect(wrapper.find('ul li a').prop('href')).toEqual(
      socialNetworks[0].link.url,
    );
  });
});
