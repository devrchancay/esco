import React from 'react';
import Icon from './Icon';
import { shallow } from 'enzyme';

describe('Icons', () => {
  const twitterIcon = { name: 'twitter', alt: 'Follow Me' };

  const wrapper = shallow(<Icon icon={twitterIcon} />);

  it('Should have alt attribute', () => {
    expect(wrapper.find('img').prop('alt')).toEqual(twitterIcon.alt);
  });

  it('Should have src attribute', () => {
    expect(wrapper.find('img').prop('src')).toContain('data');
  });
});
