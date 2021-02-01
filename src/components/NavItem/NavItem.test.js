import React from 'react';
import { shallow } from 'enzyme';

import NavItem from './NavItem';
import { checkProps, findByTestAttr } from '../../test/testUtils';

const setup = (props = {}) => shallow(<NavItem {...props} />);

describe('<NavItem />', () => {
  let expectedProps;
  let wrapper;
  beforeEach(() => {
    expectedProps = { textLink: '', active: false, handleClick: jest.fn() };
    wrapper = setup(expectedProps);
  });
  test('renders without error', () => {
    const component = findByTestAttr(wrapper, 'navitem-component');
    expect(component.length).toBe(1);
  });

  test('does not throw a warning with expected props', () => {
    expectedProps = {
      ...expectedProps,
      textLink: 'SERVER#1'
    };
    checkProps(NavItem, expectedProps);
  });

  test('should have a className of `side-nav__item--active` on selected SERVER#', () => {
    expectedProps = {
      ...expectedProps,
      active: true
    };
    wrapper = setup(expectedProps);

    const classList = findByTestAttr(wrapper, 'navitem-component');
    expect(classList.hasClass('side-nav__item--active')).toEqual(true);
  });
});
