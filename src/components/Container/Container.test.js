import React from 'react';
import { shallow } from 'enzyme';

import Container from './Container';

import { findByTestAttr } from '../../test/testUtils';

const setup = (props = {}) => shallow(<Container {...props} />);

describe('<Container />', () => {
  let expectedProps;
  let wrapper;
  beforeEach(() => {
    expectedProps = { children: 'div', className: '' };
    wrapper = setup(expectedProps);
  });

  test('renders without error', () => {
    const component = findByTestAttr(wrapper, 'container-component');
    expect(component.length).toBe(1);
  });

  test('render `div` tag as a default htmlTypeElement', () => {
    const component = findByTestAttr(wrapper, 'container-component');
    expect(component.type()).toEqual('div');
  });
});
