import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

import { findByTestAttr, storeFactory } from '../../test/testUtils';
import MapContainer from './MapContainer';

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
      <MapContainer />
    </Provider>
  );
};

describe('<MapContainer />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ servers: { data, selected: [data[0]] } });
  });

  test('should render without error', () => {
    const component = findByTestAttr(wrapper, 'mapcontainer-component');
    expect(component.length).toBe(1);
  });

  test('should get correct lng and lat from selected server in store', () => {
    const { store } = wrapper.props();
    expect(store.getState().servers.selected[0].location.lat).toBe(40.4319);
    expect(store.getState().servers.selected[0].location.lng).toBe(116.5704);
  });
});
