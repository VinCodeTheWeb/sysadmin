import React from 'react';
import { shallow } from 'enzyme';

import Heading from './Heading';

import { findByTestAttr } from '../../test/testUtils';

const setup = (props = {}) => shallow(<Heading {...props} />);

describe('<Heading />', () => {
  let expectedProps;
  let wrapper;
  beforeEach(() => {
    expectedProps = { text: 'Heading', className: '' };
    wrapper = setup(expectedProps);
  });

  test('renders without error', () => {
    const component = findByTestAttr(wrapper, 'heading-component');
    expect(component.length).toBe(1);
  });

  test('render `h1` tag as a default htmlTypeElement', () => {
    const component = findByTestAttr(wrapper, 'heading-component');
    expect(component.type()).toEqual('h1');
  });
});
