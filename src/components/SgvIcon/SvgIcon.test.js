import React from 'react';
import { shallow } from 'enzyme';

import SvgIcon from './SvgIcon';
import { checkProps, findByTestAttr } from '../../test/testUtils';

const setup = (props = {}) => shallow(<SvgIcon {...props} />);

describe('<SvgIcon />', () => {
  let expectedProps;
  let wrapper;
  beforeEach(() => {
    expectedProps = { icon: '', className: '' };
    wrapper = setup(expectedProps);
  });
  test('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-svg-icon');
    expect(component.length).toBe(1);
  });

  test('does not throw a warning with expected props', () => {
    expectedProps = { className: 'user-nav__icon', icon: 'bookmark' };
    checkProps(SvgIcon, expectedProps);
  });
});
