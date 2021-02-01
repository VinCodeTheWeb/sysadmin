import React from 'react';
import { shallow } from 'enzyme';

import SpanNotif from './SpanNotif';
import { checkProps, findByTestAttr } from '../../test/testUtils';

const setup = (props = {}) => shallow(<SpanNotif {...props} />);

describe('<SpanNotif />', () => {
  let expectedProps;
  let wrapper;
  beforeEach(() => {
    expectedProps = { className: '', notif: '' };
    wrapper = setup(expectedProps);
  });
  test('renders without error', () => {
    const component = findByTestAttr(wrapper, 'span-notif-component');
    expect(component.length).toBe(1);
  });

  test('does not throw a warning with expected props', () => {
    expectedProps = { className: 'user-nav__user-name', notif: 'John Doe' };
    checkProps(SpanNotif, expectedProps);
  });
});
