import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

import { findByTestAttr, storeFactory } from '../../test/testUtils';
import OverviewState from './OverviewState';

const data = [
  {
    name: 'SERVER#1',
    state: 'Active',
    id: '0',
    ip: '127.0. 0.1',
    seen: '01/01/2021',
    message: 'GOOD NEWS! SERVER IS RUNNING SMOOTHLY!',
    barChartData: [7, 12, 23, 4, 5, 2, 21],
    locationName: 'Great Wall Of China',
    location: {
      lat: 40.4319,
      lng: 116.5704
    }
  }
];

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  return mount(
    <Provider store={store}>
      <OverviewState />
    </Provider>
  );
};

describe('<OverviewState />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ servers: { data, selected: [data[0]] } });
  });

  test('should render without error', () => {
    const component = findByTestAttr(wrapper, 'component-overview-state');
    expect(component.length).toBe(1);
  });

  test('SERVER#1 should have a state of `Active`', () => {
    const { store } = wrapper.props();
    expect(store.getState().servers.selected[0].state).toBe('Active');
  });

  test('SERVER#1 should have a color of #2998ff on `Active` state', () => {
    const containerStyles = findByTestAttr(
      wrapper,
      'component-overview-state'
    ).props().styles;
    expect(containerStyles.backgroundColor).toBe('#2998ff');
  });
});
