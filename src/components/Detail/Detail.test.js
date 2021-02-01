import React from 'react';
import { shallow } from 'enzyme';

import Detail from './Detail';

import { findByTestAttr } from '../../test/testUtils';

const setup = (props = {}) => shallow(<Detail {...props} />);

describe('<Detail />', () => {
  let expectedProps;
  let wrapper;
  beforeEach(() => {
    wrapper = setup(expectedProps);
  });

  test('renders without error', () => {
    const component = findByTestAttr(wrapper, 'detail-component');
    expect(component.length).toBe(1);
  });
});
