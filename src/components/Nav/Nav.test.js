import React from 'react';
import { shallow } from 'enzyme';

import Nav from './Nav';
import { checkProps, findByTestAttr } from '../../test/testUtils';

const setup = (props = {}) => shallow(<Nav {...props} />);

describe('<Nav />', () => {
  let expectedProps;
  let wrapper;
  beforeEach(() => {
    expectedProps = { children: <div />, className: '' };
    wrapper = setup(expectedProps);
  });
  test('renders without error', () => {
    const component = findByTestAttr(wrapper, 'nav-component');
    expect(component.length).toBe(1);
  });

  test('does not throw a warning with expected props', () => {
    checkProps(Nav, expectedProps);
  });
});
