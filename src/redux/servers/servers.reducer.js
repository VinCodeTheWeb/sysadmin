import { ServersActionTypes } from './servers.types';

import { data } from './data';

const INITIAL_STATE = {
  data: [],
  selected: []
};

const serversReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ServersActionTypes.GET_SERVERS:
      return {
        ...state,
        data,
        selected: [data[0]]
      };
    case ServersActionTypes.SELECT_SERVER:
      return {
        ...state,
        selected: state.data.filter(server => server.name === action.name)
      };

    default:
      return state;
  }
};

export { serversReducer };
