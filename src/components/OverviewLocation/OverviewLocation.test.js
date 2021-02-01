import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

import { findByTestAttr, storeFactory } from '../../test/testUtils';
import OverviewLocation from './OverviewLocation';

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
      <OverviewLocation />
    </Provider>
  );
};

describe('<OverviewLocation />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ servers: { data, selected: [data[0]] } });
  });

  test('should render without error', () => {
    const component = findByTestAttr(wrapper, 'component-overview-location');
    expect(component.length).toBe(1);
  });

  test('SERVER#1 should have a location of `Great Wall Of China`', () => {
    const { store } = wrapper.props();
    expect(store.getState().servers.selected[0].locationName).toBe(
      'Great Wall Of China'
    );
  });
});
