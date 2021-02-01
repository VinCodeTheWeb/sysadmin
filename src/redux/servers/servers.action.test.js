import { storeFactory } from '../../test/testUtils';
import { selectServer, getServers } from './servers.action';
import { ServersActionTypes } from './servers.types';
import { data } from './data';

describe('getServers', () => {
  test('returns an action with type `GET_SERVERS`', () => {
    const store = storeFactory();
    const action = store.dispatch(getServers());
    const newState = store.getState().servers.selected[0];

    expect(action).toEqual({ type: ServersActionTypes.GET_SERVERS });
    expect(newState).toEqual(data[0]);
  });
});

describe('getServers', () => {
  test('returns an action with type `SELECT_SERVER`', () => {
    const store = storeFactory({ servers: { data } });
    const action = store.dispatch(selectServer(data[1].name));

    const newState = store.getState().servers.selected[0];

    expect(action).toEqual({
      type: ServersActionTypes.SELECT_SERVER,
      name: data[1].name
    });
    expect(newState).toEqual(data[1]);
  });
});
