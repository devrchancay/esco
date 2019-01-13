import React from 'react';
import Button from '.';
import { mount } from 'enzyme';

const label = 'Click me';
const handleClick = () => {
  console.log('hello world');
};

describe('Simple buttons', () => {
  const wrapper = mount(<Button label={label} handleClick={handleClick} />);

  it('Render button', () => {
    expect(wrapper.find('button')).toHaveLength(1);
  });
});
