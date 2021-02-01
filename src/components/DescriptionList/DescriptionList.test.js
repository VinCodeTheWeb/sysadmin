import React from 'react';
import { shallow } from 'enzyme';

import DescriptionList from './DescriptionList';
import { checkProps, findByTestAttr } from '../../test/testUtils';

const setup = (props = {}) => shallow(<DescriptionList {...props} />);

describe('<DescriptionList />', () => {
  let expectedProps;
  let wrapper;
  beforeEach(() => {
    expectedProps = { keyName: 'ID', text: '1' };
    wrapper = setup(expectedProps);
  });
  test('renders without error', () => {
    const component = findByTestAttr(wrapper, 'description-list-component');
    expect(component.length).toBe(1);
  });

  test('does not throw a warning with expected props', () => {
    checkProps(DescriptionList, expectedProps);
  });
});
