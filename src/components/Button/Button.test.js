import React from 'react';
import { shallow } from 'enzyme';

import Button from './Button';

import { checkProps, findByTestAttr } from '../../test/testUtils';

const setup = (props = {}) => shallow(<Button {...props} />);

describe('<Button />', () => {
  let expectedProps;
  let wrapper;
  beforeEach(() => {
    expectedProps = { children: 'span', className: '' };
    wrapper = setup(expectedProps);
  });

  test('renders without error', () => {
    const component = findByTestAttr(wrapper, 'button-component');
    expect(component.length).toBe(1);
  });

  test('does not throw a warning with expected props', () => {
    checkProps(Button, expectedProps);
  });
});
