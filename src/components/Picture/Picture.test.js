import React from 'react';
import { shallow } from 'enzyme';

import Picture from './Picture';
import { checkProps, findByTestAttr } from '../../test/testUtils';

const setup = (props = {}) => shallow(<Picture {...props} />);

describe('<Picture />', () => {
  let expectedProps;
  let wrapper;
  beforeEach(() => {
    expectedProps = { imageName: '' };
    wrapper = setup(expectedProps);
  });
  test('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-picture');
    expect(component.length).toBe(1);
  });

  test('does not throw a warning with expected props', () => {
    expectedProps = { imageName: '../../assets/img/user-1.jpg' };
    checkProps(Picture, expectedProps);
  });
});
