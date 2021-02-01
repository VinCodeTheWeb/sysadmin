import { ServersActionTypes } from './servers.types';
import { serversReducer } from './servers.reducer';
import { data } from './data';

test('returns default initial state when no action is passed', () => {
  const newState = serversReducer(undefined, {});
  expect(newState).toEqual({
    data: [],
    selected: []
  });
});

test('returns state of { servers: {data, selected: [data[0]]} } upon receiving an action of type `GET_SERVERS`', () => {
  const newState = serversReducer(undefined, {
    type: ServersActionTypes.GET_SERVERS
  });

  expect(newState).toEqual({ data, selected: [data[0]] });
});

test('returns state of { servers: {data, selected: [data[1]]} } upon receiving an action of type `SELECT_SERVER`', () => {
  const newState = serversReducer(
    { data, selected: [data[0]] },
    {
      type: ServersActionTypes.SELECT_SERVER,
      name: data[1].name
    }
  );

  expect(newState).toEqual({ data, selected: [data[1]] });
});
