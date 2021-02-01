import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';

import { findByTestAttr } from '../../test/testUtils';

const setup = (props = {}) => shallow(<Header {...props} />);

describe('<Header />', () => {
  let expectedProps;
  let wrapper;
  beforeEach(() => {
    wrapper = setup(expectedProps);
  });

  test('renders without error', () => {
    const component = findByTestAttr(wrapper, 'header-component');
    expect(component.length).toBe(1);
  });
});
