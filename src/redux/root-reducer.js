import { combineReducers } from 'redux';
import { serversReducer } from './servers/servers.reducer';

const rootReducer = combineReducers({
  servers: serversReducer
});

export { rootReducer };
