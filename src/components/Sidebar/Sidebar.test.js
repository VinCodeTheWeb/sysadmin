import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

import { findByTestAttr, storeFactory } from '../../test/testUtils';
import Sidebar from './Sidebar';

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
  },
  {
    name: 'SERVER#2',
    state: 'Inactive',
    id: '1',
    ip: '127.0. 0.2',
    seen: '02/01/2021',
    message: 'OOPS! SERVER IS TURN OFF FORM SOME OBSCURE REASON!',
    barChartData: [20, 16, 21, 8, 8, 17, 2],
    locationName: 'Petra',
    location: {
      lat: 30.3285,
      lng: 35.4444
    }
  }
];

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  return mount(
    <Provider store={store}>
      <Sidebar />
    </Provider>
  );
};

describe('<SideBar />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ servers: { data, selected: [data[0]] } });
  });

  test('should render without error', () => {
    const component = findByTestAttr(wrapper, 'component-sidebar');
    expect(component.length).toBe(1);
  });

  test('should render correct length of <NavItem /> links', () => {
    const component = findByTestAttr(wrapper, 'component-navitem');
    expect(component.length).toBe(2);
  });

  test('SERVER#1 should be selected on first mount', () => {
    const { store } = wrapper.props();
    expect(store.getState().servers.selected[0].name).toBe('SERVER#1');
  });

  test('SERVER#2 should be selected on <NavItem /> clicked', () => {
    const component = findByTestAttr(wrapper, 'component-navitem');
    component
      .find('button')
      .at(1)
      .simulate('click');
    const { store } = wrapper.props();
    expect(store.getState().servers.selected[0].name).toBe('SERVER#2');
  });
});
