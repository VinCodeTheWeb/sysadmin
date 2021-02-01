import React from 'react';
import { shallow } from 'enzyme';

import Main from './Main';

import { findByTestAttr } from '../../test/testUtils';

const setup = (props = {}) => shallow(<Main {...props} />);

describe('<Main />', () => {
  let expectedProps;
  let wrapper;
  beforeEach(() => {
    expectedProps = { icon: '', className: '' };
    wrapper = setup(expectedProps);
  });
  test('renders without error', () => {
    const component = findByTestAttr(wrapper, 'main-component');
    expect(component.length).toBe(1);
  });

  test('<Main /> should have 2 children rendered', () => {
    const children = findByTestAttr(wrapper, 'main-component').children();
    expect(children.length).toBe(2);
  });
});
